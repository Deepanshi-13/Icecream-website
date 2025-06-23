import React from 'react'
import "../AdminNavbar/AdminNavbar.css"
import icecream from '../../../assets/ice-cream.png';


const AdminNavbar = () => {
    return (
        <>
            <nav>
                <div className="navbar-left">
                    <img src={icecream} alt="ice-cream" />
                    <div className="navbar-logo">ScoopieDoo</div>
                </div>
            </nav>
        </>
    )
}

export default AdminNavbar
