import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {

    return (
        <ul>
            <li><Link to="/">Back to Home</Link></li>
            <li><Link to="/cake">Cake</Link></li>
            <li><Link to="/comments">Comments</Link></li>
        </ul>
    )
}