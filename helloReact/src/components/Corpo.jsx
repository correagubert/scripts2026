import './Corpo.css'
function Corpo(){
    function alertarUsuario(){
        alert("Cuidado!")
    }
    return (
        <div className="container-corpo">
            <h1>Desbravando o React!</h1>
            <p>I race to win. If you no longer go for a gap that exists, you're no longer a racing driver.</p>
            <button onClick={alertarUsuario}>Alerta</button>
            <img className='imagem' src="./fangio.jpg" alt="" />
            {2+2}
        </div>
    )
}

export default Corpo;