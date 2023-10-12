const mongoose = require('mongoose');// gérer la BDD MangoDB
//structurer les données
const UtilisateurSchema = new mongoose.Schema({ 
    name : String,
    email : String,
    password : String,
})

const UtilisateurModel = mongoose.model("clients", UtilisateurSchema) //modèle associé à la collection "clients" dans la base de données MongoDB.

module.exports = UtilisateurModel