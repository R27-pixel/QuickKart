import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
    return (
        <div className="navbar">
           <h2>QuickKart</h2>
            <img src={navProfile} alt="" className='nav-profile' />
        </div>
    )
}

export default Navbar
