import React from 'react'

function FormUsuario() {
  return (
    <div className='cadastro'>
        <h1>Cadastro</h1>
        <div>
            <label htmlFor="username">Nome de Usuário:</label>
            <input type="text" name='nome' id='nome' placeholder='Nome de Usuário' />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' id='email' placeholder='Email' />
        </div>
        <div>
            <label htmlFor="senha">Senha:</label>
            <input type="password" name='senha' id='senha' placeholder='Senha' />
        </div>
        <div>
            <label htmlFor="senhaConfirma">Confirmação de Senha:</label>
            <input type="password" name='senhaConfirma' id='senhaConfirma' placeholder='Confirmação de Senha' />
        </div>
        <button type='submit'>Cadastrar</button>
    </div>
  )
}

export default FormUsuario