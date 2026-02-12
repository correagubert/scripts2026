function criarConjuntoPersonagens(personagens) {
    let conjunto = personagens.map(personagem => personagem.toLowerCase());
    console.log('Conjunto inicial: ', conjunto)

    return conjunto
}

function adicionarPatolino(personagens) {
    if (personagens.length < 3 && !personagens.includes('Patolino')) {
        personagens.push('Patolino')
        console.log('Patolino adicionado: ', personagens)
    } else {
        console.log('Patolino não foi adicionado (limite de personagens atingido ou já presente)')
    }  
    return personagens
}

function organizarOrdemAlfabetica(personagens) {
    personagens.sort();
    console.log('Lista ordenada por ordem alfabética: ', personagens)
}

// function liderPrimeiraPosicao(personagens, lider) {
//     if(lider){
//         lider = lider.toLowerCase()
//     }else{
//         lider = 'Vitor Carlos'
//     }
//     personagens = personagens.toLowerCase()
//     for (let i = 0; i < personagens.length; i++) {
//         personagens[i] = personagens[i].toLowerCase
//     }
//     if(personagens.includes(lider)) {
//         personagens = personagens.filter(personagem => personagem !== lider);
//     }
//     personagens.unshift(lider)
//     console.log("Líder definido!", personagens)
// }
// console.log(liderPrimeiraPosicao())

function adicionarFrajola(personagens) {
    const existeComF = personagens.some(nome => nome.toLowerCase().startsWith('f'))
    if (!existeComF){
        personagens.push('Frajola')
        console.log('Frajola adicionado à lista de personagens: ', personagens)
        return personagens
    } else {
        return console.log('Erro, me mama')
    }
}

function montarEquipe(personagens) {
    const conjunto = criarConjuntoPersonagens(personagens)
    conjunto = adicionarPatolino(conjunto)
    organizarOrdemAlfabetica(conjunto)

    console.log("Conjunto depois da função: ", conjunto)
}

montarEquipe(['Pernalonga', 'Lola'])