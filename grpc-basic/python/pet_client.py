import grpc
import sys
from interfaces import pet_pb2
from interfaces import pet_pb2_grpc

def run():
    with grpc.insecure_channel('localhost:50053') as channel:
        stub = pet_pb2_grpc.PetStub(channel)
        pet_size = "FOO"
        try:
            pet_size = pet_pb2.PetRequest.Size.Value(sys.argv[1])
        except Exception:
            print(f"Received pet size '{sys.argv[1]}' is not a valid size")

        try:
            response = stub.GetPet(pet_pb2.PetRequest(size=pet_size))
            print(response)
        except grpc.RpcError as e:
            print(e.details())
            status_code = e.code()
            print(status_code.name)
            print(status_code.value)

if __name__ == '__main__':
    run()
