class Escola:
    nome_escola = input("Digite o nome da escola. ")

    @classmethod
    def mostre_nome_escola(cls):
        print(f"Você estuda em {cls.nome_escola}")
Escola.mostre_nome_escola()