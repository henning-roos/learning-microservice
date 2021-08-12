# learning-microservice
Continuous learning project

## Links
* https://www.altexsoft.com/blog/what-is-grpc/
* https://grpc.io/docs/languages/python/quickstart/

## Current status
Python microservice started and generated needed files(need to run it again).

## TODO
* Create Go microservice
* Follow the quickstart and pickout nuggets for our microservices
* Create two apps that communicate via gRPC

## Commands

Example for how to generate the protos
```bash
python3 -m grpc.tools.protoc -I../protos --python_out=./protos_generated_files --grpc_python_out=./protos_generated_files ../protos/datetime.proto

## Hello world
python3 -m grpc.tools.protoc -I./ --python_out=. --grpc_python_out=. helloworld.proto
```