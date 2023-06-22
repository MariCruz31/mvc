import express, { json } from 'express';
import index from './routes/index.js';

const app = express(); // eata variavel recebe o express, e será usada em outros arquivos

app.use(json()); //começo das conexões 
app.use("/" , index); //rotear o caminho dentro do arquivo index


export default app 