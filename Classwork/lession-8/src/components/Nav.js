import React from 'react'
import {Link} from 'react-router-dom'
import"../css/Nav.css"
const Nav = () => {
  return (
    <ul>
        <li><Link to="/">&#127968;</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <ul>
            <li><Link to="/contact/us">Us</Link></li>
        </ul>
        <li><Link to="/users">Users</Link></li>
    </ul>
  )
}

export default Nav