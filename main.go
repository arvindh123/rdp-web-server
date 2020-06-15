package main

import (
	"encoding/json"
	"strings"
	"fmt"
	"io/ioutil"
	"net"
	"net/http"
	"net/url"
	"strconv"
	"encoding/base64"
	"crypto/aes"
	"crypto/cipher"
	"github.com/sirupsen/logrus"
	"github.com/arvindh123/guac"
)
var keyString string = "a very very very very secret key"
func main() {
	logrus.SetLevel(logrus.InfoLevel)

	servlet := guac.NewServer(DemoDoConnect)
	wsServer := guac.NewWebsocketServer(DemoDoConnect)

	sessions := guac.NewMemorySessionStore()
	wsServer.OnConnect = sessions.Add
	wsServer.OnDisconnect = sessions.Delete

	mux := http.NewServeMux()
	mux.Handle("/", http.FileServer(http.Dir("./dist/")))
	mux.Handle("/tunnel", servlet)
	mux.Handle("/tunnel/", servlet)
	mux.Handle("/websocket-tunnel", wsServer)
	mux.HandleFunc("/sessions/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		sessions.RLock()
		defer sessions.RUnlock()

		type ConnIds struct {
			Uuid string `json:"uuid"`
			Num  int    `json:"num"`
		}

		connIds := make([]*ConnIds, len(sessions.ConnIds))

		i := 0
		for id, num := range sessions.ConnIds {
			connIds[i] = &ConnIds{
				Uuid: id,
				Num:  num,
			}
		}

		if err := json.NewEncoder(w).Encode(connIds); err != nil {
			logrus.Error(err)
		}
	})

	logrus.Println("Serving on http://0.0.0.0:4567")

	s := &http.Server{
		Addr:           "0.0.0.0:4567",
		Handler:        mux,
		ReadTimeout:    guac.SocketTimeout,
		WriteTimeout:   guac.SocketTimeout,
		MaxHeaderBytes: 1 << 20,
	}
	err := s.ListenAndServe()
	if err != nil {
		fmt.Println(err)
	}
}

// DemoDoConnect creates the tunnel to the remote machine (via guacd)
func DemoDoConnect(request *http.Request) (guac.Tunnel, error) {
	config := guac.NewGuacamoleConfiguration()
	fmt.Println("Raw Query -", request.URL.RawQuery)
	var query url.Values
	var err error 
	if request.URL.RawQuery == "connect" {
		// http tunnel uses the body to pass parameters
		data, err := ioutil.ReadAll(request.Body)
		if err != nil {
			logrus.Error("Failed to read body ", err)
			return nil, err
		}
		_ = request.Body.Close()
		query, err = GetDecryptQuery(keyString,string(data))
		// query, err = url.ParseQuery(string(data))
		if err != nil {
			logrus.Error("Failed to parse body query ", err)
			return nil, err
		}
		logrus.Debugln("body:",  query)
	} else {
		// query = request.URL.Query()
		query, err = GetDecryptQuery(keyString,request.URL.RawQuery)
		if err != nil {
			return nil, err
		}
	}
	logrus.Debug("Query string",query)
	config.Protocol = query.Get("scheme")
	config.Parameters = map[string]string{}
	for k, v := range query {
		config.Parameters[k] = v[0]
	}


	if query.Get("width") != "" {
		config.OptimalScreenHeight, err = strconv.Atoi(query.Get("width"))
		if err != nil || config.OptimalScreenHeight == 0 {
			logrus.Error("Invalid height")
			config.OptimalScreenHeight = 600
		}
	}
	if query.Get("height") != "" {
		config.OptimalScreenWidth, err = strconv.Atoi(query.Get("height"))
		if err != nil || config.OptimalScreenWidth == 0 {
			logrus.Error("Invalid width")
			config.OptimalScreenWidth = 800
		}
	}
	if query.Get("dpi") != "" {
		config.OptimalResolution, err = strconv.Atoi(query.Get("dpi"))
		if err != nil || config.OptimalResolution == 0 {
			logrus.Error("Invalid width")
			config.OptimalResolution = 32
		}
	}
	config.AudioMimetypes = []string{"audio/L16", "rate=44100", "channels=2"}

	logrus.Debug("Connecting to guacd")
	addr, err := net.ResolveTCPAddr("tcp", "127.0.0.1:4822")

	conn, err := net.DialTCP("tcp", nil, addr)
	if err != nil {
		logrus.Errorln("error while connecting to guacd", err)
		return nil, err
	}

	stream := guac.NewStream(conn, guac.SocketTimeout)

	logrus.Debug("Connected to guacd")
	if request.URL.Query().Get("uuid") != "" {
		config.ConnectionID = request.URL.Query().Get("uuid")
	}
	logrus.Debugf("Starting handshake with %#v", config)
	err = stream.Handshake(config)
	if err != nil {
		return nil, err
	}
	logrus.Debug("Socket configured")
	return guac.NewSimpleTunnel(stream), nil
}


type TokenEncrypted struct {
	IV string  `json:"iv"`
	Value string `json:"value"`
}

func GetDecryptQuery(keyString ,EncryptedQuery string) (url.Values,error) {
	key := []byte(keyString)
	token := &TokenEncrypted{}
	sDec, _ := base64.StdEncoding.DecodeString(EncryptedQuery)
	err := json.Unmarshal(sDec, token )
	if err == nil {
		iv,_ := base64.StdEncoding.DecodeString(token.IV)
		value,_ := base64.StdEncoding.DecodeString(token.Value)
		block, err := aes.NewCipher(key)
		if err != nil {
			return nil,err 
		}
		cbc := cipher.NewCBCDecrypter(block, iv)
		cbc.CryptBlocks(value,value)
		return url.ParseQuery(strings.Trim(string(PKCS5UnPadding(value)), "\"")) 
	} 
	return nil,err 
}

func PKCS5UnPadding(src []byte) []byte {
	length := len(src)
	unpadding := int(src[length-1])
	return src[:(length - unpadding)]
}
