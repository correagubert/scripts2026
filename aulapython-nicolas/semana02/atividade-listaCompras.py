compras = ["arroz", "feijão", "macarrão", "açúcar"]
def adicionarCompra():
    esqueci = input("Qual produto deseja adicionar à lista? ")
    compras.append(esqueci)
    prioridade = input("Qual produto é mais importante comprar primeiro? ")
    if prioridade.lower() in compras: compras.insert(1, prioridade)
    else: print("Produto não localizado na lista")
    desisti = input("Remover produto da lista: ")
    if desisti.lower() in compras: compras.remove(desisti)
    else: print("Produto não localizado na lista")
adicionarCompra()
print(f"Lista de Compras: {compras}")