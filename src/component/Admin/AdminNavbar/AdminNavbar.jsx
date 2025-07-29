import React from 'react'
import "../AdminNavbar/AdminNavbar.css"
import icecream from '../../../assets/ice-cream.png';
import { Link } from 'react-router-dom';


const AdminNavbar = () => {
    return (
        <>
            <nav>
                <div className="navbar-left">
                    <img src={icecream} alt="ice-cream" />
                    <Link to="/" style={{
                        textDecoration: 'none',
                        color: 'hotpink'
                    }}>
                        <div className="navbar-logo" >ScoopieDoo</div></Link>
                </div>
            </nav>
        </>
    )
}

export default AdminNavbar
