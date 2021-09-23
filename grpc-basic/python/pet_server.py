from concurrent import futures
import logging

import grpc
from interfaces import pet_pb2, datetime_pb2
from interfaces import pet_pb2_grpc, datetime_pb2_grpc
from pet import Pet

LOGGER = logging.getLogger("main")


class PetService(pet_pb2_grpc.PetServicer):

    def GetPet(self, request, context):
        _print_time()
        pet_size = pet_pb2.DESCRIPTOR.message_types_by_name['PetRequest'].fields_by_name['size'].enum_type.values_by_number[request.size].name
        LOGGER.info(f"Received size: {pet_size}")
        pet_to_return = Pet().get_pet(pet_size)
        return pet_pb2.PetResponse(petType=pet_to_return, name="Karo")

    def GetPetSound(self, request, context):
        _print_time()
        return pet_pb2.PetSoundResponse(sound="Vof")


def _print_time():
    with grpc.insecure_channel('localhost:50052') as channel:
        stub = datetime_pb2_grpc.DateTimeStub(channel)
        response = stub.GetTime(datetime_pb2.TimeRequest())
        LOGGER.info(f"Received request at {response.time}")


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    pet_pb2_grpc.add_PetServicer_to_server(PetService(), server)
    server.add_insecure_port('localhost:50053')
    server.start()
    LOGGER.info("Starting Pet Service at localhost:50053")
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    serve()
