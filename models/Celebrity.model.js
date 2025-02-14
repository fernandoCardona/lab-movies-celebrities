///PASOS PARA CREAR UN MODELO
const mongoose = require("mongoose");
// 1.Importamos mongoose
const { Schema, model } = require('mongoose');
// 2.Creamos la Schema/ Plantilla
const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
},{
    timestamps: true // Inserta en la base de datos la fecha de cuando fue creada.
});
// 3.Creamos una constante del modelo
const Celebrity = model('Celebrity', celebritySchema);
// 4.Exportamos el modelo
module.exports = Celebrity;
