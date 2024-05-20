const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },

    email:{
        type:String,
        required: [true, 'El email es obligatorio'],
        unique:true
    },

    password:{
        type:String,
        required: [true, 'La contraseña es obligatoria']
    },

    imagen:{
        type:String
    },

    rol:{
        type:String,
        required: true,
        default: 'USER',
        // enum: ['ADMIN', 'USER']
    },

    estado:{
        type:Boolean,
        default: true
    },

    googleSignIn: {
        type:Boolean,
        default: true
    }
});



module.exports = model('Usuario', UsuarioSchema);