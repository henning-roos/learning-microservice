
from concurrent import futures
import logging

import grpc
from interfaces import pet_pb2
from interfaces import pet_pb2_grpc




class PetService(pet_pb2_grpc.GetPetServicer):
    #TODO: replace names here

    def Date(self, request, context):
        return datetime_pb2.DateReply(date=self._get_date())

    def _get_date(self):
        return datetime.date.today()


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    datetime_pb2_grpc.add_DateServicer_to_server(DateService(), server)
    server.add_insecure_port('localhost:50053')
    server.start()


    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
