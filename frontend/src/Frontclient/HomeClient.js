import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FrontUserCard from '../component/FrontUserCard';
import '../css/HomeClient.css';
import Navbar from '../nav-footer/Navbar';
import Footer from '../nav-footer/Footer';

function HomeClient() {
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3002')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err));
    }, []);

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const onSearch = (searchTerm) => {
        setSearch(searchTerm);
    };

    return (
        <div>
            <Navbar />
            <div className='gg'>
                <div className='gauche'>
                    <form className='recherche' action="">
                        <input
                            type="text"
                            placeholder='Recherche ...'
                            value={search}
                            onChange={onChange}
                        />
                        <button onClick={() => onSearch(search)}>R..</button>
                    </form>
                    <div className="dropdown">
                        {users &&
                            users
                                .filter((user) => {
                                    const searchTerm = search;
                                    const modele = user.modele;

                                    return searchTerm && modele.startsWith(searchTerm) && modele !== searchTerm;
                                })
                                .map((user) => (
                                    <div onClick={() => onSearch(user.modele)} className='dropdown-row' key={user.modele}>
                                        {user.modele}
                                    </div>
                                ))}
                    </div>
                </div>

                <div className="container">
                    <div className="grid">
                        {users &&
                            users
                                .filter((user) => {
                                    return search === '' || (user.modele && user.modele.includes(search));
                                })
                                .map((user) => {
                                    return (
                                        <div className='frontus' key={user.modele}>
                                            <FrontUserCard user={user} />
                                        </div>
                                    );
                                })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomeClient;
