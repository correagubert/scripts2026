import sys
produtos = [["arroz", "4.49", "50"], ["feijão", "5.49", "30"], ["carne", "64.49", "10"]]
options = int(input("Escolha uma das opções a seguir. (1. Cadastrar, 2. Sair): "))
match options:
    case 1:
        print("Cadastrando produto...")
        produtoNome = input("Insira o nome do produto. ")
        produtoPreco = float(input("Insira o valor do produto. "))
        produtoQuant = int(input("Insira a quantidade em estoque. "))
        produto = [produtoNome, produtoPreco, produtoQuant]
        produtos.append(produto)
        print(f"Produtos cadastrados: {produtos}")
    case 2:
        sys.exit(0)
    case _:
        print("Opção inválida. Tente novamente.")