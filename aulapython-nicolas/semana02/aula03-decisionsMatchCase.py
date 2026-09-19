# Condicional básica de if, else, and elseif/elif - O Python aceita elif como uma forma alternativa de se escrever "else if", comum por exemplo no Javascript.
devil = int(input("What's your number again? "))
# Exemplo de indentação do Python:
if devil < 666:
    print("Smaller than the Devil.")
elif devil > 666:
    print("Bigger than the Devil!")
else:
    print("You are the Devil. Let me exorcise you real quick...")
    # Exemplos de uso de match/case, para seleção de opções definidas em variáveis anteriores O match faz a associação, enquanto o case seleciona o número buscando o caractere dentro do input entregue.
    options = int(input("Escolha uma das opções a seguir. (1. Explodir o mundo, 2. Explodir a galáxia, 3. Explodir o universo observável): "))
    match options:
        case 1:
            print("E daí? Meu planeta é Vênus! BOOM!")
        case 2:
            print("Espero que Andrômeda tenha uns aliens legais... BOOM!")
        case 3:
            print("Será que já dá pra viajar entre dimensões? Acho que essa já era... BOOM!")
        # O caractere "_" (underline) no Python é reconhecido como um caractere curinga, equivalente ao * (asterisco) em outras línguas de programação.
        case _:
            print("Opção inválida. Tente novamente.")