import { PrismaClient } from "../../prisma/prisma.js"

class surfController {
    constructor() {}

    async getPranchas(req, res) {
        try {
            const [results] = await prismaClient.pranchas.findMany();
            if (results.length === 0) return res.status(404).json({ message: 'Nenhuma prancha encontrada.' })
            return res.status(200).json({ message: 'Pranchas encontrados com sucesso!', data: results })
        } catch (error) {
            return console.log(error).res.status(400).json({ message: 'Erro ao buscar os produtos.' })
        }
    }

    async addPranchas(req, res) {
        try {
            const { body } = req
            const [results] = await prismaClient.pranchas.create({
                data: {
                    nome: body.nome,
                    modelo: body.modelo,
                    marca: body.marca,
                    tabua: body.tabua,
                    tamanho: body.tamanho,
                    material: body.material,
                },
            })
            return res.status(201).json({ message: 'Prancha adicionada com sucesso.', data })
        } catch (error) {
            res.status(400).json({ message: 'Erro ao adicionar a prancha.', error: error.message })
        }
    }
    
     async editPranchas(req, res) {
        try {
            const nomePrancha = req.body.nome
            const modeloPrancha = req.body.modelo
            const marcaPrancha = req.body.marca
            const tabuaPrancha = req.body.tabua
            const tamanhoPrancha = req.body.tamanho
            const materialPrancha = req.body.material
            const id = req.params.id
            const [results] = await db.query('UPDATE produto SET nome = ?, descricao = ?, valor = ? WHERE id = ?', [nomeProduto, descricaoProduto, valorProduto, id]);
            if (results.affectedRows === 0  ) return res.status(404).json({ message: 'Produto não encontrado.', error: error.message })
            return res.status(200).json({ message: 'Produto editado com sucesso!', data: results })
        } catch (error) {
            res.status(400).json({ message: 'Erro ao editar o produto.', error: error.message })
        }
    }
    
     async deletePranchas(req, res) {
        try {
            const id = req.params.id
            const [results] = await db.query('DELETE FROM produto WHERE id = ?', [id]);
            if (results.affectedRows === 0) return res.status(404).json({ message: 'Produto não encontrado.', error: error.message }) // Se nenhuma linha for afetada, enviar erro de não encontrado.
            return res.status(200).json({ message: 'Produto deletado com sucesso!', data: results })
        } catch (error) {
            res.status(400).json({ message: 'Erro ao deletar o produto.', error: error.message })
        }
    }  
}

export {getProdutos, editProdutos, deleteProdutos, addProdutos}
