import db from '../config/db.js';
import bcrypt from 'bcrypt';

const createUser = async (req, res) => {
    const { nome, cpf, email, senha, telefone } = req.body;
    const saltRounds = 255;
    const hashedPassword = await bcrypt.hash(senha, saltRounds);
    try {
        if (!nome || !cpf || !email || !senha || !telefone) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }
        const [rows] = await db.query(
            'INSERT INTO usuarios (nome, cpf, email, senha, telefone) VALUES (?, ?, ?, ?, ?)',
            [nome, cpf, email, hashedPassword, telefone]
        );
        if(rows.affectedRows === 0) {
            return res.status(500).json({ error: 'Erro ao criar usuário' });
        }

        return res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};

export { createUser };