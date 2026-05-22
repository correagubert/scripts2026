programa {
  funcao inicio() {
    inteiro numIni
    inteiro numDet
    escreva("A partir de qual número você quer contar? ")
    leia(numIni)
    escreva("Até qual número você quer contar os ímpares? ")
    leia(numDet)
    enquanto(numIni<=numDet){
      se(numIni % 2 != 0){
        escreva("\n"+numIni)
      }
      numIni++
    }
  }
}
