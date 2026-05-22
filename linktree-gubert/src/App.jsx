import './App.css'
import { SiRedbull } from "react-icons/si";
import Linkedin from './components/Linkedin';
function App() {

  return (
    <div className='container-app'>
      <h1>Meus links</h1>

      <a href="http://masterpiece.fansubs.com.br"
      className='links' target='_blank'>
        <SiRedbull />
        Site do meu grupo de traduções
        <SiRedbull />
      </a>

      <Linkedin />

    </div>
  )
}

export default App
