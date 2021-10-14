import grpc
import sys
from interfaces import pet_pb2
from interfaces import pet_pb2_grpc


def run():
    size_list = list(pet_pb2.PetRequest.Size.DESCRIPTOR.values_by_name)
    with grpc.insecure_channel('localhost:50053') as channel:
        stub = pet_pb2_grpc.PetStub(channel)
        if len(sys.argv) < 2:
            print(f"Must provide pet size {size_list}")
            return
        try:
            pet_size = pet_pb2.PetRequest.Size.Value(sys.argv[1])
        except Exception:
            print(f"Received pet size '{sys.argv[1]}' is not a valid size, must be one of {size_list}")
            return

        try:
            response = stub.GetPet(pet_pb2.PetRequest(size=pet_size))
            print(response)
        except grpc.RpcError as e:
            print(f"ERROR: Trying to get pet - {e.details()}")


if __name__ == '__main__':
    run()
