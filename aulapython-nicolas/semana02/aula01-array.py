# Matriz de exemplo - "Carros Terríveis da França"
carrosFranceses = ["peugeot", "citroen", "renault", "ds", "bugatti"]
# Indexação
print("Primeiro carro (índice 0):", carrosFranceses[0])
print("Segundoo carro (índice 1):", carrosFranceses[1])
print("Terceiro carro (índice 2):", carrosFranceses[2])
print("Quarto carro (índice 3):", carrosFranceses[3])
print("Quinto carro (índice 4):", carrosFranceses[4])
# Fatiação
print("Fatiamento (duas primeiras):", carrosFranceses[0:2])
print("Fatiamento (três primeiras):", carrosFranceses[0:3])
# Exemplo com operadores de inclusão e exclusão (in e not)
print("O carro 'Peugeot' está na lista?", "peugeot" in carrosFranceses)
print("O carro 'Delage' foi listado entre os franceses?", "delage" in carrosFranceses)
# Exemplo de uso com strings
string = "Eu adoro os carros da Alpine!"
print("O carro da marca 'Alpine' foi mencionado no texto?", "Alpine" in string)