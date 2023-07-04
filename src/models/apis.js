import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        categoria:{type: String, required: true},
        especialidades: {type: String, required: true},
        endereço: {type: Object, required: true}
            
    }
)

const apis = mongoose.model('apis' , apiSchema);

module.exports = apis;
