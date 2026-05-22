import React from 'react'
import './ContainerPromo.css'

function ContainerPromo() {
  return (
    <div className='container-promo'>
      <div className='container-promo-img'>
      <img src="img/farmarcia-camiseta.png" alt="Camiseta da Farmárcia - Grande" />
      </div>
      <div className='promocao'>
          <h2>Quer nos apoiar?</h2>
          <p>Por tempo LIMITADO, a Farmácia oferece camisetas promocionais suuuuuper-bacanudas para os clientes que realmente acreditam no projeto, e que gostariam de por um pouco de investimento nesse incrível futuro da Farmárcia. Temos todos os tamanhos, em malha de algodão.</p>
      </div>
    </div>
  )
}

export default ContainerPromo