import React from 'react';
import {Link} from 'react-router-dom';

export const Nav = () => {

    return(
        <ul id="nav">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/users" >Users</Link></li>
        </ul>
    )
}