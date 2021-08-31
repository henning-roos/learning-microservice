# learning-microservice
Continuous learning project

## Links
* https://www.altexsoft.com/blog/what-is-grpc/
* https://grpc.io/docs/languages/python/quickstart/
* https://grpc.io/docs/languages/go/quickstart/
* https://github.com/grpc/grpc-go/tree/master/examples/helloworld
* https://grpc.io/docs/protoc-installation/#install-pre-compiled-binaries-any-os

## Current status
Python microservice completed.
Golang proto files generated successfully.

## TODO

* Use generated proto files in time_server.go
* Follow the quickstart and pickout nuggets for our microservices
* Create two apps that communicate via gRPC

## Commands

### How to Run the Python Server

Open a new terminal

```bash

cd grpc-basic/python

# Create virtual environment for Python
python -m venv venv

# Activate virtual environment
source venv/Scripts/activate # in Windows
source venv/bin/activate # in Linux

# Install requirements
pip install -r requirements.txt

# Start date_server
python ./date_server.py

```

### How to Run the Golang Server

Open a new terminal

```bash

cd grpc-basic/golang

# Build golang binary
go build -o time_server

# Start time_server
./time_server

```

### How to Generate the Protos for Python

```bash

cd grpc-basic/python

# Generate protos
python3 -m grpc.tools.protoc -I../protos --python_out=. --grpc_python_out=. ../protos/*/datetime.proto

```

### How to Generate the Protos for Golang

```bash

cd grpc-basic/golang

# Generate protos, Option 1
protoc -I../protos --go_out=. --go_opt=paths=source_relative \
       --go-grpc_out=. --go-grpc_opt=paths=source_relative \
       ../protos/*/datetime.proto

# Generate protos, Option 2
protoc -I../protos --go_out=. \
--go-grpc_out=. \
../protos/*/datetime.proto

```
