function calcIMC(){
    alert("Calculando...")
    let peso = document.getElementById("inpPeso").value;
    // console.log(peso);
    let altura = document.getElementById("inpAltura").value;
    let imc = peso / (altura * altura)
    //Outras opções:
    //let imc = peso / (altura**2)
    //let imc = peso / (Math.pow(altura, 2))
    // document.getElementById("pResultado").value = "Seu IMC é "+imc+". Emagreça, seu balofo rolha de poço."
    document.getElementById("pResultado").innerHTML = "Seu IMC é "+imc.toFixed(2)+". Emagreça, seu balofo rolha de poço."
    // alert("Seu IMC é "+imc+". Emagreça, seu balofo rolha de poço.")
}
function calcIdade(){
    alert("Calculando...")
    let idadeCachorro = document.getElementById("idadeDog").value;
    let idadeRealCachorro = idadeCachorro * 7
    if (idadeRealCachorro < 65) {
        document.getElementById("dogResult").innerHTML = "Seu cachorro tem "+idadeRealCachorro+" anos. Ainda tem um pouco de tempo de vida."
    } else {
        document.getElementById("dogResult").innerHTML = "Seu cachorro tem "+idadeRealCachorro+" anos. Já pode ir preparando a cremação dele."
    }
}
function pagCalcMedia(){
    window.location.href="mediasystem.html"
}
function youtubeDT(){
    window.open("https://www.youtube.com/watch?v=D1IOJs6H9qg")
}