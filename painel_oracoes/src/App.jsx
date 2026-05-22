import './App.css'
import Oracao1 from './components/Oracao1'
import Oracao2 from './components/Oracao2'
import Oracao3 from './components/Oracao3'
import Oracao4 from './components/Oracao4'
import Oracao5 from './components/Oracao5'

function App() {

  return (
    <div className='container-app'>
      <h1> Orações do Pe. Ernan Buco</h1>
        <div className='oracoes'>
          <Oracao1 />
          <Oracao2 />
          <Oracao3 />
          <Oracao4 />
          <Oracao5 />
        </div>
        <div className='oracao-img'>
          <a href="https://img.notionusercontent.com/s3/prod-files-secure%2Ffc91fd6e-8ab9-4702-9997-d40bff18f361%2F0a58e393-8941-414a-8200-582087058b05%2Fimage.png/size/w=1360?exp=1744331602&sig=mfOuc_v1xFqXbnAJg9dDq3saqJy9hWDxq4BJbrDMEls&id=1d0d393f-f68e-80de-a045-ce0f6eb5f224&table=block" target='_blank'>
            Baixe uma imagem com algumas das orações aqui!
          </a>
        </div>
    </div>
  )
}

export default App
