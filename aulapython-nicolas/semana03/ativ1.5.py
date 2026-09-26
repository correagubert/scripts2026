while True:
    confirmaNotif = input("Deseja confirmar o envio da notificação? ").lower()
    if confirmaNotif == "sim": 
        print("Enviando notificação...")
        break
    elif confirmaNotif == "não": 
        print("Envio cancelado.")
    else: print("Digite novamente.")