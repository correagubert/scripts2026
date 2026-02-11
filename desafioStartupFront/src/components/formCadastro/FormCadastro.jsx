import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function RegistrarUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    // Verificação de Senhas (Correspondência)
    const [isSenhasMatch, setIsSenhasMatch] = useState(true)
    const [isSaving, setIsSaving] = useState(false)
    // Alterações de Estado
    const handleNomeChange = (e) => setNome(e.target.value)
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handleSenhaChange = (e) => setSenha(e.target.value)
    const handleConfirmarSenhaChange = (e) => setConfirmarSenha(e.target.value)
    // Validação do Campo de Senha
    const isSenhaValid = () => senha.length >= 8 && senha === confirmarSenha
    // Limpeza do Formulário Após o Envio
    const resetForm = () => {
        setNome('')
        setEmail('')
        setSenha('')
        setConfirmarSenha('')
        setIsSenhasMatch(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!isSenhaValid()) {
            setIsSenhasMatch(false)
            return
        }

        setIsSaving(true)
        try {
            await axios.post('http://localhost:4000/api/usuarios', {
                nome: nome,
                email: email,
                senha: senha,
            })

            resetForm()
            setIsSaving(false)
            toast.success("Usuário criado com sucesso!", {
                autoClose: 3000,
                hideProgressBar: true,
                pauseOnHover: false
            })
        } catch (error) {
            console.error('Erro ao criar usuário', error)
            setIsSaving(false)
            toast.error("Erro ao criar usuário", {
                autoClose: 3000,
                hideProgressBar: true,
                pauseOnHover: false
            })
        }
    }


return (
    <div className='w-full max-w-md p-6 bg-white rounded-xl shadow-lg '>
        <form onSubmit={handleSubmit} className='space-y-4'>

            <h2 className='text-2xl font-bold mb-6 text-center'>Criar Usuário</h2>

            <div>
                <label htmlFor="nomeRegisterUser" className='block text-sm font-medium mb-1'>Nome</label>
                 <input type="text" id='nomeRegisterUser' value={name} onChange={handleNameChange} required className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>

            <div>
                <label htmlFor="emailRegisterUser" className='block text-sm font-medium mb-1'>Email</label>
                <input type="email" id='emailRegisterUser' value={email} onChange={handleEmailChange} required className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>


            <div>
                <label htmlFor="passwordRegisterUser" className='block text-sm font-medium mb-1'>Senha</label>
                <input type="password" id='passwordRegisterUser' value={password} onChange={handlePasswordChange} required minLength={8} className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>

            <div>
                <label htmlFor="confirmPassword" className='block text-sm font-medium mb-1'>Confirmar Senha</label>
                <input type="password" id='confirmPassword' value={confirmPassword} onChange={handleConfirmPasswordChange} required minLength={8} className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />

                {!isPasswordMatch && (
                    <p className='text-red-500 text-sm mt-1 text-center'>Senhas não correspodem</p>
                )}

            </div>


            <div className='flex justify-center'>
                <button type='submit' disabled={isSaving} className={`w-full p-2 rounded-lg text-white ${isSaving ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'} transition-colors`}>
                    {isSaving ? 'Salvando' : 'Criar Usuário'}
                </button>
            </div>
        </form>
    </div>
)}

export default FormCadastro