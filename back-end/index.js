const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UtilisateurModel = require('./model/utilisateur')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/rest")

app.post('/register',(req, res)=>{
    UtilisateurModel.create(req.body)
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
} 
)

app.listen(3001, () => {
    console.log("server sur le port 3001");
})
