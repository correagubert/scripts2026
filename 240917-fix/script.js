function ex01(){
    let numFinal = Number(prompt("Até qual número você quer que a majestosa inteligência artificial e robótica conte?"));
    let numInicial = 1
    while(numInicial<=numFinal){
        alert(numInicial)
        numInicial ++;
    }
}

function ex02(){
    let num = Number(prompt("Digite um número!"));
    let soma = 0;
    while(num != 0){
        soma += num;
        num = Number(prompt("Digite um número!"));
    }
    alert("A soma dos números é "+soma+".")
}

function ex03(){
    let media = 0;
    let numCad = 1
    let qtdNum = Number(prompt("Você gostaria de realizar a média de quantos números?"));
    for(numCad; numCad <= qtdNum; numCad++){
        let numero = Number(prompt("Digite um número:"));
        media += numero;
    }
    media /= qtdNum;
    alert("A média dos números é "+media+".")
}

function ex04(){
    let num = Number(prompt("Insira o número a ser fatorado:"));
    let result = num;
    let fatorial = result-1;
    for (let i=fatorial; i >=1; i--){
        result*=i
    }
    alert("O fatorial deste número é "+result+".")
}

function ex05(){
    let num = Number(prompt("Insira um número:"));
    let tabela = "";
    for(let multi = 1; multi <= 10; multi++){
        tabela += "\n"+num+"*"+multi+" = "+(num*multi);
    }
    alert(tabela)
}

function ex06(){
    let num = Number(prompt("Digite um número:"));
    let pares = "";
    for(let par = 0; par <= num; par++){
        if(par%2==0){
            pares += "\n"+par;
        }
    }
    alert(pares);
}

function ex07(){
    let numFinal = Number(prompt("Até qual número você quer que a majestosa inteligência artificial e robótica conte?"));
    let passo = Number(prompt("De quanto em quanto você quer contar?"))
    let numInicial = 1
    while(numInicial<=numFinal){
        alert(numInicial)
        numInicial+=passo
    }
}

function ex08(){
    let num = Number(prompt("Digite um número:"));
    for(let seq = 0; seq <= num; seq++){
        if(seq%2==1){
            alert(seq);
        }
    }
}

function ex09(){
    let n1 = Number(prompt("Insira o primeiro número"));
    let n2 = Number(prompt("Insira o segundo número"));
    if (n1%n2==0) {
        alert("Sim, "+n1+" é múltiplo de "+n2+".")
    } else {
        alert("Não, "+n1+" NÃO é múltiplo de "+n2+".")
    }
}

function ex10(){
    let num = Number(prompt("Digite um número:"));
    let qtdDivisores = 0
    for(let ant = 1; ant <= num; ant++){
        if(num%ant == 0){
            qtdDivisores++
        }
    }if (qtdDivisores == 2) {
        alert("Sim, "+num+" é primo.")
    } else {
        alert("Não, "+num+" não é primo.")
    }
}

function verificarPrimos(i){
    let qtdDivisores = 0
    for(let ant = 1; ant <= i; ant++){
        if(i%ant == 0){
            qtdDivisores++
        }
    }if (qtdDivisores == 2) {
        return true
    } else {
        return false
    }
}

function desafio(){
    let num = Number(prompt("Digite um número:"))
    let tabela = "";
    for(let i = 1; i <= num; i++){
        if (verificarPrimos(i) == true) {
            tabela+="\n"+i+" é primo."
        } else {
            tabela+="\n"+i+" não é primo."
        }
    }alert(tabela)
}