function voltar(){
    window.location.href="index.html"
}
function calcularMedia(){
    // let num = Number(prompt("Digite um número: "));
    // for(let seq = 0; seq <= num; seq++){
    //     if(seq%2==0){
    //         alert(seq);
    //     }
    // }
    let qtdTotal = Number(prompt("Digite a quantidade total de atividades que deseja cadastrar:"));
    let map = Number(prompt("Digite a média necessária para a aprovação:"));
    let media = 0;
    let totalPeso = 0;
    let qtdCad = 0;
    while(qtdCad < qtdTotal){
        let atv = Number(prompt("Digite a nota da atividade!"));
        let peso = Number(prompt("Digite o peso da atividade!"));
        totalPeso += peso; //totalPeso = totalPeso + peso
        media += (atv*peso); //media = media + (atv*peso)
        qtdCad ++; //qtdCad = qtdCad + 1
    }
    media /= totalPeso; //media = media / totalPeso
    let mensagem = media + "; portanto está reprovado."
    if (media >= map) {
        mensagem = media + "; portanto está aprovado."
    } else if (media >= map - 0.5) {
        mensagem = media + "; portanto está aprovado por conselho."
    }
    alert(mensagem);
}