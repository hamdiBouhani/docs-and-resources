
# inatall golang

```
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf goX.XX.XX.linux-amd64.tar.gz


// example :
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.19.1.linux-amd64.tar.gz
```

```
export PATH=$PATH:/usr/local/go/bin
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin

export USE_GKE_GCLOUD_AUTH_PLUGIN=True
```

# compile go makefile:

```
compile:
	echo "Compiling for every OS and Platform"
	GOOS=freebsd GOARCH=386 go build -o bin/main-freebsd-386 main.go
	GOOS=linux GOARCH=386 go build -o bin/main-linux-386 main.go
	GOOS=windows GOARCH=386 go build -o bin/main-windows-386 main.go
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o bin/permit-db-migration-be main.go
```


# go CMDs:

```
//test coverge

GIN_MODE=release go test -v -coverprofile=coverage.out ./...
go tool cover -html=coverage.out

// update go env
go env -w GOPRIVATE=github.com/XXX/XX,github.com/YYY/YY

```