from calc import sum, subtract, divide, mult, calcMedia, isEven
number1 = float(input("Digite o primeiro número. "))
number2 = float(input("Digite o segundo número. "))

print(f"Resultado da soma: {sum(number1, number2)}")
print(f"Resultado da subtração: {subtract(number1, number2)}")
print(f"Resultado da divisão: {divide(number1, number2)}")
print(f"Resultado da multiplicação: {mult(number1, number2)}")

nota1 = float(input("Digite a primeira nota. "))
nota2 = float(input("Digite a segunda nota. "))
nota3 = float(input("Digite a terceira nota. "))

print(f"Média final: {calcMedia(nota1, nota2, nota3):.2f}")

numberEvenOdd = int(input("Digite o número a ser verificado para saber se é par: "))

print(f"O número {numberEvenOdd} é par? {isEven(numberEvenOdd)}")