programa {
  funcao inicio() {
    inteiro ns, tentativa
    escreva("O número secreto é: ")
    leia(ns)
    limpa()
    escreva("Qual é o número secreto? ")
    leia(tentativa)
    enquanto(tentativa!=ns){
      se(tentativa<ns){
        escreva("É um número maior... Tente novamente: ")
        leia(tentativa)
      }senao se(tentativa>ns){
        escreva("Passou um pouco do ponto, é menor... Tente novamente: ")
        leia(tentativa)
      }
    }escreva("Acertou. Você viverá para contar a história dessa vez.")
  }
}
