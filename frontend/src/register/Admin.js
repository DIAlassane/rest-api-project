import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import '../style/admin.css'
import { Icon } from '@iconify/react';


function Admin() {

    const [admin, setAdmin] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setAdmin(result.data))
            .catch(err => console.log(err))

    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))

    }
    return (
        <div className="all">
            <div className="myAdmin">
                <h2>Liste des Admins</h2>

                <div className="add"><form>
                    <Link to="/register">Ajouter un admin<Icon icon="zondicons:add-outline" color="green" width="20px" /></Link></form>
                    <a href="/dashboard">Dashboard</a>
                </div>
                <div className="myTab">
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                admin.map((user) => {
                                    return (
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <div className="myButtons">
                                                <form className="maj"><Link to={`/update/${user._id}`}> Modifier <Icon icon="mdi:pencil" width="20px" /></Link></form>
                                                <button className="delete" onClick={(e) => handleDelete(user._id)}>Supprimer  <Icon icon="mdi:garbage-can-empty" width="20px" /></button></div>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Admin;