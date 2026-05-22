
function bc1016(){
    let distancia = Number(prompt("Qual é a distância que os carros percorrerão?"));
    let distX = 0;
    let distY = 0;
    let tempo = 0;
    while(distY-distX<distancia){
        distX += 1
        distY += 1.5
        tempo++
    }
    alert("Vai levar "+tempo+" minutos.")
}
   
function bc1050(){
    let ddd = Number(prompt("Insira o seu DDD!"))
    let telefone = Number(prompt("Insira o seu número de telefone!"))
    mensagem = "DDD inválido."
    if (ddd = 61){
        alert("Brasília. Chamada liberada.")
    }else if(ddd = 71){
        alert("Salvador. Chamada liberada.")
    }else if(ddd = 11){
        alert("São Paulo. Chamada liberada.")
    }else if(ddd = 21){
        alert("Rio de Janeiro. Chamada liberada.")
    }else if(ddd = 32){
        alert("Juiz de Fora. Chamada liberada.")
    }else if(ddd = 19){
        alert("Campins. Chamada liberada.")
    }else if(ddd = 27){
        alert("Vitória. Chamada liberada.")
    }else if(ddd = 31){
        alert("Belo Horizonte. Chamada liberada.")
    }else{
        alert(mensagem)
    }
}

function bc1115(){
    let coordX = Number(prompt("Insira a coordenada X!"))
    let coordY = Number(prompt("Insira a coordenada Y!"))
    if (coordX < 0 && coordY > 0) {
        alert("Você está no primeiro quadrante.")
    } else if(coordX > 0 && coordY > 0){
        alert("Você está no segundo quadrante.")
    }else if(coordX < 0 && coordY < 0){
        alert("Você está no terceiro quadrante.")
    }else if(coordX > 0 && coordY < 0){
        alert("Você está no quarto quadrante.")
    }
}