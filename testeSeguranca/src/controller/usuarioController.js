    const db = require('../config/db.js');
    const bcrypt = require('bcrypt');

    const registerUser = async (req, res) => {
            try {
                const full_name = req.body.full_name;
                const email = req.body.email;
                const password = req.body.password;
                const user_type = req.body.user_type;
                // Validação básica
                if (!email || !password) {
                    return res.status(400).json({ error: "Email e senha são obrigatórios." });
                }

                // Hash da senha com bcrypt
                const saltRounds = 10;
                const hashPassword = bcrypt.hash(password, saltRounds);
                console.log(hashPassword)
                // Criar usuário no banco de dados
                const [results] = await db.query('INSERT INTO user (full_name, email, password, user_type, ativo) VALUES (?, ?, ?, ?, ?)', [full_name, email, hashPassword, user_type, 1]);
                if (results.affectedRows === 0) {
                    return res.status(400).json({ error: "Não foi possível criar o usuário." });
                }
                return res.status(201).json(results);
            } catch (error) {
                console.error("Erro no registro:", error);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            return res.status(400).send("Not Found");
        };

        const loginUser = async (req, res) => {
            try {
                const { email, password } = req.body;
                const [user] = await db.query('SELECT * FROM user WHERE email = ?', [email]);
                if (!user || !(await bcrypt.compare(password, user.password))) {
                    return res.status(401).json({ error: "Credenciais inválidas" });
                }
                // Gerar access token (curta duração)
                const accessToken = signAccessToken({
                    userId: user.id,
                    email: user.email,
                    nome: user.nome,

                });

                // Gerar refresh token (longa duração)
                const refreshToken = signRefreshToken({
                    userId: user.id,
                    email: user.email,
                    nome: user.nome,

                });
                // Armazenar refresh token no banco de dados
                const expiresAt = new Date();
                expiresAt.setDate(expiresAt.getDate() + 7);
                console.log(refreshToken)
                await prismaClient.token.create({
                    data: {
                        token: refreshToken,
                        type: "refresh",
                        userId: user.id,
                        expiresAt,
                    },
                });
                res.status(200).json({
                    accessToken,
                    refreshToken,
                    user: {
                        userId: user.id,
                        email: user.email,
                        nome: user.nome,

                    },
                });
            } catch (error) {
                console.error("Erro no login:", error);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            return res;
        };


module.exports = {
    registerUser,
    loginUser
}