def sum(a, b):
    return a + b
def sub(a, b):
    return a - b
def mult(a, b):
    return a * b
def div(a, b):
    if b == 0:
        return "Impossível dividir por zero."
    return a / b

print(sum(23, 6))
print(sub(12, 1))
print(mult(12, 3))
print(div(40, 0))
print(div(54, 6))