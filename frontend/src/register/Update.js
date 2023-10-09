import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";


function Update() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get('http://localhost:3001/getuser/'+id)
        .then(result=> {
            console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setPassword(result.data.password)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        axios.put('http://localhost:3001/update/'+id, {name, email, password})
        .then(result=> {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))

    }
    return(
        <>
        <form action="" onSubmit={Update}>
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
        <Link to='/'>PAge principal</Link>
        </>
    );
}

export default Update;