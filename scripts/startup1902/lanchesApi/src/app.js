import express from 'express';
import cors from 'cors';
import router from './routes/produto.js';

const app = express();

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
  //   res.send('Teste bem testado do balacobaco!');
  // });
  
app.use(router);

export {app};