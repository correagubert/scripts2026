def sum(a, b): 
    return a + b
def subtract(a, b):
    return a - b
def divide(a, b):
    if b == 0:
        return "Erro: Não é possível dividir por 0."
    return a / b
resSum = sum (15, 5)
resSubtract = subtract(15, 5)
resDivide = divide(15, 5)
print(f"Soma: {resSum}")
print(f"Subtração: {resSubtract}")
print(f"Divisão: {resDivide}")