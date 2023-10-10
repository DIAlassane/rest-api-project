import { Link } from 'react-router-dom'
import '../css/FrontCard.css'

function FrontUserCard({user}) {

  return (
    <div>
        <div>
          <div className='card'>
              <img src={user.url} alt="" />
              <div className='mini-details-card'>
                  <h3>{user.marque}</h3>
                  <p>{user.modele}</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default FrontUserCard