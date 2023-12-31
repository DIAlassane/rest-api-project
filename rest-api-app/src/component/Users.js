import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Users.css'

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(errr => console.log(errr))
    }

  return (
    <div>
        <div className='carlist'>
            <h2>Liste de nos voitures</h2>
            <Link to="/create" >Ajouter +</Link>
            <table>
                <thead>
                    <tr>
                        <th>Marque</th>
                        <th>Modèle</th>
                        <th>Prix</th>
                        <th>Boîte de Vitesse</th>
                        <th>Année de sortie</th>
                        <th>Nb de porte</th>
                        <th>Carburant</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((user) => {
                        return (
                        <tr>
                            <td>{user.marque}</td>
                            <td>{user.modele}</td>
                            <td>{user.prix}</td>
                            <td>{user.vitesse}</td>
                            <td>{user.annee}</td>
                            <td>{user.porte}</td>
                            <td>{user.carburant}</td>
                            <td>{user.url}</td>
                            <td>
                                <Link to={`/update/${user._id}`}>MAJ</Link>
                                <button className='delete' onClick={(e) => handleDelete(user._id)}>
                                    Supprimer
                                </button>
                            </td>
                        </tr>)
                    })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users