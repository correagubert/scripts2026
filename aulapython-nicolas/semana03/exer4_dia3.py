tentativas = 1
while tentativas <= 3:
    pedidos = ["Pedido A", "Pedido B"]
    for pedido in pedidos:
        print(f"Processando {pedido} na tentativa nº {tentativas}.")
    tentativas = tentativas + 1
print("Concluído.")