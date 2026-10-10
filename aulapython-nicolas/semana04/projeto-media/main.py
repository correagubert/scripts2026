import median

n1 = float(input("Nota 1: "))
n2 = float(input("Nota 2: "))
n3 = float(input("Nota 3: "))

mediadoaluno = median.calc_median(n1, n2, n3)
print(f"Média final: {mediadoaluno}. Situação: {median.verify_sit(mediadoaluno)}")