# learning-microservice
Continuous learning project

## TODO
* Error handling
* Add more views to display pet properties


## Discussions 12th April

What to do next:
* Build upon the existing 'pet-shop' web server in Angular
* Switch out grpc protos to HTTP REST API
* Add authentication mechanism (with 3rd party API)
* Logged in users can choose their pets - web UI updates
* Add a database to store data - MySQL?
* Containerize to deploy in cluster later


### Requirements
* A user can log in with a Google account to the pet shop
* A logged in user can log out.
* A user can see their username when logged in (the full name taken from the Google account)
* A logged in user can choose an existing pet from available pets.
* A logged in user can rename their own pets.
* A logged in user can view all pets and their owners.
* Anonymous (not-logged in) users can view all pets and their owners.
* Anonymous (not-logged in) users can NOT choose pets.
* Anonymous (not-logged in) user can NOT rename any pets.
* All new pets are generated with a name and a picture.
* The same picture is never used on multiple pets.



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

## Useful Links

* Learn Angular
    * Both frontend and backend?
    * https://angular.io/
    * https://material.angular.io/

