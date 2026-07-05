import { useState, useEffect } from "react"
import { getProdutos, addProdutos, editProdutos, deleteProdutos } from "../services/produto"
import ModalProduto from "./ModalProduto";
import EditarProduto from "./EditarProduto";
import { Modal } from "bootstrap";

const Produto = () => {
    // Lista importada do backend
    const [produtos, setProdutos] = useState([])
    // Controle do Modal
    const [modal, setModal] = useState(false);
    // Produto selecionado para edição
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    // Define se o modal está em modo de edição ou criação
    const [modo, setModo] = useState("edit"); // "edit" | "create"
    // Estados do Formulário
    const [tituloEdit, setTituloEdit] = useState("");
    const [descricaoEdit, setDescricaoEdit] = useState("");
    const [valorEdit, setValorEdit] = useState("");



    const carregaProduto = async () => {
        try{
            const lista = await getProdutos();
            setProdutos(lista);
        } catch (error) {
            console.error("Deu ruim:", error);
            setProdutos([]); // Evita quebrar a tabela
        }
    }

    useEffect(() => {
        carregaProduto();
    }, []);

    const abrirModalEdicao = (produto) => {
        setModo("edit");
        setProdutoSelecionado(produto);
        // Preenche o formulário com os dados do produto selecionado
        setTituloEdit(produto.nome ?? "");
        setDescricaoEdit(produto.descricao ?? "");
        setValorEdit(produto.valor ?? "");
        setModal(true);
    }
    const abrirModalCriacao = () => {
        setModo("create");
        setProdutoSelecionado(null);
        setTituloEdit("");
        setDescricaoEdit("");
        setValorEdit("");
        setModal(true);
    }
    const fecharModal = () => {
        setModal(false);
        setProdutoSelecionado(null);
    }

    async function salvar() {
        try {
            const payload = {
                nome: tituloEdit,
                descricao: descricaoEdit,
                valor: Number(valorEdit) > 0 ? valorEdit : 0,
            };
            if (modo === "create") {
                const ok = await addProdutos(payload);
                if(ok === "") { 
                    alert("Não foi possível adicionar o produto.");
                    return false;
                }
                alert("Produto adicionado com sucesso!");
            }else{
                // Se for modo de edição
                if(!produtoSelecionado.id) {
                    alert("Nenhum produto selecionado.");
                    return false;
                }
                const ok = await editProdutos(produtoSelecionado.id, payload);
                if(ok === "") {
                    alert("Não foi possível editar o produto.");
                    return false;
                } 
                alert("Produto editado com sucesso!");
            }
                await carregaProduto();
                fecharModal();
        } catch (error) {
            console.log("Erro", error);
        }
    }

    const remove = async (id) => {
        if(!window.confirm("Tem certeza que deseja excluir este produto?")) return;
        try {
            const deleted = await deleteProdutos(id);
            if(deleted === "") {
                alert("Não foi possível excluir o produto.");
                return false;
            }
            alert("Produto excluído com sucesso!");
            carregaProduto();
        } catch (error) {
            console.log("Erro ao excluir produto:", error);
            console.error("Deu ruim:", error);
        }
    }

    return (
        <div className="container">
        <h1>Lanchonete do Bola</h1>

        <button className="btn btn-warning" onClick={abrirModalCriacao}>Adicionar Produto</button>

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
                            <td>
                                <button className="btn btn-primary" onClick={() => abrirModalEdicao(p)}>Editar</button>
                                <button className="btn btn-danger" onClick={() => remove(p.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ModalProduto
                open={modal}
                onClose={fecharModal}
                title={modo === "create" ? "Adicionar Produto" : (produtoSelecionado?.nome || "Editar Produto")}
                onSave={salvar}
            >
            <EditarProduto
                titulo={tituloEdit}
                descricao={descricaoEdit}
                valor={valorEdit}
                onChangeTitulo={setTituloEdit}
                onChangeDescricao={setDescricaoEdit}
                onChangeValor={setValorEdit}
            />
            </ModalProduto>
        </div>
    )
}

export default Produto