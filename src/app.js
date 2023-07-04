import express, { json } from 'express';
import index from './routes/index.js';
import db from './config/dbConnect.js';
const app = express(); // eata variavel recebe o express, e será usada em outros arquivos

app.use(json()); //começo das conexões 
app.use("/" , index); //rotear o caminho dentro do arquivo index


db.on("error" , console.log.bind(console,'Erro de conexão'))
db.once("open" , () => {
    console.log('Conexão com o banco feita com sucesso')
});

export default app 