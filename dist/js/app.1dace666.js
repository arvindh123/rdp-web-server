(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},1:function(e,t){},"1c6a":function(e,t,n){"use strict";var o=n("f54e"),a=n.n(o);a.a},2:function(e,t){},3:function(e,t){},4:function(e,t){},"449f":function(e,t,n){"use strict";var o=n("a9c6"),a=n.n(o),r=function(e){var t=this;this.touchMouseThreshold=3,this.scrollThreshold=53,this.PIXELS_PER_LINE=18,this.PIXELS_PER_PAGE=16*this.PIXELS_PER_LINE,this.currentState=new a.a.Mouse.State(0,0,!1,!1,!1,!1,!1),this.onmousedown=null,this.onmouseup=null,this.onmousemove=null,this.onmouseout=null;var n=0,o=0;function r(e){e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.returnValue=!1}function i(){n=t.touchMouseThreshold}function s(e){var n=e.deltaY||-e.wheelDeltaY||-e.wheelDelta;if(n?1===e.deltaMode?n=e.deltaY*t.PIXELS_PER_LINE:2===e.deltaMode&&(n=e.deltaY*t.PIXELS_PER_PAGE):n=e.detail*t.PIXELS_PER_LINE,o+=n,o<=-t.scrollThreshold){do{t.onmousedown&&(t.currentState.up=!0,t.onmousedown(t.currentState)),t.onmouseup&&(t.currentState.up=!1,t.onmouseup(t.currentState)),o+=t.scrollThreshold}while(o<=-t.scrollThreshold);o=0}if(o>=t.scrollThreshold){do{t.onmousedown&&(t.currentState.down=!0,t.onmousedown(t.currentState)),t.onmouseup&&(t.currentState.down=!1,t.onmouseup(t.currentState)),o-=t.scrollThreshold}while(o>=t.scrollThreshold);o=0}r(e)}e.addEventListener("contextmenu",(function(e){r(e)}),!1),e.addEventListener("mousemove",(function(o){n?n--:(t.currentState.fromClientPosition(e,o.clientX,o.clientY),t.onmousemove&&t.onmousemove(t.currentState))}),!1),e.addEventListener("mousedown",(function(e){if(r(e),!n){switch(e.button){case 0:t.currentState.left=!0;break;case 1:t.currentState.middle=!0;break;case 2:t.currentState.right=!0;break}t.onmousedown&&t.onmousedown(t.currentState)}}),!1),e.addEventListener("mouseup",(function(e){if(r(e),!n){switch(e.button){case 0:t.currentState.left=!1;break;case 1:t.currentState.middle=!1;break;case 2:t.currentState.right=!1;break}t.onmouseup&&t.onmouseup(t.currentState)}}),!1),e.addEventListener("mouseout",(function(n){n||(n=window.event);var o=n.relatedTarget||n.toElement;while(o){if(o===e)return;o=o.parentNode}r(n),(t.currentState.left||t.currentState.middle||t.currentState.right)&&(t.currentState.left=!1,t.currentState.middle=!1,t.currentState.right=!1,t.onmouseup&&t.onmouseup(t.currentState)),t.onmouseout&&t.onmouseout()}),!1),e.addEventListener("selectstart",(function(e){r(e)}),!1),e.addEventListener("touchmove",i,!1),e.addEventListener("touchstart",i,!1),e.addEventListener("touchend",i,!1),e.addEventListener("DOMMouseScroll",s,!1),e.addEventListener("mousewheel",s,!1),e.addEventListener("wheel",s,!1);var c=function(){var e=document.createElement("div");if(!("cursor"in e.style))return!1;try{e.style.cursor="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==) 0 0, auto"}catch(t){return!1}return/\burl\([^()]*\)\s+0\s+0\b/.test(e.style.cursor||"")}();this.setCursor=function(t,n,o){if(c){var a=t.toDataURL("image/png");return e.style.cursor="url("+a+") "+n+" "+o+", auto",!0}return!1}};r.State=a.a.Mouse.State,r.Touchpad=a.a.Mouse.Touchpad,r.Touchscreen=a.a.Mouse.Touchscreen,t["a"]={mouse:r}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.connect?n("guac-client",{attrs:{query:e.query,"force-http":e.forceHttp}}):n("div",{attrs:{id:"app"}},[n("h1",[e._v("Remoted Desktop Web Client")]),n("p",{attrs:{align:"center"}},[e._v("Enter connection information to connect")]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"scheme"}},[e._v("Scheme/Protocol")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.scheme,expression:"scheme"}],attrs:{type:"text",id:"scheme"},domProps:{value:e.scheme},on:{input:function(t){t.target.composing||(e.scheme=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"hostname"}},[e._v("Hostname or IP Address")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.hostname,expression:"hostname"}],attrs:{type:"text",id:"hostname"},domProps:{value:e.hostname},on:{input:function(t){t.target.composing||(e.hostname=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"port"}},[e._v("Port (if not default)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.port,expression:"port"}],attrs:{type:"text",id:"port"},domProps:{value:e.port},on:{input:function(t){t.target.composing||(e.port=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"domain"}},[e._v("Domain")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.domain,expression:"domain"}],attrs:{type:"text",id:"domain"},domProps:{value:e.domain},on:{input:function(t){t.target.composing||(e.domain=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"user"}},[e._v("User name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],attrs:{type:"text",id:"user"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"pass"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],attrs:{type:"password",id:"pass"},domProps:{value:e.pass},on:{input:function(t){t.target.composing||(e.pass=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"ignorecert"}},[e._v("Ignore Certificate")]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.ignoreCert,expression:"ignoreCert"}],attrs:{type:"checkbox",id:"ignorecert"},domProps:{checked:Array.isArray(e.ignoreCert)?e._i(e.ignoreCert,null)>-1:e.ignoreCert},on:{change:function(t){var n=e.ignoreCert,o=t.target,a=!!o.checked;if(Array.isArray(n)){var r=null,i=e._i(n,r);o.checked?i<0&&(e.ignoreCert=n.concat([r])):i>-1&&(e.ignoreCert=n.slice(0,i).concat(n.slice(i+1)))}else e.ignoreCert=a}}})])]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"nla"}},[e._v("Security")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.security,expression:"security"}],attrs:{type:"text",id:"nla",placeholder:"type nla here for Network Level Authentication"},domProps:{value:e.security},on:{input:function(t){t.target.composing||(e.security=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",[e._v("Query string")]),n("span",{staticClass:"pl-1"},[e._v(e._s(e.scrubbedQuery))])]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"forcehttp"}},[e._v("Force HTTP Tunnel")]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.forceHttp,expression:"forceHttp"}],attrs:{type:"checkbox",id:"forcehttp"},domProps:{checked:Array.isArray(e.forceHttp)?e._i(e.forceHttp,null)>-1:e.forceHttp},on:{change:function(t){var n=e.forceHttp,o=t.target,a=!!o.checked;if(Array.isArray(n)){var r=null,i=e._i(n,r);o.checked?i<0&&(e.forceHttp=n.concat([r])):i>-1&&(e.forceHttp=n.slice(0,i).concat(n.slice(i+1)))}else e.forceHttp=a}}})])]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"width"}},[e._v("Screen Width")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.width,expression:"width"}],attrs:{type:"text",id:"width"},domProps:{value:e.width},on:{input:function(t){t.target.composing||(e.width=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"height"}},[e._v("Screen Height")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.height,expression:"height"}],attrs:{type:"text",id:"height"},domProps:{value:e.height},on:{input:function(t){t.target.composing||(e.height=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"dpi"}},[e._v("Resolution ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.dpi,expression:"dpi"}],attrs:{type:"text",id:"dpi"},domProps:{value:e.dpi},on:{input:function(t){t.target.composing||(e.dpi=t.target.value)}}})]),n("div",{staticClass:"center"},[n("button",{staticClass:"connect",on:{click:function(t){return e.doConnect()}}},[e._v("Connect")])])])],1)},r=[],i=(n("99af"),n("a15b"),n("4fad"),n("ac1f"),n("5319"),n("e587")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"viewport",staticClass:"viewport"},[n("modal",{ref:"modal",on:{reconnect:function(t){return e.connect(e.query)}}}),n("div",{ref:"display",staticClass:"display",attrs:{tabindex:"0"}})],1)},c=[],u=n("6172"),l=u["a"],d=(n("e7ae"),n("2877")),p=Object(d["a"])(l,s,c,!1,null,"33ef4b6a",null),h=p.exports,f={name:"app",components:{GuacClient:h},data:function(){return{connect:!1,scheme:"telnet",hostname:"towel.blinkenlights.nl",port:"",domain:"",user:"",pass:"",ignoreCert:!0,security:"",forceHttp:!1,height:window.innerHeight,width:window.innerWidth,dpi:32}},computed:{queryObj:function(){return{scheme:this.scheme,hostname:this.hostname,port:this.port,"ignore-cert":this.ignoreCert,security:this.security,domain:this.domain,username:this.user,password:this.pass,height:this.height,width:this.width,dpi:this.dpi}},query:function(){for(var e=[],t=0,n=Object.entries(this.queryObj);t<n.length;t++){var o=Object(i["a"])(n[t],2),a=o[0],r=o[1];r&&e.push("".concat(a,"=").concat(encodeURIComponent(r)))}return e.join("&")},scrubbedQuery:function(){return this.query.replace(/password=[^& ]+/,"password=****")}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{doConnect:function(){window.localStorage&&window.localStorage.setItem("query",JSON.stringify(this.queryObj)),this.connect=!0},handleResize:function(){this.width=window.innerWidth,this.height=window.innerHeight}},mounted:function(){if(window.localStorage&&window.localStorage.getItem("query")){var e;try{e=JSON.parse(window.localStorage.getItem("query"))}catch(t){return void window.localStorage.setItem("query","{}")}this.scheme=e.scheme,this.hostname=e.hostname,this.port=e.port,this.ignoreCert=e["ignore-cert"],this.nla=e.nla,this.domain=e.domain,this.user=e.username,this.pass=e.password}}},m=f,v=(n("034f"),Object(d["a"])(m,a,r,!1,null,null,null)),g=v.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(g)}}).$mount("#app")},6172:function(e,t,n){"use strict";(function(e){n("a4d3"),n("e01a"),n("d28b"),n("0d03"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");var o=n("a9c6"),a=n.n(o),r=n("449f"),i=n("ac53"),s=n("cf78"),c=n("714b"),u=n("1c46");a.a.Mouse=r["a"].mouse;var l="AES-256-CBC",d="a very very very very secret key",p="ws://".concat(location.host,"/websocket-tunnel"),h="http://".concat(location.host,"/tunnel");t["a"]={components:{Modal:c["a"]},props:{query:{type:String,required:!0},forceHttp:{type:Boolean,required:!1,default:!1}},data:function(){return{connected:!1,display:null,currentAdjustedHeight:null,client:null,keyboard:null,mouse:null,lastEvent:null,connectionState:i["a"].IDLE,errorMessage:"",arguments:{}}},watch:{connectionState:function(e){this.$refs.modal.show(e,this.errorMessage)}},methods:{encrypt:function(t,n,o){var a=u.randomBytes(16),r=u.createCipheriv(t,n,a),i=r.update(JSON.stringify(o),"utf8","base64");i+=r.final("base64");var s={iv:a.toString("base64"),value:i};return new e(JSON.stringify(s)).toString("base64")},send:function(e){if(this.client){var t=!0,n=!1,o=void 0;try{for(var a,r=e.data[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){var i=a.value;this.client.sendKeyEvent(1,i.charCodeAt(0))}}catch(s){n=!0,o=s}finally{try{t||null==r.return||r.return()}finally{if(n)throw o}}}},copy:function(e){this.client&&(s["a"].cache={type:"text/plain",data:e.data},s["a"].setRemoteClipboard(this.client))},handleMouseState:function(e){var t=Object.assign({},e,{x:e.x/this.display.getScale(),y:e.y/this.display.getScale()});this.client.sendMouseState(t)},resize:function(){var e=this,t=this.$refs.viewport;if(t&&t.offsetWidth){var n=window.devicePixelRatio||1,o=t.clientWidth*n,a=t.clientHeight*n;this.display.getWidth()===o&&this.display.getHeight()===a||this.client.sendSize(o,a),setTimeout((function(){var n=Math.min(t.clientWidth/Math.max(e.display.getWidth(),1),t.clientHeight/Math.max(e.display.getHeight(),1));e.display.scale(n)}),100)}},connect:function(e){var t,n=this;t=window.WebSocket&&!this.forceHttp?new a.a.WebSocketTunnel(p):new a.a.HTTPTunnel(h,!0),this.client&&(this.display.scale(0),this.uninstallKeyboard()),this.client=new a.a.Client(t),s["a"].install(this.client),t.onerror=function(e){console.error("Tunnel failed ".concat(JSON.stringify(e))),n.connectionState=i["a"].TUNNEL_ERROR},t.onstatechange=function(e){switch(e){case a.a.Tunnel.State.CONNECTING:n.connectionState=i["a"].CONNECTING;break;case a.a.Tunnel.State.OPEN:n.connectionState=i["a"].CONNECTED;break;case a.a.Tunnel.State.UNSTABLE:break;case a.a.Tunnel.State.CLOSED:n.connectionState=i["a"].DISCONNECTED;break}},this.client.onstatechange=function(e){switch(e){case 0:n.connectionState=i["a"].IDLE;break;case 1:break;case 2:n.connectionState=i["a"].WAITING;break;case 3:n.connectionState=i["a"].CONNECTED,window.addEventListener("resize",n.resize),n.$refs.viewport.addEventListener("mouseenter",n.resize),s["a"].setRemoteClipboard(n.client);case 4:case 5:break}},this.client.onerror=function(e){n.client.disconnect(),console.error("Client error ".concat(JSON.stringify(e))),n.errorMessage=e.message,n.connectionState=i["a"].CLIENT_ERROR},this.client.onsync=function(){},this.client.onargv=function(e,t,o){if("text/plain"===t){var r=new a.a.StringReader(e),i="";r.ontext=function(e){i+=e},r.onend=function(){var e=n.client.createArgumentValueStream("text/plain",o);e.onack=function(e){e.isError()||(n.arguments[o]=i)}}}},this.client.onclipboard=s["a"].onClipboard,this.display=this.client.getDisplay();var o=this.$refs.display;o.appendChild(this.display.getElement()),o.addEventListener("contextmenu",(function(e){e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.returnValue=!1})),this.client.connect(this.encrypt(l,d,e)),window.onunload=function(){return n.client.disconnect()},this.mouse=new a.a.Mouse(o),this.mouse.onmouseout=function(){n.display&&n.display.showCursor(!1)},o.onclick=function(){o.focus()},o.onfocus=function(){o.className="focus"},o.onblur=function(){o.className=""},this.keyboard=new a.a.Keyboard(o),this.installKeyboard(),this.mouse.onmousedown=this.mouse.onmouseup=this.mouse.onmousemove=this.handleMouseState,setTimeout((function(){n.resize(),o.focus()}),1e3)},installKeyboard:function(){var e=this;this.keyboard.onkeydown=function(t){e.client.sendKeyEvent(1,t)},this.keyboard.onkeyup=function(t){e.client.sendKeyEvent(0,t)}},uninstallKeyboard:function(){this.keyboard.onkeydown=this.keyboard.onkeyup=function(){}}},mounted:function(){this.query&&!this.connected&&(this.connected=!0,this.connect(this.query))}}}).call(this,n("b639").Buffer)},"714b":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.status?n("div",{staticClass:"modal"},[n("h2",[e._v(e._s(e.title[e.status]))]),n("p",[e._v(e._s(e.message?e.message:e.text[e.status]))]),e.canReconnect?n("span",{staticClass:"rct",on:{click:function(t){return e.$emit("reconnect")}}},[e._v(" Reconnect ")]):e._e()]):e._e()},a=[],r=(n("caad"),n("ac53")),i={data:function(){return{status:null,message:"",title:{CONNECTING:"Connecting",DISCONNECTED:"Disconnected",UNSTABLE:"Unstable",WAITING:"Waiting",CLIENT_ERROR:"Client Error"},text:{CONNECTING:"Connecting to Guacamole...",DISCONNECTED:"You have been disconnected.",UNSTABLE:"The network connection to the Guacamole server appears unstable.",WAITING:"Connected to Guacamole. Waiting for response..."}}},computed:{canReconnect:function(){return["DISCONNECTED","CLIENT_ERROR"].includes(this.status)}},methods:{show:function(e,t){e===r["a"].CONNECTED?this.status=null:this.status=e,this.message=t}}},s=i,c=(n("1c6a"),n("2877")),u=Object(c["a"])(s,o,a,!1,null,"5bc6b08d",null);t["a"]=u.exports},"85ec":function(e,t,n){},ac53:function(e,t,n){"use strict";t["a"]={IDLE:"IDLE",CONNECTING:"CONNECTING",WAITING:"WAITING",CONNECTED:"CONNECTED",DISCONNECTED:"DISCONNECTED",CLIENT_ERROR:"CLIENT_ERROR",TUNNEL_ERROR:"TUNNEL_ERROR"}},cf78:function(e,t,n){"use strict";n("d3b7"),n("ac1f"),n("96cf");var o=n("a9c6"),a=n.n(o),r={install:function(e){r.getLocalClipboard().then((function(e){return r.cache=e})),window.addEventListener("load",r.update(e),!0),window.addEventListener("copy",r.update(e)),window.addEventListener("cut",r.update(e)),window.addEventListener("focus",(function(t){t.target===window&&r.update(e)()}),!0)},update:function(e){return function(){r.getLocalClipboard().then((function(t){r.cache=t,r.setRemoteClipboard(e)}))}},setRemoteClipboard:function(e){if(r.cache){var t,n=e.createClipboardStream(r.cache.type);"string"===typeof r.cache.data?(t=new a.a.StringWriter(n),t.sendText(r.cache.data),t.sendEnd()):(t=new a.a.BlobWriter(n),t.oncomplete=function(){t.sendEnd()},t.sendBlob(r.cache.data))}},getLocalClipboard:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!navigator.clipboard||!navigator.clipboard.readText){t.next=5;break}return t.next=3,regeneratorRuntime.awrap(navigator.clipboard.readText());case 3:return e=t.sent,t.abrupt("return",{type:"text/plain",data:e});case 5:case"end":return t.stop()}}))},setLocalClipboard:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!navigator.clipboard||!navigator.clipboard.writeText){t.next=4;break}if("text/plain"!==e.type){t.next=4;break}return t.next=4,regeneratorRuntime.awrap(navigator.clipboard.writeText(e.data));case 4:case"end":return t.stop()}}))},onClipboard:function(e,t){var n;if(/^text\//.exec(t)){n=new a.a.StringReader(e);var o="";n.ontext=function(e){o+=e},n.onend=function(){r.setLocalClipboard({type:t,data:o})}}else n=new a.a.BlobReader(e,t),n.onend=function(){r.setLocalClipboard({type:t,data:n.getBlob()})}}};t["a"]=r},e7ae:function(e,t,n){"use strict";var o=n("ea08"),a=n.n(o);a.a},ea08:function(e,t,n){},f54e:function(e,t,n){}});
//# sourceMappingURL=app.1dace666.js.map