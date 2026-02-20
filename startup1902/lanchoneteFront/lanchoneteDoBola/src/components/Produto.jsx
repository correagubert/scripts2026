import { useState, useEffect } from "react"
import { getProdutos } from "../services/produto"

const Produto = () => {
    const [produtos, setProdutos] = useState([])
    const carregaProduto = async () => {
        try{
            const lista = await getProdutos();
            setProdutos(lista.data);
        } catch (error) {
            console.error("Deu ruim:", error);
        }
    }

    useEffect(() => {
        carregaProduto();
    }, []);

    return (
        <>
        <h1>Lanchonete do Bola</h1>

        <button className="btn btn-danger">Adicionar Produto</button>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Ações</th> 
                    </tr>
                </thead>
                <tbody>
                    {produtos && produtos.map((p) => (
                        <tr key={p.id}>
                            <td>{p.nome}</td>
                            <td>{p.descricao}</td>
                            <td>{p.valor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Produto