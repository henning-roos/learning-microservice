# learning-microservice
Continuous learning project

## Links
* https://www.altexsoft.com/blog/what-is-grpc/
* https://grpc.io/docs/languages/python/quickstart/
* https://grpc.io/docs/languages/go/quickstart/
* https://github.com/grpc/grpc-go/tree/master/examples/helloworld
* https://grpc.io/docs/protoc-installation/#install-pre-compiled-binaries-any-os

## Overview
* The Python server handles Pet and the Golang server handles Time and Date.
* The user interacts with the Python server and the Python server makes requests to the Golang server.

## TODO

* Change hardcoded values in Pet server
* Create a client in the python microservice
* Error Handling
* Split server and client in python pet.py
* Fix logging in pet.py
* Make pet_client.py interactive

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

# Start pet.py
python ./pet.py

```

### How to Run the Golang Server

Open a new terminal

```bash

cd grpc-basic/golang

# Build golang binary
go build -o date_time_server

# Start date_time_server
./date_time_server

```

### How to Generate the Protos for Python

```bash

cd grpc-basic/python

# Generate protos
python3 -m grpc.tools.protoc -I../protos --python_out=. --grpc_python_out=. ../protos/*/datetime.proto
python3 -m grpc.tools.protoc -I../protos --python_out=. --grpc_python_out=. ../protos/*/pet.proto

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

#### How to install protoc in Windows (Git bash)


```bash
# Install protoc version 3.18.0 (Currently latest on Github)
curl -LO https://github.com/protocolbuffers/protobuf/releases/download/v3.18.0/protoc-3.18.0-win64.zip
unzip protoc-3.18.0-win64.zip -d $HOME/.local

# Install Golang protoc dependencies
go get -u github.com/golang/protobuf/proto
go get -u github.com/golang/protobuf/protoc-gen-go
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc

```
