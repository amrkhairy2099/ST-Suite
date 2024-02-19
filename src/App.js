import React from 'react'
import Navbar from './components/navbar/Navbar';
import Filter from './components/Filter';
import Pages from './components/Pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
   return (
      <>
         <div className="App">
            <Navbar/>
            <Pages/>   
            <Filter/>
         </div>
      </>
   );
}

export default App;
