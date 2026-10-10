import './Homepage.css'
import Header from './components/Header'
import ContainerIntroducao from './components/Container-Introducao'
import ContainerConvite from './components/ContainerConvite'
import ContainerPromo from './components/ContainerPromo'

function Homepage() {

  return (
    <div className='container-app'>
      <Header />
      <ContainerIntroducao />
      <ContainerConvite />
      <ContainerPromo />
    </div>
  )
}

export default Homepage
