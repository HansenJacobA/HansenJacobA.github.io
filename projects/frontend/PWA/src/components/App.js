import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from '../pages/home/Home';
import Form from '../pages/form/Form';
import Search from '../pages/search/Search';
import Entry from '../pages/entry/Entry';

const App = () => {
  return (
    <BrowserRouter className='app'>
      <Header />
      <Nav />

      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/search' element={<Search />} />
        <Route path='/entry' element={<Entry />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
