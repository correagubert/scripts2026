class Animal:
    def speech(self):
        print("O animal faz sons.")
class Gato(Animal):
    pass
dog = Gato()
dog.speech()