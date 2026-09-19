salBruto = float(input("Insira o seu salário, em reais e centavos: "))
if salBruto < 1621.01: aliqValor = 0.075
elif salBruto < 2902.85: aliqValor = 0.09
elif salBruto < 4354.28: aliqValor = 0.12
else: aliqValor = 0.14
roubo = salBruto*aliqValor
salFinal = salBruto - roubo
print(f"Alíquota de {aliqValor*100:.2f}%, imposto de R${roubo:.2f} - Salário final: {salFinal:.2f}")