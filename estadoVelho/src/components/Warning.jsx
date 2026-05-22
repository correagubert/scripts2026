import { useState } from 'react'
function Warning() {
    const [warn, setWarn] = useState(false)

function toggleWarn() {
    setWarn(!warn)
}
  return (
    <div>
        { warn && <p>Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.</p> }
        <button onClick={toggleWarn}>AVISO</button>
    </div>
  )
}

export default Warning