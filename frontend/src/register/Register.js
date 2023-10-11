import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/register.css";
import { Link } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!emailRegex.test(email)) {
            alert("L'adresse e-mail n'est pas valide.");
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("Le mot de passe doit contenir au moins 8 caractères, dont au moins une majuscule.");
            return;
        }

        axios
            .post("http://localhost:3001/register", { name, email, password })
            .then((result) => {
                console.log(result);
                navigate("/admin");
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="mainRegister">
            <h2>Register</h2>
            <div className="register">
                <form className="myRegister" onSubmit={handleSubmit}>
                    <label htmlFor="name">Nom: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Mot de passe: </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="bouttons">
                        <button type="submit">Soumettre</button>
                        <button>
                            <Link to="/admin">Retour à la liste</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
