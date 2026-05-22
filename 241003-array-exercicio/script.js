let idades = [14, 18, 22, 34, 45];

function pesquisar(){
    let number = Number(prompt("Qual número você quer pesquisar?"));
    let indice = idades.indexOf(number);
    if(indice != -1){
        console.log("Tá aqui na posição: "+indice);
    }else{
        console.log("Não encontrei :(");
    }
}

function cadastrar(){
    let numAdd = Number(prompt("Digite o número a ser cadastrado: "));
    idades.push(numAdd);
    console.log(idades);
}

function mostrarTodos(){
    // console.log(idades);
    // alert("Vá olhar seu array no console :)");
    // alert(idades);
    for(let i = 0; i < idades.length; i++){
        console.log(idades[i])
        document.getElementById("saida").innerHTML += "Aluno: " + idades[i] + "<br>"
    }
}
