programa {
  funcao inicio() {
    inteiro n=1
    inteiro numDet
    escreva("Até qual número você quer contar os ímpares? ")
    leia(numDet)
    enquanto(n<numDet){
      n++
      se(n%2==1){
        escreva("\n"+n)
      }
    }
  }
}
