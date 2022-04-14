import logging

LOGGER = logging.getLogger("main")


def start():
    print("Hello!")


if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    start()
