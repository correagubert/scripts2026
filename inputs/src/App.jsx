import { useState } from 'react'
import './App.css'

function App() {
  const[inputUsername, setInputUsername] = useState('')
  const[inputSenha, setInputSenha] = useState('')
  const[erro, setErro] = useState(false)

  function efetuarLogin(){
    if(inputUsername == 'peternorton' && inputSenha == 'symantec'){
      setErro(false)
      alert('Bem-vindo.')
    }else if (inputUsername == '' || inputSenha == ''){
      alert('Campos em branco. Por favor, preencha todos os campos para continuar.')
    }else{
      setErro(true)
    }
  }

  return (
    <div className='container-app'>
      <h1>Inputs controlados</h1>
      <label htmlFor="">Username</label>
      <input type="text"
      value={inputUsername}
      onChange={(event) => setInputUsername(event.target.value)}
      />
      
      <label htmlFor="">Senha</label>
      <input type="text"
        value={inputSenha}
        onChange={(event) => setInputSenha(event.target.value)}
      />
      {erro &&
        <span className='msg-erro'>Credenciais inválidas.</span>
      }
      {/* {inputValor} */}
      <button onClick={efetuarLogin}>Login</button>
    </div>
  )
}

export default App
