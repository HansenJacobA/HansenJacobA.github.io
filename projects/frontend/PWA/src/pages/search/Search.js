import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import css from './Search.css';
import Previews from './previews/Previews';

const Search = () => {

    const [selectedTopic, setSelectedTopic] = useState('');
    const [entries, setEntries] = useState([]);
    const [allTopics, setAllTopics] = useState([]);

    const ALL_TOPICS = 'allTopics';
    const ALL_ENTRIES = 'allEntries';

    useEffect(() => {
        const localTopics = getItem(ALL_TOPICS);
        setAllTopics(localTopics || allTopics);
    }, [false]);

    const getEntries = async (e) => {
        e.preventDefault();
        if (allTopics.find(({ name }) => name === selectedTopic) !== undefined) {
            const localEntries = getItem(ALL_ENTRIES);
            const topicEntries = localEntries.filter(entry => entry.topic == selectedTopic);
            setEntries(topicEntries);
        }
    };

    const getItem = (key) => JSON.parse(localStorage.getItem(key));

    const clearLocalStorage = (e) => localStorage.clear();

    return (
        <section className='search'>

            <h1>Browse entries by topic.</h1>

            <form>
                <input type="text" onChange={e => setSelectedTopic(e.target.value)} list="topics" />
                <datalist id="topics">
                    {allTopics.map(({ name, id }) => <option value={name || 'No Name'} key={id} />)};
                </datalist>

                <button onClick={getEntries}>Search</button>
            </form>

            <ul className='entries'>
                {entries.length ?
                    entries.map(entry => <Previews entry={entry} key={entry.id} />)
                    :
                    <span>No previews for this topic.</span>}
            </ul>

            <Link to='/' className='form-button'>
                <button onClick={clearLocalStorage}>Clear Storage</button>
            </Link>
        </section>
    );
};

export default Search;