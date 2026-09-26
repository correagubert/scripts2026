valorCompra = float(input("Digite o valor total gasto na compra. "))
if valorCompra >= 200.00:
    valorDesconto = valorCompra - (valorCompra*0.1)
    print(f"Valor final da compra: R${valorDesconto:.2f}, desconto de {0.1*100}%.")
elif valorCompra >= 500.00:
    valorDesconto = valorCompra - (valorCompra*0.2)
    print(f"Valor final da compra: R${valorDesconto:.2f}, desconto de {0.2*100}%.")
else:
    print(f"Valor final da compra: R${valorCompra}")