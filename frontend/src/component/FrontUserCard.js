import '../css/FrontCard.css'
import { Modal,Button} from 'react-bootstrap'
import React, { useState } from 'react'

function FrontUserCard({user}) {
  const [show, setShow]=useState(false);
  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);

  return (
    <div>
        <div>
          <div className='card'>
              <img src={user.url} alt="" />
              <div className='mini-details-card'>
                <div className="marmod">
                  <h3>{user.marque}</h3>
                  <p>{user.modele}</p>
                </div>
                <button type='button' onClick={handleShow} className='btn light-details'>Details</button>
              </div>
          </div>
        </div>
            <Modal style={{width:'100%'}} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Details : {user.marque} - {user.modele}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img className="card-img-top" style={{width:'14rem'}}src={user.url} Poster />
            <h3>{user.modele}</h3>
            <h4>Prix : {user.prix}</h4>
            <h5>Boîte de vitesse : {user.vitesse}</h5>
            <br></br>
            <h6>Année de sortie : {user.annee}</h6>
            <p>Nombre de porte : {user.porte}</p>
            <p>Carburant : {user.carburant}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>

    </div>
  )
}

export default FrontUserCard