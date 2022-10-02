import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import css from './Form.css';

const Form = () => {

  const [topic, setTopic] = useState('');
  const [yesterday, setYesterday] = useState('');
  const [today, setToday] = useState('');
  const [continued, setContinued] = useState('');
  const [blockers, setBlockers] = useState('');
  const [allTopics, setAllTopics] = useState([]);

  const getItem = (key) => JSON.parse(localStorage.getItem(key));
  const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  const ALL_TOPICS = 'allTopics';
  const ALL_ENTRIES = 'allEntries';

  useEffect(() => {
    const localTopics = getItem(ALL_TOPICS);
    if (localTopics) {
      setAllTopics(localTopics);
    } else {
      setItem(ALL_TOPICS, allTopics);
    }
  }, [false]);

  const sendSubmits = async () => {
    // Handle new topic by submitting new topic
    if (allTopics.find(({ name }) => name === topic) == undefined) {
      const newTopic = {
        id: nanoid(),
        createdAt: new Date().toLocaleString(),
        name: topic,
        complete: false,
        completedAt: null
      };
      const newAllTopics = [...allTopics, newTopic];
      setItem(ALL_TOPICS, newAllTopics);
    };

    // Submit new entry
    const newEntry = {
      id: nanoid(),
      createdAt: new Date().toLocaleString(),
      topic,
      yesterday,
      today,
      continued,
      blockers
    };

    const localEntries = getItem(ALL_ENTRIES);

    if (localEntries) {
      setItem(ALL_ENTRIES, [...localEntries, newEntry]);
    } else {
      setItem(ALL_ENTRIES, [newEntry]);
    }
  };


  return (
    <section className='form'>
      <form>
        <label>Topic</label>
        <input type="text" onChange={e => setTopic(e.target.value)} list="topics" />

        <datalist id="topics">
          {allTopics.map(({ name, id }) => <option value={name || 'No Name'} key={id} />)};
        </datalist>

        <label>What was done yesterday?</label>
        <textarea rows="8" cols="50" onChange={e => setYesterday(e.target.value)}></textarea>

        <label>What was done today?</label>
        <textarea rows="8" cols="50" onChange={e => setToday(e.target.value)}></textarea>

        <label>What needs continued work?</label>
        <textarea rows="8" cols="50" onChange={e => setContinued(e.target.value)}></textarea>

        <label>Any blockers?</label>
        <textarea rows="8" cols="50" onChange={e => setBlockers(e.target.value)}></textarea>

        <Link to='/' className='form-button'>
          <button onClick={sendSubmits}>Submit</button>
        </Link>

      </form>
    </section>
  );
};

export default Form;
