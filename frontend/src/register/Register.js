import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/register.css"
import { Link } from "react-router-dom";

 function Register(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result=> {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))

    }

    return(
        <>
        <h2>Register</h2>
        <div className="register">
        <form  className="myRegister" action="" onSubmit={handleSubmit}>
        <label for="firstname">Nom: </label>
            <input  type="text"
            name="name" placeholder="nom"
            onChange={(e)=> setName(e.target.value)}/>
            <label for="email">Email: </label>
             <input type="text"
            name="email" placeholder="email"
            onChange={(e)=> setEmail(e.target.value)}/>
            <label for="password">Mot de passe: </label>
             <input type="text"
            name="password" placeholder="mot de passe"
            onChange={(e)=> setPassword(e.target.value)}/>
                <div className="mesBouttons">
            <button type="submit">Soumettre</button>
            <button > <Link to="/">Retour à la liste</Link></button>
            </div>
        </form>
        </div>
        </>
    )
}

export default Register;