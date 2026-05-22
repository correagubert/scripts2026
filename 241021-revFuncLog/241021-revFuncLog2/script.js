let bancoDeDados = [];

function add() {
    let user = {
        username:document.getElementById("userAdd").value.toUpperCase(),
        password:document.getElementById("password").value
    }
    // let user = document.getElementById("userAdd").value
    if (existe(user.username) == false) {
        bancoDeDados.push(user);
        alert("Usuário cadastrado com sucesso.")
        document.getElementById("userAdd").value = null;
        document.getElementById("password").value = null;
    } else {
        alert("Esse usuário já foi cadastrado.")
    }
}

function login(){
    // let user = document.getElementById("userLogin").value;
    let user = document.getElementById("userLogin").value.toUpperCase();
    let password = document.getElementById("pass").value;
    if (autentica(user, password) == false) {
        alert("Usuário não encontrado.")
    } else {
        alert("Bem vindo, "+user+".")
    }
    document.getElementById("userLogin").value = null;
    document.getElementById("pass").value = null;
}

function edit(){
    let user = document.getElementById("userEdit").value;
    let pos = bancoDeDados.indexOf(user.toUpperCase());
    if (pos == -1) {
        alert("Usuário não encontrado.")
    } else {
        let newUser = prompt("Insira o novo nome de usuário.")
        bancoDeDados[pos] = newUser.toUpperCase()
    }
    document.getElementById("userEdit").value = null;
}

function remove(){
    let user = document.getElementById("userDelete").value;
    let pos = bancoDeDados.indexOf(user.toUpperCase());
    if (pos == -1) {
        alert("Usuário não encontrado.")
    } else {
        bancoDeDados.splice(pos, 1);
        alert("Cadastro deletado com sucesso.")
    }
    document.getElementById("userDelete").value = null;
}

function existe(usuario){
    for (let user of bancoDeDados) {
        if(user.username == usuario){
            return true;
        }
    }
    return false;
}

function autentica(usuario, senha){
    for (let user of bancoDeDados) {
        if(user.username == usuario && user.password == senha){
            return true;
        }
    }
    return false;
}