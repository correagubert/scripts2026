import time
tempoInit = int(input("Insira o tempo inicial para a contagem. "))
while tempoInit > 0:
    print(f"Contagem regressiva: {tempoInit}...")
    tempoInit = tempoInit - 1
    time.sleep(1)
print("Acabou o tempo! Hora de partir!")