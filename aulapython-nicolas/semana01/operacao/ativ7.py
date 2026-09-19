produto = input("Qual é o nome do produto? ")
valorProduto = float(input("Qual é o valor do produto? "))
unitProduto = int(input("Quantas unidades foram compradas? "))
valorTotal = unitProduto*valorProduto
print("Você comprou", unitProduto, "unidades de", produto, "por", valorTotal)