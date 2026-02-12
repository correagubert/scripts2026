import express from 'express';
import cors from 'cors';
const app = express();

const veiculoRouter = require('./routers/veiculo.js');
app.use('/veiculo', veiculoRouter);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Teste');
});

// Endpoints