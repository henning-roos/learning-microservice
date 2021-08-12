# learning-microservice
Continuous learning project

## Links
* https://www.altexsoft.com/blog/what-is-grpc/
* https://grpc.io/docs/languages/python/quickstart/
* https://github.com/grpc/grpc-go/tree/master/examples/helloworld
* https://grpc.io/docs/protoc-installation/#install-pre-compiled-binaries-any-os

## Current status
Python microservice completed.
Golang proto files not generated successfully yet.

## TODO
* Generate proto files for go
* Use generated proto files in time_server.go
* Follow the quickstart and pickout nuggets for our microservices
* Create two apps that communicate via gRPC

## Commands

How to generate the protos:
```bash
# Generate python protos
cd grpc-basic/python
python3 -m grpc.tools.protoc -I../protos --python_out=. --grpc_python_out=. ../protos/*/datetime.proto

# Testing different commands for golang protos generation - not working!
cd grpc-basic/golang
protoc -I../protos --go_out=. --go_opt=paths=source_relative \
       --go-grpc_out=. --go-grpc_opt=paths=source_relative \
       ../protos/*/datetime.proto

protoc -I../protos --go_out=. \
--go-grpc_out=. \
../protos/*/datetime.proto
```