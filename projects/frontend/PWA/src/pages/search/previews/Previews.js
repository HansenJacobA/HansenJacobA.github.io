import React from "react";
import { Link } from "react-router-dom";
import css from './Previews.css';

const Previews = ({ entry }) => (
    <Link to='/entry' state={{ entry }} className='preview-link'>
        <li className="previews">
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
        </li>
    </Link>
);

export default Previews;