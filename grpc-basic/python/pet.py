from random import randrange

class Pet:

    # small, medium, large
    pets = {
        "small": ["dog", "cat", "bunny"],
        "medium":["horse", "cow", "pig"],
        "large": ["rhino", "giraffe", "elephant"]
    }
    def get_pet(self, size):
        """
        Get a pet of the given size.

        :type size: string
        """
        random_index = randrange(len(self.pets[size.lower()]))
        return self.pets[size.lower()][random_index]
