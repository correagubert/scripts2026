senha_correta = "1234"
digitarSenha = input("Digite sua senha para continuar... ")
while digitarSenha != senha_correta:
    print("Senha incorreta.")
    digitarSenha = input("Digite sua senha para continuar... ")
menu = ["Perfil", "Configurações", "Sair"]
for i in menu: print(f"Opção liberada: {i}")