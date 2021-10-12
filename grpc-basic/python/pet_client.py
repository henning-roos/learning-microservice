import grpc
import sys
from interfaces import pet_pb2
from interfaces import pet_pb2_grpc

def run():
    with grpc.insecure_channel('localhost:50053') as channel:
        stub = pet_pb2_grpc.PetStub(channel)
        pet_size = "LARGE"
        try:
            pet_size = pet_pb2.PetRequest.Size.Value(sys.argv[1])
        except Exception:
            print(f"Received pet size '{sys.argv[1]}' is not a valid size")

        response = stub.GetPet(pet_pb2.PetRequest(size=pet_size))
        print(response)

if __name__ == '__main__':
    run()
