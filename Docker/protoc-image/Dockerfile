FROM golang:1.19-buster

ARG PROTOBUF_VERSION=21.12
ARG PROTOC_FILENAME=protoc-${PROTOBUF_VERSION}-linux-x86_64.zip

ARG PHP_PROTOC_VERSION=2.12.2
ARG PHP_PROTOC_FILENAME=protoc-gen-php-grpc-${PHP_PROTOC_VERSION}-linux-amd64
ARG PHP_PROTOC_EXT=tar.gz

ARG GRPC_VERSION=1.51.1

ARG GO_PROTOC_GEN_VERSION=v1.28.1
ARG GO_PROTOC_GEN_GRPC_VERSION=v1.2

RUN apt update \
    && apt install -yq unzip wget git clang make build-essential autoconf gcc libtool libz-dev cmake python3 python3-pip \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /tmp

# Protoc install
RUN wget https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOBUF_VERSION}/${PROTOC_FILENAME} \
    && unzip ${PROTOC_FILENAME} \
    && mv ./bin/protoc /usr/local/bin/protoc \
    && mv ./include /usr/local/

# Python plugin install
RUN python3 -m pip install grpcio-tools

# protoc-gen-php plugin install (to generate php stubs for messages and service interfaces)
RUN wget https://github.com/roadrunner-server/roadrunner/releases/download/v${PHP_PROTOC_VERSION}/${PHP_PROTOC_FILENAME}.${PHP_PROTOC_EXT} \
    && tar -xzf ${PHP_PROTOC_FILENAME}.${PHP_PROTOC_EXT} \
    && mv ./${PHP_PROTOC_FILENAME}/protoc-gen-php-grpc /usr/local/bin/protoc-gen-php-grpc

# grpc_php_plugin install (to generate clients code)
RUN git clone -b v${GRPC_VERSION} https://github.com/grpc/grpc \
    && cd grpc \
    && git submodule update --init \
    && mkdir -p cmake/build \
    && cd cmake/build \
    && cmake ../.. \
    && make grpc_php_plugin \
    && mv grpc_php_plugin /usr/local/bin/grpc_php_plugin

# Remove tmp files
RUN rm -rf /tmp/*

# protoc-gen-go plugin install (to generate golang stubs)
RUN export GOPATH=$HOME/go
RUN export PATH=$PATH:$GOPATH/bin

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@${GO_PROTOC_GEN_VERSION}
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@${GO_PROTOC_GEN_GRPC_VERSION}

WORKDIR /root
