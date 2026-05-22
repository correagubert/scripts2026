let bancoDeDados = [];

function add() {
    let username = document.getElementById("username").value;
    if (existe(username) == false) {
        bancoDeDados.push(username.toUpperCase());
        alert("Usuário cadastrado com sucesso.")
    } else {
        alert("Esse usuário já foi cadastrado.")
    }
    document.getElementById("username").value = null;
}

function login(){
    let username = document.getElementById("user").value;
    if (existe(username) == false) {
        alert("Usuário não encontrado.")
    } else {
        alert("Bem vindo, "+username+".")
    }
    document.getElementById("user").value = null;
}

function edit(){
    let username = document.getElementById("userEdit").value;
    let pos = bancoDeDados.indexOf(username.toUpperCase());
    if (pos == -1) {
        alert("Usuário não encontrado.")
    } else {
        let newUser = prompt("Insira o novo nome de usuário.")
        bancoDeDados[pos] = newUser.toUpperCase()
    }
    document.getElementById("userEdit").value = null;
}

function remove(){
    let username = document.getElementById("userDelete").value;
    let pos = bancoDeDados.indexOf(username.toUpperCase());
    if (pos == -1) {
        alert("Usuário não encontrado.")
    } else {
        bancoDeDados.splice(pos, 1);
        alert("Cadastro deletado com sucesso.")
    }
    document.getElementById("userDelete").value = null;
}

function existe(username){
    let pos = bancoDeDados.indexOf(username.toUpperCase());
    if (pos == -1) {
        return false;
    }else{
        return true;
    }
}