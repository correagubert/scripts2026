from class_serv import Service
def reg_service():
    name = input("Nome do serviço: ")
    price = float(input("Preço: "))
    date = input("Data: ")
    time = input("Horário: ")
    
    service = Service(name, price, date, time)