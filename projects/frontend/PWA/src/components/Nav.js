import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => (
    <nav>
        <Link to='/form' className='nav-link'>New Entry</Link>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/search' className='nav-link'>Search</Link>
    </nav>
);

export default Nav;