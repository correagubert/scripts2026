import React from 'react'
import { useState } from 'react'

function FormUsuario() {
  const [formData, setFormData] = useState({
    nome: '',
    cpfcnpj: '',
    email: '',
    senha: '',
    senhaConfirma: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='cadastro'>
        <h1>Cadastro</h1>
        <div>
            <label htmlFor="username">Nome de Usuário:</label>
            <input type="text" name='nome' id='nome' placeholder='Nome de Usuário' />
        </div>
        <div>
            <label htmlFor="cpfcnpj">CPF/CNPJ:</label>
            <input type="text" name='cpfcnpj' id='cpfcnpj' placeholder='CPF/CNPJ' />
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