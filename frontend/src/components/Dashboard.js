import React from "react";
import { Link } from "react-router-dom";
import "../style/dashboard.css"



export default function Dashboard() {
    return (
        <>
            <h2>Dashboard</h2>

            <div className="dashboard">
                <div>
                    <form> <Link to="/admin">Admin</Link></form>
                </div>
            </div>
        
        </>
    );
}