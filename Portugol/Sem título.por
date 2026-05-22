programa {
  funcao inicio() {
    real op, r, t
    escreva("Qual conversão você gostaria de fazer?\n1. Celsius para Fahrenheit\n2. Fahrenheit para Celsius\n3. Celsius para Kelvin\n4. Kelvin para Celsius\n5. Fahrenheit para Kelvin\n6. Kelvin para Fahrenheit\n")
    leia(op)
    escolha(op){
    caso 1:
     escreva("Digite a temperatura em Celsius.\n")
     leia(t)
     r=(t*1.8)+32
     escreva("Resultado: "+r+"F")
    pare
    caso 2:
     escreva("Digite a temperatura em Fahrenheit.\n")
     leia(t)
     r=(t-32)*(5/9)
     escreva("Resultado: "+r+"°")
    pare
    caso 3:
     escreva("Digite a temperatura em Celsius.\n")
     leia(t)
     r=t+273.15
     escreva("Resultado: "+r+"K")
    pare
    caso 4:
     escreva("Digite a temperatura em Kelvin.\n")
     leia(t)
     r=t-273.15
     escreva("Resultado: "+r+"°")
    pare
    caso 5:
     escreva("Digite a temperatura em Fahrenheit.\n")
     leia(t)
     r=(t-32)*(5/9)+273.15
     escreva("Resultado: "+r+"K")
    pare
    caso 6:
     escreva("Digite a temperatura em Kelvin.\n")
     leia(t)
     r=(t-273.15)*(9/5)+32
     escreva("Resultado: "+r+"F")
    pare
    }
    se(op>=7){
      escreva("Opção inválida.")
    }
    se(op==0){
      escreva("Opção inválida.")
    }
  }
}