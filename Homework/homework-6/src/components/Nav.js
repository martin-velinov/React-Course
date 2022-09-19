import React from 'react'
import {Link} from 'react-router-dom'
import"../css/Styles.css"
const Nav = () => {

  
  
  return (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/photos">Photos</Link></li>
        <li><Link to="/comments">Comments</Link></li>
        <li><Link to="/albums">Albums</Link></li>
        <li><Link to="/todos">Todos</Link></li>
        
    </ul>
  )
}

export default Nav