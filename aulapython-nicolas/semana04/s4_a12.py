class Aula:
    category = "Programming"

    @classmethod
    def show_category(cls):
        print(cls.category)
Aula.show_category()