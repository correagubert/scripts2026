import React from 'react'
import './Oracao.css'
import { useState } from 'react'

function Oracao3() {
    const [resultado, setResultado] = useState('')

    function displayOracao3() {
        setResultado("Nosso código que está no servidor, "+
                        "Santificado seja o teu endpoint, "+
                        "Venha a nós o teu JSON, "+
                        "Seja feita tua lógica, "+
                        "Assim na API como no banco. "+
                        "O token nosso de cada dia nos dai hoje, "+
                        "Perdoai nossas queries mal otimizadas, "+
                        "Assim como nós perdoamos quem nos envia POST sem body. "+
                        "E não nos deixes cair em loops infinitos, "+
                        "Mas livrai-nos do downtime. "+
                        "Amém, amém, status 200.")
    }

  return (
    <div className='container-Oracao'>
        <div>
            <button onClick={displayOracao3}>Oração do Backend</button>
        </div>

            {resultado}
    </div>
  )
}

export default Oracao3