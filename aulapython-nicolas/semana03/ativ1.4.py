estoque = ["maçã", "banana", "laranja"]
pesquisaFruta = input("Digite o nome da fruta que procura... ").lower()
if pesquisaFruta in estoque: print("Fruta disponível no estoque!")
else: print("Fruta indisponível.")