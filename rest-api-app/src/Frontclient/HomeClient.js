import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FrontUserCard from '../components/FrontUserCard'
import '../css/HomeClient.css'

function HomeClient() {
    const [search, setSearch] = useState()
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    const onChange = (user) => {
        setSearch(user.target.search)
    }
    const onSearch= (searchTerm) => {
        setSearch(searchTerm);
    }


  return (
    <div className='gg'>
        <div className='gauche'>
            <form className='recherche' action="">
                <input type="text" 
                placeholder='Recherche ...'
                onChange={(e) => setSearch(e.target.value)}
                value={search} onChanges={onChange}
                />
                <button onClick={()=> onSearch(search)}>R..</button>  
            </form>
            <div className="dropdown">
                {
                users && users.filter(user => {
                    const searchTerm = search;
                    const modele = user.modele;

                    return searchTerm && modele.startsWith(searchTerm) && modele !== searchTerm;
                })
                .map((user)=> (
                <div onClick={() => onSearch(user.modele)} className='dropdown-row' key={user.modele}>
                    {user.modele}
                </div> 
                ))
                }
            </div>
        </div>
            
        <div className="container">
            <div className="grid">
        {
            users && users.filter((user) => {
                return search === ''
                ? user
                : user.modele.includes(search)
            }).map((user) => {
                return (    
                    <div className='frontus'>
                        <FrontUserCard user={user} />
                    </div>          
                )
            })
        }
            </div>
        </div>

    </div>
  )
}

export default HomeClient