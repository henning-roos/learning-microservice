
"""The Python implementation of the GRPC helloworld.Greeter server."""

from concurrent import futures
import logging
import datetime

import grpc
import datetime_pb2
import datetime_pb2_grpc


class DateService(datetime_pb2_grpc.DateServicer):

    def Date(self, request, context):
        return datetime_pb2.DateReply(date=self._get_date())

    def _get_date(self):
        return datetime.date.today()


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    datetime_pb2_grpc.add_GreeterServicer_to_server(DateService(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
