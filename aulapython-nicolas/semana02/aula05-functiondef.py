# O comando def é similar ao function no Javascript. São blocos reutilizáveis, contendo listas de comandos a serem realizados quando chamados.
# Exemplo com cálculo de média de altura (em centímetros):
def calcMedia(alt1, alt2, alt3, alt4, alt5):
    media = (alt1+alt2+alt3+alt4+alt5)/5 # Realiza a operação de média aritmética
    return media # Nos retorna o valor final da média.
def verificarAltura(media):
    if media > 171:
        return "Alto"
    elif media < 171:
        return "Baixo"
    else:
        return "Na média"
# Utilização das funções criadas na prática:
resMediaAltura = calcMedia(int(input("Digite a altura nº 1. ")), int(input("Digite a altura nº 2. ")), int(input("Digite a altura nº 3. ")), int(input("Digite a altura nº 4. ")), int(input("Digite a altura nº 5. ")))
altura = verificarAltura(resMediaAltura)

print(f"Média calculada das alturas: {resMediaAltura:.2f}") # Retorna o valor com no máximo duas casas decimais (ex. "171,20cm")
print(f"Situação da média de alturas: {altura}")