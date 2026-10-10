class Servico:
    def __init__(self, nome: str, valor: float):
        self.nome = nome
        self.valor = valor

    def __str__(self) -> str:
        return f"{self.nome} | R$ {self.valor:.2f}"