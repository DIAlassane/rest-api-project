import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";

function UpdateUser() {
  const { id } = useParams()
  const [marque, setMarque] = useState()
  const [modele, setModele] = useState()
  const [prix, setPrix] = useState()
  const [vitesse, setVitesse] = useState()
  const [annee, setAnnee] = useState()
  const [porte, setPorte] = useState()
  const [carburant, setCarburant] = useState()
  const [url, setUrl] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {
      console.log(result)
      setMarque(result.data.name)
      setModele(result.data.email)
      setPrix(result.data.prix)
      setVitesse(result.data.age)
      setAnnee(result.data.age)
      setPorte(result.data.age)
      setCarburant(result.data.age)
      setUrl(result.data.age)
    })
    .catch(err => console.log(err))
  }, [])

  const Update = (e) => {
    e.preventDefault()
    axios.put("http://localhost:3001/updateUser/"+id, {
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
      <div>
        <div>
          <form action="" onSubmit={Update}>
            <h2>Update car</h2>
            <div>
              <input type="text" placeholder='Entrer marque' 
              onChange={(e) => setMarque(e.target.value)}/>
            </div>
            <div>
              <input type="text" placeholder='Enter modele' 
              onChange={(e) => setModele(e.target.value)}/>
            </div>
            <div>
              <input type="text" placeholder='Prix' 
              onChange={(e) => setPrix(e.target.value)}/>
            </div>
            <input type="text" placeholder='Boîte de vitesse' 
              onChange={(e) => setVitesse(e.target.value)}/>
              <input type="text" placeholder='Année' 
              onChange={(e) => setAnnee(e.target.value)}/>
              <input type="number" placeholder='Nombre de porte' 
              onChange={(e) => setPorte(e.target.value)}/>
              <input type="text" placeholder='Type de carburant' 
              onChange={(e) => setCarburant(e.target.value)}/>
              <input type="text" placeholder='URL' 
              onChange={(e) => setUrl(e.target.value)}/>
            <button>Update</button>
          </form>
        </div>
      </div>
  )
}

export default UpdateUser