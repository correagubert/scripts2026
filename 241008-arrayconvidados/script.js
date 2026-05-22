let convidados = [];

function adiciona(){
    let nome = document.getElementById("nome").value;
    let existe = false;
    for (let item of convidados) {
    if (item.toLowerCase() == nome.toLowerCase()) {
        existe = true;
        break;
     }
    }
    if (existe == false) {
        convidados.push(nome.toUpperCase());
        document.getElementById("lista").innerHTML = convidados;
    }else{
        alert("Este nome já está na lista.")
    }
}

function edita(){
    let nome = document.getElementById("nome").value;
        for(let pos = 0; pos < convidados.length; pos++){
            if(convidados[pos].toLowerCase() == nome.toLowerCase()){
                convidados[pos] = prompt("Digite o novo nome.").toUpperCase();
                break;
            }
        }
        document.getElementById("lista").innerHTML = convidados;
}

function remove(){
    let nome = document.getElementById("nome").value;
    let posicao = -1;
    for (let item of convidados){
        if (item.toLowerCase() == nome.toLowerCase()) {
            posicao = convidados.indexOf(item);
            break;
        }
    }
        if (posicao == -1){
            alert("Este nome não foi encontrado.")
        }else{
            convidados.splice(posicao, 1);
            document.getElementById("lista").innerHTML = convidados;
        }
}