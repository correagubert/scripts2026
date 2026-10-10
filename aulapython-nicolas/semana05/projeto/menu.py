from system import Sistema
from datetime import datetime

def main():
    sistema = Sistema()

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
            
            while True:
                horario = input("Horário (HH:MM): ").strip()
                
                if len(horario) != 5:
                    print("❌ Erro: O horário deve ter exatamente 5 caracteres. Exemplo: 09:30, 14:00.")
                    continue
                
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