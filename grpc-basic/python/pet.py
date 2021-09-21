
from concurrent import futures
import logging

import grpc
from interfaces import pet_pb2, datetime_pb2
from interfaces import pet_pb2_grpc, datetime_pb2_grpc

class PetService(pet_pb2_grpc.PetServicer):

    def GetPet(self, request, context):
        with grpc.insecure_channel('localhost:50053') as channel:
            stub = datetime_pb2_grpc.TimeStub(channel)
            response = stub.GetTime(datetime_pb2.TimeRequest())
            # fix logging
            logging.info(response)
        return pet_pb2.PetResponse(petType="hund", name="Karo")
    
    def GetPetSound(self, request, context):
        # make time request
        return pet_pb2.PetSoundResponse(sound="Vof")

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    pet_pb2_grpc.add_PetServicer_to_server(PetService(), server)
    server.add_insecure_port('localhost:50053')
    server.start()
    server.wait_for_termination()

if __name__ == '__main__':
    logging.basicConfig()
    serve()
