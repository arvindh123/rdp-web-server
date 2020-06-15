PROJECT_NAME := "rdp-web-server"
PKG := "github.com/arvindh123/$(PROJECT_NAME)"
export GOSUMDB=off
ifeq ($(OS),Windows_NT)
	PKG_LIST := $(shell go list ./... )
	GO_FILES := $(shell dir /S /b *.go | grep -v _test.go)
else 
	PKG_LIST := $(shell go list ${PKG}/... )
	GO_FILES := $(shell find . -name '*.go' | grep -v _test.go)
endif 



.PHONY: all dep build clean test coverage coverhtml lint

all: build

lint: 				## Lint the files
	@golint -set_exit_status ${PKG_LIST}

test: 				## run only go test <pkg>
	@go test $(PKG) 

unittest: 			## Run unittests
	 @go test -short ${PKG_LIST}

race: dep 			## Run data race detector
	@go test -race -short ${PKG_LIST}

msan: dep 			## Run memory sanitizer
	@go test -msan -short ${PKG_LIST}


dep: ## Get the dependencies
	@go get -v -d ./...


build: dep 			## Build the binary file
	@go build -i -v $(PKG) 

clean:				## clean the build
	@go clean $(PKG)


help: 				## Display this help screen
	@sed -ne '/@sed/!s/## //p' $(MAKEFILE_LIST)
