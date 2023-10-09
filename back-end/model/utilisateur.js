const mongoose = require('mongoose');
const UtilisateurSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
})

const UtilisateurModel = mongoose.model("clients", UtilisateurSchema)

module.exports = UtilisateurModel