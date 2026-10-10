import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CadastroUsuario from './pages/CadastroUsuario'
import CadastroProduto from './pages/CadastroProduto'
import ListarUsuario from './pages/ListarUsuario'
import ListarProduto from './pages/ListarProduto'
import Login from './pages/Login'
import EsqueciSenha from './pages/EsqueciSenha'
import Erro from './pages/Erro'
import { Routes } from 'react-router-dom'
import Modal from './components/Modal/Modal'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} > {/* Aqui vão as rotas - Caminho das páginas */}
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/usuario/cadastro" element={<CadastroUsuario />} />
            <Route path="/produto/cadastro" element={<CadastroProduto />} />
            <Route path="/usuario" element={<ListarUsuario />} />
            <Route path="/produto" element={<ListarProduto />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/esqueci_senha' element={<EsqueciSenha />} />
          
          <Route path='*' element={<Erro />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;