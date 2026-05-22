import { useState } from 'react'
import './Convert.css'
function ConvertTemp() {
    const [celsius, setCelsius] = useState(0)
    const [fahren, setFahren] = useState(0)
    const [kelvin, setKelvin] = useState(0)
function selectConv() {
    let entrada = Number(prompt("Digite qual medida você gostaria de usar (1 - C°/2 - F/3 -K):"))
    if (entrada == 1) {
        cel()
    } else if (entrada == 2) {
        fahr()
    } else if (entrada == 3) {
        kelv()
    } else {
        alert("Opção inválida.")
    }
}
function cel() {
    let entrada = Number(prompt("Digite a temperatura em Celsius:"))
    setFahren(entrada * 9/5 + 32)
    setKelvin(entrada + 273.15)
    setCelsius(entrada)
}
function fahr() {
    let entrada = Number(prompt("Digite a temperatura em Fahrenheit:"))
    setCelsius((entrada - 32) * 5/9)
    setKelvin((entrada - 32) * 5/9 + 273.15)
    setFahren(entrada)
}
function kelv() {
    let entrada = Number(prompt("Digite a temperatura em Kelvin:"))
    setCelsius(entrada - 273.15)
    setFahren((entrada - 273.15) * 9/5 + 32)
    setKelvin(entrada)
}
    
  return (
    <div className='containerTemp'>
        Conversão de Temperaturas
        <button onClick={selectConv}>Converter</button>
        <p>Temperatura em Celsius: {celsius}</p>
        <p>Temperatura em Fahrenheit: {fahren}</p>
        <p>Temperatura em Kelvin: {kelvin}</p>
    </div>
  )
}

export default ConvertTemp