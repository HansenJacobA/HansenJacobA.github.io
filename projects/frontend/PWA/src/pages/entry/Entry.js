import React from "react";
import { useLocation } from 'react-router-dom';
import css from './Entry.css';

const Entry = () => {
    const location = useLocation();
    const { entry } = location.state;
    return (
        <section className="entry">
            <label>Topic:</label>
            <p>{entry.topic}</p>
            <label>Created at:</label>
            <p>{entry.createdAt}</p>
            <label>Prior day's work</label>
            <p>{entry.yesterday}</p>
            <label>Current day's work:</label>
            <p>{entry.today}</p>
            <label>Continued work:</label>
            <p>{entry.continued}</p>
            <label>Blockers:</label>
            <p>{entry.blockers}</p>
        </section>
    );
}

export default Entry;
