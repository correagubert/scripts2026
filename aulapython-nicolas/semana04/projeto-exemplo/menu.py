import system

while True:
    print("""
    1 - Cadastrar serviço
    2 - Listar serviços
    3 - Agendar serviço
    4 - Ver agendamentos
    5 - Sair
    """)
    option = input("Escolha: ")
    match option:
        case "1":
            print("Cadastrar Serviço")
            system.reg_service()
        case "2":
            print("Listar serviços")
        case "3":
            print("Agendar serviço")
        case "4":
            print("Ver agendamentos")
        case "5":
            print("Encerrando sistema...")
            break
