import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../css/Create.css'

function CreateUser() {
  const [marque, setMarque] = useState()
  const [modele, setModele] = useState()
  const [prix, setPrix] = useState()
  const [vitesse, setVitesse] = useState()
  const [annee, setAnnee] = useState()
  const [porte, setPorte] = useState()
  const [carburant, setCarburant] = useState()
  const [url, setUrl] = useState()
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3002/createUser", {
      marque,
      modele,
      prix,
      vitesse,
      annee,
      porte,
      carburant,
      url
    })
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='backcolor'>
      <div className='ajouter'>
        <form className='.form' onSubmit={Submit} action="">
          <h2>Ajouter une voiture</h2>

          <div className='hautediv'>
            <input type="text" placeholder='Entrer marque' 
            onChange={(e) => setMarque(e.target.value)}/>
            <input type="text" placeholder='Enter modele' 
            onChange={(e) => setModele(e.target.value)}/>
          </div>
          <div className='divprix'>
            <input type="text" placeholder='Prix' 
            onChange={(e) => setPrix(e.target.value)}/>
          </div>
          <div className='divmillieux'>
            <input type="text" placeholder='Boîte de vitesse' 
            onChange={(e) => setVitesse(e.target.value)}/>
            <input type="text" placeholder='Année' 
            onChange={(e) => setAnnee(e.target.value)}/>
          </div>
          <div className='divbas'>
            <input type="number" placeholder='Nombre de porte' 
            onChange={(e) => setPorte(e.target.value)}/>
            <input type="text" placeholder='Type de carburant' 
            onChange={(e) => setCarburant(e.target.value)}/>
            <input type="text" placeholder='URL' 
            onChange={(e) => setUrl(e.target.value)}/>
          </div>
            
          <button>Ajouter</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser