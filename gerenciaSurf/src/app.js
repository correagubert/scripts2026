import express from "express";

const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
    // Endpoint de teste da API
    console.log('Pingou!');
    res.status(200).send('Bilau')
});

app.listen(port, () => {
    console.log(`Servidor rodando e sendo lido na porta ${port}`);
    console.log(`Testar link: http://localhost:${port}`)
});

