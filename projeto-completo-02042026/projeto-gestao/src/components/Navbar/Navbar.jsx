import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <Link className='' to="/"></Link>

        <Link className='' >Usuário</Link>
        <Link className='' to="/usuario/">Listar Usuário</Link>
        <Link className='' to="/usuario/cadastro">Cadastrar Usuário</Link>

        <Link className='' >Produto</Link>
        <Link className='' to="/produto/">Listar Produto</Link>
        <Link className='' to="/produto/cadastro">Cadastrar Produto</Link>
    </nav>
  )
}

export default Navbar