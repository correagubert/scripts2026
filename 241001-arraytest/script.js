let batatas = [];
function add(){
    let produto = document.getElementById("txt").value;
    let posicao = batatas.indexOf(produto);
    if (posicao >= 0){
        alert("Não foi possível adicionar " + produto + ": Item Já Listado")
    }else{
        batatas.push(produto);
        document.getElementById("lista").innerHTML = batatas;
    }
}

function remove(){
    let produto = document.getElementById("txt").value;
    let posicao = batatas.indexOf(produto);
    if(posicao == -1){
        alert("Não foi possível remover " + produto + ": Item Não Listado")
    }else{
        batatas.splice(posicao, 1);
        document.getElementById("lista").innerHTML = batatas;
    }
}