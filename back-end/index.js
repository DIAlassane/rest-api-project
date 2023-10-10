const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UtilisateurModel = require('./model/utilisateur')

//initialiser
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/rest") //connecter la base de donnée


//READ
app.get('/', (req, res) => {
    UtilisateurModel.find({})
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
})


//CREATE
app.post('/register',(req, res)=>{
    UtilisateurModel.create(req.body)
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
} 
) 


//GETUSER
app.get('/getuser/:id',(req, res)=>{
    const id = req.params.id; // recupérer les paramètres d'une page vers une autre
    UtilisateurModel.findById({_id:id})
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
} 
) 

//UPDATE
app.put('/update/:id', (req, res)=>{
    const id = req.params.id;
    UtilisateurModel.findByIdAndUpdate({_id:id}, {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
    })
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
}) 


//DELETE
app.delete('/delete/:id',(req, res)=>{
    const id = req.params.id;
    UtilisateurModel.findByIdAndDelete({_id:id})
    .then(res=> res.json(res))
    .catch(err => res.json(err))
} 
) 


app.post('/login',(req, res)=>{
    const {email, password} = req.body; // recupérer les paramètres d'une page vers une autre
    UtilisateurModel.findOne({email})
    .then(clients => {
        if(clients) {
            if(clients.password === password) {
                res.json("Success")
                
            } else {
                res.json("the password is incoresct")
            } 
        } else {
                res.json("aucun natch")
            }
    })
    .catch(err => res.json(err))
} 
) 

app.listen(3001, () => {
    console.log("server sur le port 3001");
})

