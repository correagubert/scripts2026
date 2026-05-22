import React from 'react'
import './Oracao.css'
import { useState } from 'react'

function Oracao4() {
    const [resultado, setResultado] = useState('')

    function displayOracao4() {
        setResultado("Senhor Git, dai-me forças para subir a branch certa, "+
                        "Coragem para lidar com o merge, "+
                        "E sabedoria para entender o código que eu mesmo escrevi ontem. "+
                        "Concedei-me domínio sobre o front, o back, e o café. "+
                        "Protegei minha stack das atualizações quebradoras, "+
                        "E dai-me fé nos testes automatizados. "+
                        "Pois teu é o commit, "+
                        "O build e a glória do log, "+
                        "Agora e para sempre, "+
                        "`npm run dev`.")
    }

  return (
    <div className='container-Oracao'>
        <div>
            <button onClick={displayOracao4}>Oração do Fullstack</button>
        </div>

            {resultado}
    </div>
  )
}

export default Oracao4