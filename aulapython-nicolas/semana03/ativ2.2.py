while True:
    corFarol = input("De que cor o farol está agora? ").lower()
    if corFarol == "verde": 
        print("Pode seguir em frente!")
        break
    elif corFarol == "amarelo":
        print("Atenção, desacelere um pouco!")
        break
    elif corFarol == "vermelho":
        print("Pare imediatamente!")
        break
    else: print("Não conheço essa cor...")