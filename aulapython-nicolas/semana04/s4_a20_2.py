class calc:
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

n1 = float(input("Número 1: "))
n2 = float(input("Número 2: "))

resSum = calc.sum(n1, n2)
print(resSum)
resSub = calc.sub(n1, n2)
print(resSub)
resMult = calc.mult(n1, n2)
print(resMult)
resDiv = calc.div(n1, n2)
print(resDiv)