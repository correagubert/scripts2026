valor = 0.0
while valor != 100.00:
    soma = float(input("Digite um valor para somar. "))
    valor = valor + soma
    print(f"Valor atual: {valor}.")
print(f"Valor final: {valor}.")