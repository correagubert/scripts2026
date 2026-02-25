import db from '../config/db.js'

const getProdutos = async (req, res) => {
    try {
        const [results] = await db.query('SELECT id, nome, descricao, valor FROM produto where ativo = 1')
        if (results.length === 0) return res.status(404).json({ message: 'Nenhum produto encontrado.' })
        return res.status(200).json({ message: 'Produtos encontrados com sucesso!', data: results })
    } catch (error) {
        return console.log(error).res.status(400).json({ message: 'Erro ao buscar os produtos.' })
    }
}

const editProdutos = async (req, res) => {
    try {
        const nomeProduto = req.body.nome
        const descricaoProduto = req.body.descricao
        const valorProduto = req.body.valor
        const id = req.params.id
        const [results] = await db.query('UPDATE produto SET nome = ?, descricao = ?, valor = ? WHERE id = ?', [nomeProduto, descricaoProduto, valorProduto, id]);
        if (results.affectedRows === 0  ) return res.status(404).json({ message: 'Produto não encontrado.', error: error.message })
        return res.status(200).json({ message: 'Produto editado com sucesso!', data: results })
    } catch (error) {
        res.status(400).json({ message: 'Erro ao editar o produto.', error: error.message })
    }
}

const deleteProdutos = async (req, res) => {
    try {
        const id = req.params.id
        const [results] = await db.query('DELETE FROM produto WHERE id = ?', [id]);
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Produto não encontrado.', error: error.message }) // Se nenhuma linha for afetada, enviar erro de não encontrado.
        return res.status(200).json({ message: 'Produto deletado com sucesso!', data: results })
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar o produto.', error: error.message })
    }
}

const addProdutos = async (req, res) => {
    try {
        const nomeProduto = req.body.nome
        const descricaoProduto = req.body.descricao
        const valorProduto = req.body.valor
        const [results] = await db.query('INSERT INTO produto (nome, descricao, valor) VALUES (?, ?, ?)', [nomeProduto, descricaoProduto, valorProduto]);
        return res.status(200).json({ message: 'Produto adicionado com sucesso!', data: results })
    } catch (error) {
        res.status(400).json({ message: 'Erro ao adicionar o produto.', error: error.message })
    }
}

export {getProdutos, editProdutos, deleteProdutos, addProdutos}