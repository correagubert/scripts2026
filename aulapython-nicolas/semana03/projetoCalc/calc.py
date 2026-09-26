def sum(a, b): 
    return a + b
def subtract(a, b):
    return a - b
def divide(a, b):
    if b == 0:
        return "Erro: Não é possível dividir por 0."
    return a / b
def mult(a, b):
    return a * b

def calcMedia(n1, n2, n3):
    return (n1 + n2 + n3) / 3

def isEven(n):
    return bool(n%2 == 0)