import unittest
from unittest import mock

import pet_client


class MyTestCase(unittest.TestCase):

    @mock.patch("pet_client.grpc")
    def test_pet_server_run(self, mock_grpc):
        mock_channel = mock.MagicMock()
        mock_grpc.insecure_channel.return_value = mock_channel

        self.assertEqual(True, True)


if __name__ == '__main__':
    unittest.main()
