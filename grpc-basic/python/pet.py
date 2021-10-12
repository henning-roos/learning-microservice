from random import choice

class Pet:

    # small, medium, large
    pets = {
        "small": ["dog", "cat", "bunny"],
        "medium":["horse", "cow", "pig"],
        "large": ["rhino", "giraffe", "elephant"]
    }

    pet_names = [
        "Dog",
        "Cat",
        "Fido",
        "Hortse",
        "Dumbo",
        "Cutie",
        "Nasse",
        "Nalle",
        "Karo",
        "Kitsuna"
    ]

    def get_pet(self, size):
        """
        Get a pet of the given size.

        :type size: string
        """
        pet_type = choice(self.pets[size.lower()])
        pet_name = choice(self.pet_names)

        return pet_type, pet_name
