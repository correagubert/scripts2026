let numeros = [];
let index1, index2;

function exec83b() {
    let numero;
    for (let i = 0; i < 25; i++) {
        numero = Math.ceil(Math.random()*25);
        numeros.push(numero);
    }
    
   do {
        index1 = Number(prompt("Insira o primeiro número entre 0 e 24."));
    } while (index1 < 0 || index1 > 24);
    do {
        index2 = Number(prompt("Insira o segundo número entre 0 e 24."));
    } while (index2 < 0 || index2 > 24);
    soma = numeros[index1] + numeros[index2];
    document.getElementById("arrayLista").innerHTML = ("Clique em 'Mostrar Array' para mostrar o resultado.");
    alert("Soma: "+soma);
}

function mostrarArray(){
    let init = 0
    for (let i = 0; i < numeros.length; i++) {
        document.getElementById("arrayLista").innerHTML += "<br>" + "Dado "+init+": " + numeros[i];
        init++
    }
}

function pesquisar(){
    pesquisa = Number(prompt("Insira o número que deseja encontrar aqui."))
    for(let item of numeros){
        if (item == pesquisa) {
            document.getElementById("arrayPesquisa").innerHTML = pesquisa;
            break;
        } else {
            document.getElementById("arrayPesquisa").innerHTML = "<br>" + "O número não está presente no array.";
        }
    }
}