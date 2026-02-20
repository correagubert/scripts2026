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

export {getProdutos}