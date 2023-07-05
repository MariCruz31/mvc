import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:verde@cluster0.1yrn0wk.mongodb.net/senac2");
// a Função connect guarda a string dentro dos parênteses.

let db = mongoose.connection;
//Agora criamos uma vaariavél que guarda a ação de conectar  nosso usuário com o mongoDB.

export default db;