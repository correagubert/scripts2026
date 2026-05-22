let numeros = [];

function exec85() {
    let numero;
    for (let i = 0; i < 100; i++) {
        numero = Math.ceil(Math.random()*200-100);
        numeros.push(numero);
        numero++
    }
    alert("Array gerado com sucesso.")
}

function mostrarArray(){
    let init = 1
    for (let i = 0; i < numeros.length; i++) {
        document.getElementById("arrayLista").innerHTML += "<br>" + "Dado "+init+": " + numeros[i];
        init++
    }
}