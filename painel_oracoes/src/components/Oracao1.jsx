import React from 'react'
import './Oracao.css'
import { useState } from 'react'

function Oracao1() {
    const [resultado, setResultado] = useState('')

    function displayOracao1() {
        setResultado("Divino Stack Overflow, que estais na nuvem, "+
                        "Santificado seja o nosso deploy. "+
                        "Venha a nós o CSS alinhado, "+
                        "Seja feita a responsividade, "+
                        "Assim no Chrome como no Firefox. "+
                        "O código nosso de cada dia nos dai hoje, "+
                        "Perdoai os nossos console.log, "+
                        "Assim como nós perdoamos os commits sem mensagem. "+
                        "Não nos deixei cair em callback hell, "+
                        "Mas livrai-nos dos bugs de produção. "+
                        "Amém, amém, git commit -m 'Aleluia'. ")
    }

  return (
    <div className='container-Oracao'>
        <div>
            <button onClick={displayOracao1}>Oração do Desenvolvedor Web</button>
        </div>
        
            {resultado}
    </div>
  )
}

export default Oracao1