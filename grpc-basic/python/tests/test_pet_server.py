import grpc
import grpc_testing
import unittest
from unittest import mock

import pet
from pet_server import PetService
from interfaces import pet_pb2

class MyTestCase(unittest.TestCase):
    """
    https://github.com/alexykot/grpcio-test-example/blob/master/example/test_greeter_server.py
    """
    def setUp(self):
        servicers = {
            pet_pb2.DESCRIPTOR.services_by_name['Pet']: PetService()
        }

        self.test_server = grpc_testing.server_from_dictionary(
            servicers, grpc_testing.strict_real_time())

    @mock.patch("pet_server._print_time")
    def test_pet_server_run(self, print_time):
        pet_size = "SMALL"
        request = pet_pb2.PetRequest(size=pet_size)

        getpet_method = self.test_server.invoke_unary_unary(
            method_descriptor=(pet_pb2.DESCRIPTOR
                .services_by_name['Pet']
                .methods_by_name['GetPet']),
            invocation_metadata={},
            request=request, timeout=1)

        response, metadata, code, details = getpet_method.termination()
        self.assertIn(response.petType, pet.Pet.pets["small"])
        self.assertIn(response.name, pet.Pet.pet_names)
        self.assertEqual(code, grpc.StatusCode.OK)
        print_time.assert_called_once()

    @mock.patch("pet_server._print_time")
    def test_pet_server_unavailable(self, print_time):
        pet_size = "SMALL"
        request = pet_pb2.PetRequest(size=pet_size)

        print_time.side_effect = grpc.RpcError("Error error")

        getpet_method = self.test_server.invoke_unary_unary(
            method_descriptor=(pet_pb2.DESCRIPTOR
                .services_by_name['Pet']
                .methods_by_name['GetPet']),
            invocation_metadata={},
            request=request, timeout=1)

        response, metadata, code, details = getpet_method.termination()
        self.assertEqual(code, grpc.StatusCode.OK)
        print_time.assert_called_once()

if __name__ == '__main__':
    unittest.main()
