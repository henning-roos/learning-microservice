from concurrent import futures
import logging

import grpc
from interfaces import pet_pb2, datetime_pb2
from interfaces import pet_pb2_grpc, datetime_pb2_grpc
from pet import Pet

LOGGER = logging.getLogger("main")


class PetService(pet_pb2_grpc.PetServicer):

    def GetPet(self, request, context):
        pet_size = pet_pb2.PetRequest.Size.DESCRIPTOR.values_by_number[request.size].name
        LOGGER.info(f"Received size: {pet_size}")
        pet_type, pet_name = Pet().get_pet(pet_size)
        return pet_pb2.PetResponse(petType=pet_type, name=pet_name)

    def GetPetSound(self, request, context):
        return pet_pb2.PetSoundResponse(sound="Vof")


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
