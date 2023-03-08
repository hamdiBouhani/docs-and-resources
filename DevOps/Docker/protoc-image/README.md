![Release Image](https://github.com/dealroom/protoc-image/actions/workflows/main.yml/badge.svg)

## Protoc

Image used to generate protobuf stubs (messages, services interfaces and clients for php/golang).

Includes:

- [protoc](https://github.com/protocolbuffers/protobuf)
- [protoc-gen-php plugin](https://github.com/spiral/php-grpc)
- [grpc_php_plugin](https://github.com/grpc/grpc)
- [protoc-gen-go](https://github.com/golang/protobuf/protoc-gen-go)

### Release

Release of image to GAR (Google Artifact Registry) is done automatically using CI/CD on every merge.

### Build locally

```bash
docker build -t europe-docker.pkg.dev/dealroom-artifacts/containers/protoc:latest .
```

### Push to GAR (Google Artifact Registry)
```bash
docker push europe-docker.pkg.dev/dealroom-artifacts/containers/protoc:latest
```
