import grpc
from interfaces import pet_pb2
from interfaces import pet_pb2_grpc

def run():
    with grpc.insecure_channel('localhost:50053') as channel:
        stub = pet_pb2_grpc.PetStub(channel)
        response = stub.GetPet(pet_pb2.PetRequest(size=pet_pb2.PetRequest.Size.SMALL))
        print(response)

if __name__ == '__main__':
    run()
