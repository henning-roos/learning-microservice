
"""The Python implementation of the GRPC helloworld.Greeter server."""

from concurrent import futures
import logging
import datetime

import grpc
from interfaces import datetime_pb2
from interfaces import datetime_pb2_grpc


class DateService(datetime_pb2_grpc.DateServicer):

    def Date(self, request, context):
        return datetime_pb2.DateReply(date=self._get_date())

    def _get_date(self):
        return datetime.date.today()


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    datetime_pb2_grpc.add_DateServicer_to_server(DateService(), server)
    server.add_insecure_port('[::]:50051')
    server.start()

    while True:
        with grpc.insecure_channel('localhost:50052') as channel:
            stub = datetime_pb2_grpc.TimeStub(channel)
            response = stub.Time(datetime_pb2.TimeRequest())
            print("Time received: " + response.time)
        
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
