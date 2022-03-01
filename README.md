# learning-microservice
Continuous learning project

## TODO
* Add GRPC client in angular app to retrieve pets from python service
* Error handling
* Add more views to display pet properties

### How to Generate the Protos for Angular
```bash
cd pet-shop

npm run proto:generate
```

### How to Generate the Protos for Python

```bash
python3 -m grpc.tools.protoc -I./protos --python_out=./pet-service/ --grpc_python_out=./pet-service/ $(find ./protos -iname *.proto)

```

### How to Run the Python Server

Open a new terminal

```bash

cd pet-service

# Create virtual environment for Python
python -m venv venv

# Activate virtual environment
source venv/Scripts/activate # in Windows
source venv/bin/activate # in Linux

# Install requirements
pip install -r requirements.txt

# Start pet.py
python ./pet_server.py

```

## Future Ideas

* Learn Angular
    * Both frontend and backend?
    * https://angular.io/
    * https://material.angular.io/

