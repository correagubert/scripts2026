import sys
salBruto = float(input("Insira o seu salário, em reais e centavos: "))
if salBruto < 1621.01: aliqValor = 0.075
elif salBruto < 2902.85: aliqValor = 0.09
elif salBruto < 4354.28: aliqValor = 0.12
elif salBruto < 8475.55: aliqValor = 0.14
else: print("Alíquota indefinida."), sys.exit(0)
roubo = salBruto*aliqValor
salFinal = salBruto - roubo
print(f"Alíquota de {aliqValor*100:.2f}%, imposto de R${roubo:.2f} - Salário final: {salFinal:.2f}")