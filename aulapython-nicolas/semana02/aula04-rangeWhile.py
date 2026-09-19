# Um laço de repetição é ideal para ocasiões em que uma linha de código precisa ser replicada mais de uma vez, em sequência.
# "for" -> "para". Usado em caso do valor final ser exclusivo.
# "while" -> "enquanto". Usado se o valor final não for definitivo, ou for desconhecido.

# Exemplo com determinação de números ímpares:
print("Exemplo com 'for':")
for i in range(1, 6, 2): # Começa no número 1, vai até o número 10, e soma 2 ao número previamente dado (1) para cada iteração: ex. 1, 3, 5 em caso de ímpares. Ou seja: "para um número 'i' no alcance do número 1 ao 10, some 2 ao número entregue (1)."."
    print(f"Número ímpar: {i}")
# Exemplo de laço de repetição "while" com condicional
print("\nExemplo com 'while': Oh não! Falha crítica no Ruindows!")
import time # Para poder criar delay entre repetições de linhas.
contador = 10
while contador > 0:
    print(f"Este computador irá se autodestruir em {contador} segundos...")
    contador -= 1 # Decrementa o número do contador em 1.
    time.sleep(1)
# Ou seja: "Enquanto 'contador' estiver equivalendo a um número maior que zero, subtraia 1 do mesmo número até contador equivaler a 0."
print("Deletando pasta system32...")