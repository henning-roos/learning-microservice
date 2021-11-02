import grpc
import grpc_testing
import unittest
from unittest import mock

import pet
import pet_server
from pet_server import PetService
from interfaces import pet_pb2


class MyTestCase(unittest.TestCase):
    """
    https://github.com/alexykot/grpcio-test-example/blob/master/example/test_greeter_server.py
    """
    def setUp(self):
        services = {
            pet_pb2.DESCRIPTOR.services_by_name['Pet']: PetService()
        }

        self.test_server = grpc_testing.server_from_dictionary(
            services, grpc_testing.strict_real_time())

    @mock.patch("pet_server._print_time")
    def test_pet_server_run(self, print_time):
        pet_size = "SMALL"
        request = pet_pb2.PetRequest(size=pet_size)

        get_pet_method = self.test_server.invoke_unary_unary(
            method_descriptor=(
                pet_pb2.DESCRIPTOR.services_by_name['Pet']
                                  .methods_by_name['GetPet']),
            invocation_metadata={},
            request=request, timeout=1)

        response, metadata, code, details = get_pet_method.termination()
        self.assertIn(response.petType, pet.Pet.pets["small"])
        self.assertIn(response.name, pet.Pet.pet_names)
        self.assertEqual(code, grpc.StatusCode.OK)
        print_time.assert_called_once()

    @mock.patch("grpc.insecure_channel")
    @mock.patch("interfaces.datetime_pb2_grpc.DateTimeStub")
    def test_print_time_unavailable(self, mock_date_time_stub, mock_insecure_channel):
        mock_stub = mock.Mock()
        mock_date_time_stub.return_value = mock_stub
        mock_stub.GetTime.side_effect = grpc.RpcError("Mock Error")

        pet_server._print_time()


if __name__ == '__main__':
    unittest.main()
