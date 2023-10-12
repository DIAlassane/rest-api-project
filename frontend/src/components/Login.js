import React, { useState } from "react";
import axios from "axios";
import "../style/login.css"; // Assurez-vous d'importer vos styles
import { useNavigate } from "react-router-dom";
import Footer from "../nav-footer/Footer";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "success") {
                    console.log(result.data)
                    navigate("/dashboard")
                }
                else {console.log("no success")
                }
            })
            .catch(err => console.log(err));

      
    }

    return (
        < >
            <div className="bodyLogin">

                <div className="loginContent">
                    <h2 className="titreCo">Connexion</h2>
                    <div className="login">
                        <form className="myLogin" action="" onSubmit={handleSubmit}>
                            <label htmlFor="email">Email :</label>
                            <input type="text"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)} />


                            <label htmlFor="password">Mot de passe :</label>
                            <input type="password"
                                name="password"
                                placeholder="Mot de passe"
                                onChange={(e) => setPassword(e.target.value)} />
                            <div className="mesBouttons">
                                <button className="seConnecter" type="submit">Se connecter</button>
                            </div>

                        </form>
                    </div>
                </div>
                <Footer/>

            </div>
        </>
    )
}

export default Login;
