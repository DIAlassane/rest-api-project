import React from "react";
import { Link } from "react-router-dom";
import "../style/dashboard.css"



export default function Dashboard() {
    return (
        <div className="mainDashboard">
            <h2>Dashboard</h2>

            <div className="dashboard">
                <div className="myLink">
                    
                    <form > <Link to="/admin"> Liste Admins</Link></form>
                    <form > <Link to="/admin"> Liste Admins</Link></form>
                    
                </div>
            </div>
        
        </div>
    );
}