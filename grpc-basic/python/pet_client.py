import grpc
import sys
from interfaces import pet_pb2
from interfaces import pet_pb2_grpc

def run():
    with grpc.insecure_channel('localhost:50053') as channel:
        stub = pet_pb2_grpc.PetStub(channel)
        sys.argv[1]
        response = stub.GetPet(pet_pb2.PetRequest(size=pet_pb2.PetRequest.Size.LARGE))
        print(response)

if __name__ == '__main__':
    run()
