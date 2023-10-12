// Importer les modules nécessaires
const express = require('express'); // Importer Express
const cors = require('cors'); // Middleware CORS pour autoriser les requêtes cross-origin
const mongoose = require('mongoose'); // Mongoose pour la gestion de la base de données MongoDB
const UtilisateurModel = require('./model/utilisateur'); // Importer le modèle utilisateur
const bcrypt = require('bcrypt')

// Initialiser l'application Express
const app = express(); // Créer une instance d'Express
app.use(express.json()); // Utiliser JSON comme format de données
app.use(cors()); // Activer CORS pour autoriser les requêtes depuis d'autres domaines

// Connecter à la base de données MongoDB
mongoose.connect("mongodb://localhost:27017/rest"); // Connexion à la base de données MongoDB

// Définition des routes API

// Route pour lire (READ) tous les utilisateurs
app.get('/', (req, res) => {
    UtilisateurModel.find({})
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
})

// Route pour créer (CREATE) un nouvel utilisateur
app.post('/register',(req, res)=>{
    UtilisateurModel.create(req.body)
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
})

// Route pour obtenir (GETUSER) un utilisateur par ID
app.get('/getuser/:id',(req, res)=>{
    const id = req.params.id; // Récupérer les paramètres de l'URL
    UtilisateurModel.findById({_id:id})
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
})

// Route pour mettre à jour (UPDATE) un utilisateur par ID
app.put('/update/:id', (req, res)=>{
    const id = req.params.id; // Récupérer l'ID depuis l'URL
    UtilisateurModel.findByIdAndUpdate({_id:id}, {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
    })
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
})

// Route pour supprimer (DELETE) un utilisateur par ID
app.delete('/delete/:id',(req, res)=>{
    const id = req.params.id; // Récupérer l'ID depuis l'URL
    UtilisateurModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// Route pour gérer l'authentification (LOGIN) des utilisateurs
app.post('/login',(req, res)=>{
    const {email, password} = req.body; // Récupérer les paramètres de la requête de notre front
    UtilisateurModel.findOne({email})
    .then(clients => {
        if(clients) {
            if(bcrypt.compare(password, clients.password)) {
                res.json("success") // Authentification réussie
            } else {
                res.json("the password is incorrect") // Mot de passe incorrect
            } 
        } else {
            res.json("aucun match") // Aucune correspondance trouvée pour l'e-mail
        }
    })
    .catch(err => res.json(err))
})

// Lancer le serveur Express sur le port 3001
app.listen(3001, () => {
    console.log("Serveur en cours d'exécution sur le port 3001");
})
