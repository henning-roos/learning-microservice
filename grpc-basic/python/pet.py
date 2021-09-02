
from concurrent import futures
import logging

import grpc
from interfaces import pet_pb2
from interfaces import pet_pb2_grpc




class PetService(pet_pb2_grpc.GetPetServicer):

    def GetPet(self, request, context):
        return pet_pb2.PetResponse(petType="hund", name="Hunden")

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    pet_pb2_grpc.add_GetPetServicer_to_server(PetService(), server)
    server.add_insecure_port('localhost:50053')
    server.start()


    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
