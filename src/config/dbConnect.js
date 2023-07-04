import mongoose from 'mongoose';

mongoose.connect();
// a Função connect guarda a string dentro dos parênteses.

let db = mongoose.connection;
//Agora criamos uma vaariavél que guarda a ação de conectar  nosso usuário com o mongoDB.

module.exports = db;