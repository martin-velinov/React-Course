import React from 'react'
import {Link} from 'react-router-dom'
import"../css/Nav.css"
const Nav = () => {
  return (
    <ul>
        <li><Link to="/">&#127968;</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        
        
    </ul>
  )
}

export default Nav