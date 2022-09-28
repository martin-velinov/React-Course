import React from 'react';
import {Link} from 'react-router-dom';
import "./../css/Nav.css"
import operations from './auth/duck/operations';
import { useDispatch } from 'react-redux';
export const Nav = () => {
    const dispatch = useDispatch();
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/cities">Cities</Link></li>
            <li className='log-out'> <button onClick={()=>dispatch(operations.logOut())}>Log Out</button></li>
        </ul>
    )
}