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

function exec86(){
    let init = 1
    for(let pos = 0; pos < numeros.length; pos++){
            if (numeros[pos] < 0) {
                numeros[pos] = 0
            }
            document.getElementById("arrayLista").innerHTML += "<br>" + "Dado "+init+": " + numeros[pos];
            init++
        }
}