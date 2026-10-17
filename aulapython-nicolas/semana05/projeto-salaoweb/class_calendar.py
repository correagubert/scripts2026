from class_service import Servico
class Agendamento:
    def __init__(self, cliente: str, servico: Servico, data: str, horario: str):
        self.cliente = cliente
        self.servico = servico
        self.data = data
        self.horario = horario

    def exibir_detalhes(self) -> str:
        return f"Cliente: {self.cliente} | Serviço: {self.servico.nome} | R$ {self.servico.valor:.2f} ({self.data} às {self.horario})"