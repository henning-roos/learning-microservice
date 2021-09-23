from concurrent import futures
import logging

import grpc
from interfaces import pet_pb2, datetime_pb2
from interfaces import pet_pb2_grpc, datetime_pb2_grpc


LOGGER = logging.getLogger("main")


class PetService(pet_pb2_grpc.PetServicer):

    def GetPet(self, request, context):
        getTime()
        return pet_pb2.PetResponse(petType="hund", name="Karo")
    
    def GetPetSound(self, request, context):
        getTime()
        return pet_pb2.PetSoundResponse(sound="Vof")

def getTime():
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
