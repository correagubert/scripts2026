from class_service import Servico
from class_calendar import Agendamento
import json
import os

class Sistema:
    def __init__(self):
        self.servicos = []
        self.agendamentos = []
        self.arquivo_dados = "dados_salao.json"
        self.carregar_dados()

    # --- FUNÇÕES DE SALVAR E CARREGAR ---
    def salvar_dados(self):
        """Transforma os objetos em formato JSON e salva no arquivo."""
        dados = {
            "servicos": [
                {"nome": s.nome, "valor": s.valor} 
                for s in self.servicos
            ],
            "agendamentos": [
                {
                    "cliente": a.cliente, 
                    "servico": {"nome": a.servico.nome, "valor": a.servico.valor},
                    "data": a.data,
                    "horario": a.horario
                }
                for a in self.agendamentos
            ]
        }
        with open(self.arquivo_dados, "w", encoding="utf-8") as f:
            json.dump(dados, f, ensure_ascii=False, indent=4)

    def carregar_dados(self):
        """Lê o arquivo JSON e recria os serviços e agendamentos."""
        if os.path.exists(self.arquivo_dados):
            try:
                with open(self.arquivo_dados, "r", encoding="utf-8") as f:
                    dados = json.load(f)
                    
                    for s in dados.get("servicos", []):
                        self.servicos.append(Servico(s["nome"], s["valor"]))
                        
                    for a in dados.get("agendamentos", []):
                        s_data = a["servico"]
                        servico_reconstruido = Servico(s_data["nome"], s_data["valor"])
                        self.agendamentos.append(Agendamento(a["cliente"], servico_reconstruido, a["data"], a["horario"]))
            except json.JSONDecodeError:
                print("⚠️ Aviso: O arquivo de dados está vazio ou corrompido.")

    def cadastrar_servico(self, nome: str, valor: float) -> Servico:
        novo_servico = Servico(nome, valor)
        self.servicos.append(novo_servico)
        self.salvar_dados()
        return novo_servico

    def listar_servicos(self) -> list:
        return self.servicos

    def criar_agendamento(self, cliente: str, indice_servico: int, data: str, horario: str) -> bool:
        if 0 <= indice_servico < len(self.servicos):
            servico_selecionado = self.servicos[indice_servico]
            novo_agendamento = Agendamento(cliente, servico_selecionado, data, horario)
            self.agendamentos.append(novo_agendamento)
            self.salvar_dados()
            return True
        return False

    def listar_agendamentos(self) -> list:
        return self.agendamentos