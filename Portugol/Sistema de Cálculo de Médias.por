programa {
  funcao inicio() {
    inteiro qTotal, qCad
    real map, media, tPeso, atv, peso
    cadeia mensagem
    escreva("Digite a quantidade de atividades que deseja calcular: ")
    leia(qTotal)
    escreva("Digite a média necessária para a aprovação do aluno: ")
    leia(map)
    media = 0
    tPeso = 0
    qCad = 0
    enquanto(qCad < qTotal){
      escreva("Digite a nota da atividade: ")
      leia(atv)
      escreva("Digite o peso da atividade: ")
      leia(peso)
      tPeso=(tPeso+peso)
      media=media+(atv*peso)
      qCad=qCad+1
    }
    media=media/tPeso
    se(media>=map){
      mensagem = ""+media + "; portanto está aprovado."
    }senao{
      se(media>=map-0.5){
        mensagem = ""+media + "; portanto está aprovado por conselho."
      }senao{
        mensagem = ""+media + "; portanto foi reprovado."
      }
      
    }escreva(mensagem)
    }
  }
}
