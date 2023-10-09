import React, { useState } from "react";
import axios from "axios";

export default function Register(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.eventDefault()
        axios.post('http://localhost:3001/register',{name, email, password})
        .then(result=> console.log(result))
        .catch(err => console.log(err))

    }

    return(
        <>
        <form action="" onSubmit={handleSubmit}>
            <input type="text"
            name="name" placeholder="nom"
            onChange={(e)=> setName(e.target.value)}/>
             <input type="text"
            name="email" placeholder="email"
            onChange={(e)=> setEmail(e.target.value)}/>
             <input type="text"
            name="password" placeholder="mot de passe"
            onChange={(e)=> setPassword(e.target.value)}/>

            <button type="submit">Soumettre</button>
        </form>
        </>
    )
}