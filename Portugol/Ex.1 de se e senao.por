programa {
  funcao inicio() {
    inteiro i
    escreva("Digite sua idade: ")
    leia(i)
    se(i>=18){
      escreva("Bem vindo.")
    }senao{
      se(i>=12){
        escreva("Adolescente. Você é chato.")
      }senao{
        escreva("Saia da internet, por favor...")
      }
    }
  }
}
