import json # Importamos a biblioteca para salvar em arquivo
import os
from datetime import datetime

# ==========================================
# CÓDIGO COMPLETO UNIFICADO (app.py) COM JSON
# ==========================================

class Servico:
    def __init__(self, nome: str, valor: float):
        self.nome = nome
        self.valor = valor

    def __str__(self) -> str:
        return f"{self.nome} | R$ {self.valor:.2f}"


class Agendamento:
    def __init__(self, cliente: str, servico: Servico, data: str, horario: str):
        self.cliente = cliente
        self.servico = servico
        self.data = data
        self.horario = horario

    def exibir_detalhes(self) -> str:
        # Corrigido para buscar self.data e self.horario do próprio agendamento
        return f"Cliente: {self.cliente} | Serviço: {self.servico.nome} | R$ {self.servico.valor:.2f} ({self.data} às {self.horario})"


class GerenciadorAgendamento:
    def __init__(self):
        self.servicos = []
        self.agendamentos = []
        self.arquivo_dados = "dados_salao.json"
        
        # Ao iniciar o sistema, ele tenta carregar os dados salvos
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
                    
                    # Recriando os serviços
                    for s in dados.get("servicos", []):
                        self.servicos.append(Servico(s["nome"], s["valor"]))
                        
                    # Recriando os agendamentos
                    for a in dados.get("agendamentos", []):
                        s_data = a["servico"]
                        servico_reconstruido = Servico(s_data["nome"], s_data["valor"])
                        self.agendamentos.append(Agendamento(a["cliente"], servico_reconstruido, a["data"], a["horario"]))
            except json.JSONDecodeError:
                print("⚠️ Aviso: O arquivo de dados está vazio ou corrompido.")

    # ------------------------------------------

    def cadastrar_servico(self, nome: str, valor: float) -> Servico:
        novo_servico = Servico(nome, valor)
        self.servicos.append(novo_servico)
        self.salvar_dados() # Salva automaticamente sempre que houver um novo cadastro
        return novo_servico

    def listar_servicos(self) -> list:
        return self.servicos

    def criar_agendamento(self, cliente: str, indice_servico: int, data: str, horario: str) -> bool:
        if 0 <= indice_servico < len(self.servicos):
            servico_selecionado = self.servicos[indice_servico]
            novo_agendamento = Agendamento(cliente, servico_selecionado, data, horario)
            self.agendamentos.append(novo_agendamento)
            self.salvar_dados() # Salva automaticamente sempre que houver um agendamento
            return True
        return False

    def listar_agendamentos(self) -> list:
        return self.agendamentos


def main():
    sistema = GerenciadorAgendamento()

    while True:
        print("\n=================================")
        print("   SISTEMA DE AGENDAMENTO SALÃO  ")
        print("=================================")
        print("1. Cadastrar Serviço")
        print("2. Listar Serviços Cadastrados")
        print("3. Realizar Agendamento")
        print("4. Visualizar Agendamentos")
        print("5. Sair")
        print("=================================")
        
        opcao = input("Escolha uma opção (1-5): ").strip()

        if opcao == "1":
            print("\n--- Cadastrar Serviço ---")
            nome = input("Nome do serviço: ").strip()
            try:
                valor = float(input("Valor do serviço (R$): "))
            except ValueError:
                print("❌ Erro: Insira um valor numérico válido.")
                continue

            servico = sistema.cadastrar_servico(nome, valor)
            print(f"\n✅ Serviço '{servico.nome}' cadastrado com sucesso!")

        elif opcao == "2":
            print("\n--- Serviços Cadastrados ---")
            servicos = sistema.listar_servicos()
            if not servicos:
                print("Nenhum serviço cadastrado até o momento.")
            else:
                for idx, servico in enumerate(servicos, start=1):
                    print(f"[{idx}] {servico}")

        elif opcao == "3":
            print("\n--- Realizar Agendamento ---")
            servicos = sistema.listar_servicos()
            if not servicos:
                print("❌ Não há serviços cadastrados para agendar. Cadastre um serviço primeiro.")
                continue

            print("Selecione um serviço disponível:")
            for idx, servico in enumerate(servicos, start=1):
                print(f"[{idx}] {servico}")

            try:
                escolha = int(input("Digite o número do serviço desejado: ")) - 1
            except ValueError:
                print("❌ Erro: Digite um número válido.")
                continue

            cliente = input("Nome do cliente: ").strip()
            data = input("Data (DD/MM/AAAA): ").strip()
            
            # Laço de repetição (while) isolado para validar o horário corretamente
            while True:
                horario = input("Horário (HH:MM): ").strip()
                
                # Verifica se tem exatamente 5 caracteres (ex: 14:30)
                if len(horario) != 5:
                    print("❌ Erro: O horário deve ter exatamente 5 caracteres. Exemplo: 09:30, 14:00.")
                    continue
                
                # Verifica se as horas e minutos são válidos
                try:
                    datetime.strptime(horario, "%H:%M")
                    break  # Se tudo estiver perfeito, sai do loop do horário
                except ValueError:
                    print("❌ Erro: Horário inválido. As horas devem ir de 00 a 23 e os minutos de 00 a 59.")

            if sistema.criar_agendamento(cliente, escolha, data, horario):
                print(f"\n✅ Agendamento realizado com sucesso para o(a) cliente '{cliente}'!")
            else:
                print("❌ Número de serviço inválido.")

        elif opcao == "4":
            print("\n--- Agendamentos Realizados ---")
            agendamentos = sistema.listar_agendamentos()
            if not agendamentos:
                print("Nenhum agendamento realizado até o momento.")
            else:
                for agendamento in agendamentos:
                    print(agendamento.exibir_detalhes())

        elif opcao == "5":
            print("\nSaindo do sistema... Até logo!")
            break

        else:
            print("❌ Opção inválida! Por favor, tente novamente.")

if __name__ == "__main__":
    main()