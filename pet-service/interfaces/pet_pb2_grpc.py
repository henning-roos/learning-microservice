# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from interfaces import pet_pb2 as interfaces_dot_pet__pb2


class PetStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetPet = channel.unary_unary(
                '/pet.Pet/GetPet',
                request_serializer=interfaces_dot_pet__pb2.PetRequest.SerializeToString,
                response_deserializer=interfaces_dot_pet__pb2.PetResponse.FromString,
                )
        self.GetPetSound = channel.unary_unary(
                '/pet.Pet/GetPetSound',
                request_serializer=interfaces_dot_pet__pb2.PetSoundRequest.SerializeToString,
                response_deserializer=interfaces_dot_pet__pb2.PetSoundResponse.FromString,
                )


class PetServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetPet(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetPetSound(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_PetServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetPet': grpc.unary_unary_rpc_method_handler(
                    servicer.GetPet,
                    request_deserializer=interfaces_dot_pet__pb2.PetRequest.FromString,
                    response_serializer=interfaces_dot_pet__pb2.PetResponse.SerializeToString,
            ),
            'GetPetSound': grpc.unary_unary_rpc_method_handler(
                    servicer.GetPetSound,
                    request_deserializer=interfaces_dot_pet__pb2.PetSoundRequest.FromString,
                    response_serializer=interfaces_dot_pet__pb2.PetSoundResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'pet.Pet', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Pet(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetPet(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/pet.Pet/GetPet',
            interfaces_dot_pet__pb2.PetRequest.SerializeToString,
            interfaces_dot_pet__pb2.PetResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetPetSound(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/pet.Pet/GetPetSound',
            interfaces_dot_pet__pb2.PetSoundRequest.SerializeToString,
            interfaces_dot_pet__pb2.PetSoundResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
