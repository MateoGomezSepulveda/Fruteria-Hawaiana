const { Schema, model } = require('mongoose');

const EnsaldaSchema = Schema({
    imagen: {
        type: String,
        required: [false, 'la imagen no es obligatoria']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    descripcion: {
        type: String,
        unique: false,
        required: [false, 'La descripción no es obligatoria'], 
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    }
});

module.exports = model('Ensalada', EnsaldaSchema);
