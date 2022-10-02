import React from 'react';
import { Link } from "react-router-dom";
import css from './Home.css';

const Home = () => (
    <section className='home'>
        <Link to='/form'>
            <button >New Entry</button>
        </Link>

        <Link to='/search'>
            <button >Search Entries</button>
        </Link>
    </section>
);

export default Home;