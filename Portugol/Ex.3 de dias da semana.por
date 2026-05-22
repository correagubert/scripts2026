programa {
  funcao inicio() {
    inteiro dia
    escreva("Digite um número de 1 a 7: ")
    leia(dia)
    se(dia == 1){
      escreva("O 1º dia da semana é o Domingo!")
    }senao se(dia == 2){
      escreva("O 2º dia da semana é a Segunda!")
    }senao se(dia == 3){
      escreva("O 3º dia da semana é a Terça!")
    }senao se(dia == 4){
      escreva("O 4º dia da semana é a Quarta!")
    }senao se(dia == 5){
      escreva("O 5º dia da semana é a Quinta!")
    }senao se(dia == 6){
      escreva("O 6º dia da semana é a Sexta!")
    }senao se(dia == 7){
      escreva("O 7º dia da semana é o Sábado!")
    }senao se(dia >= 8){
      escreva("Número inválido!")
  }
 }
}

