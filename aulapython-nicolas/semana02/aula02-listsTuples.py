# Manipulação de array mutável
names = ["Rindt", "Brabham", "Clark", "Hill", "Hulme"] # Array de nomes de campeões
names.append("Stewart") # Adiciona o nome de Rindt ao final
names.insert(2, "Fittipaldi") # Insere o nome de Fittipaldi na posição 2 do array
names.remove("Rindt") # Remove o nome de Rindt
removed = names.pop() # Remove e nos retorna o último nome adicionado ("Stewart")
print("Campeões da Fórmula 1:", names)
print("Removido do Hall da Fama:", removed)
# Declaração de tupla imutável
construtoras = ("mclaren", "brabham", "lotus", "matra", "ferrari", "brm")
print("Equipes da época (Tupla):", construtoras)
# Diferente de um array, uma tentativa de alteração de uma tupla causaria um erro Python (TypeError).
# Por exemplo, o resultado 'construtoras[0] = "cooper"' é impossível, pois o formato tupla não aceita atribuição de valor à variáveis já definidas. Exemplo retornando o erro (TypeError: 'tuple' object does not support item assignment):
# construtoras[0] = "cooper"