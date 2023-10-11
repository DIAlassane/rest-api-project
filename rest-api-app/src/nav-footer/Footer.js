import React from 'react'
import '../App.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="gauche">
            <a href="/">TTC</a>
            <p>Du marketing de qualiter pour des produits de qualités.</p>
            <p>Des voitures de qualités pour un transport sur et adapté.</p>
        </div>
        <div className="millieu">
            <p>Rejoignez nôtre news-letters</p>
            <div className="news-letter">
                <input type="text" placeholder='Entrez vôtre mail' />
                <button>Rejoindre</button>
            </div>
        </div>
        <div className="droite">
            <h3>Appel - Service Client</h3>
            <p>06.69.63.70.90</p>
        </div>
    </div>
  )
}

export default Footer