import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
    <div className='navbar'>
        <a href="/">TTC</a>
        <div className="navlink">
            <Link to="/login">Connexion</Link>
        </div>
    </div>
  )
}

export default Navbar