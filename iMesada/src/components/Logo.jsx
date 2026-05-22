import React from 'react'
import './Logo.css'

function Logo() {
  return (
    <div className='container-logo'>
        <h3>Uma colaboração entre Tangerine® e MacroHard®</h3>
        <div className='empresas-logo'>
            <img src="/img/bergamota.png" alt="Tangerine®" id='logotipo'/>
            <h1 id='mais'>+</h1>
            <img src="/img/macrohard-console.png" alt="MacroHard®" id='logotipo'/>
        </div>
    </div>
  )
}

export default Logo