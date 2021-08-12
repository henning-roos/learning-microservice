# learning-microservice
Continuous learning project

## Links
* https://www.altexsoft.com/blog/what-is-grpc/
* https://grpc.io/docs/languages/python/quickstart/
* https://github.com/grpc/grpc-go/tree/master/examples/helloworld

## Current status
Python microservice started and generated needed files(need to run it again).

## TODO
* Create Go microservice
* Follow the quickstart and pickout nuggets for our microservices
* Create two apps that communicate via gRPC

## Commands

Example for how to generate the protos
```bash
cd grpc-basic/python
python3 -m grpc.tools.protoc -I../protos --python_out=. --grpc_python_out=. ../protos/*/datetime.proto
```