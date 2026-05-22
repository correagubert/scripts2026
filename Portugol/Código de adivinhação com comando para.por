programa {
  funcao inicio() {
    inteiro x, tentativa, qTent, nt
    cadeia mensagem
    escreva("Quantas tentativas a pessoa terá? ")
    leia(nt)
    escreva("Digite um número: ")
    leia(x)
    limpa()
    escreva("Dê seu palpite! Qual é o número secreto? ")
    leia(tentativa)
    mensagem = "Você errou demais. Corra."

    para(qTent=0; qTent<nt; qTent+1){
    se(tentativa == x){
        mensagem = "Acertou. Você viverá para contar a história dessa vez."
        pare
      }senao se(tentativa > x){
        escreva("Passou um pouco do ponto, é menor... Tente novamente: ")
      }senao{
        escreva("É um número maior... Tente novamente: ")
      }
      leia(tentativa)
    }
    escreva(mensagem)
  }
}