import React from "react";
import { Link } from "react-router-dom";
import "../style/dashboard.css"
import { Icon } from '@iconify/react';



export default function Dashboard() {
    return (
        <div className="mainDashboard">
            <div className="headerDash">
            <h2>Dashboard</h2>
            </div>
            <div className="dashboard">
                <div className="myLink">
                    
                    <button > <Link to="/admin"> Liste Admins</Link> <Icon icon="clarity:administrator-solid"  width="30"  /> </button>
                    <button > <Link to="/users"> Liste des Voitures</Link> <Icon icon="game-icons:city-car"  width="40"  /></button>
                    
                </div>
            </div>
            
        </div>
    );
}