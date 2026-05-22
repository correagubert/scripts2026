import { useState } from 'react'
function State() {
    const [nome, setNome] = useState("Ulib")
    const [usuario, setUsuario] = useState("Jack")
    const [senha, setSenha] = useState()
  
    // let nome = "Ulib"
    function lerNome() {
      let nombre = prompt("Novo nome:")
      setNome(nombre)
    }
    function lerUsuario() {
      let resposta = prompt("Novo usuário:")
      setUsuario(resposta)
  
      let pw = prompt("Digite uma nova senha: ")
      let pw2 = prompt("Digite a senha novamente: ")
      if(pw == pw2){
        setSenha(pw2)
      }else{
        alert("As senhas não coincidem.")
      }
    }
  return (
    <div>
      <h1>Estados</h1>
      <div>
        Nome: {nome}
        Usuário: {usuario} 
        Senha: {senha}
      </div>
      <button onClick={lerNome}>Trocar nome</button>
      <button onClick={lerUsuario}>Trocar usuário</button>
    </div>
  )
}

export default State