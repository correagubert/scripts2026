import React from 'react'
import './Oracao.css'
import { useState } from 'react'

function Oracao2() {
    const [resultado, setResultado] = useState('')

    function displayOracao2() {
        setResultado("Ave CSS, cheia de bugs, "+
                        "O framework é convosco, "+
                        "Bendita sois vós entre as telas, "+
                        "E bendito é o fruto do vosso DOM: o pixel perfeito. "+
                        "Santa Documentação, mãe da UI, "+
                        "Rogai por nós, devs visuais, " +
                        "Agora e na hora do push final. "+
                        "Hover.")
    }

  return (
    <div className='container-Oracao'>
        <div>
            <button onClick={displayOracao2}>Oração do Frontend</button>
        </div>

            {resultado}
    </div>
  )
}

export default Oracao2