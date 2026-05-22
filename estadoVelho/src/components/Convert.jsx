import { useState } from 'react'
import './Convert.css'
function Convert() {
  const [real, setReal] = useState(0)
  const [pesoMex, setPesoMex] = useState(0)
function converterDinheiro() {
  let entrada = Number(prompt("R$: "))
  setPesoMex((entrada * 3.52).toFixed(2))
  setReal(entrada.toFixed(2))
}
return (
    <div className="container-convert">
      <h2>Real ➡️ Peso Mexicano</h2>
      <button onClick={converterDinheiro}>Converter</button>
      <p>
        Valor original: R${real}
      </p>
      <p>
        Valor convertido: Mex${pesoMex}
      </p>
    </div>
  )
}

export default Convert