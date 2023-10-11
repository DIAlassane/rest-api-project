const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    marque: String,
    modele: String,
    prix: Number,
    vitesse: String,
    annee: String,
    porte: Number,
    carburant: String,
    url: String,
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel