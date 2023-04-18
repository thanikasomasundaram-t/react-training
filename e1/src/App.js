import React, { useState } from 'react';
import './App.css';
import Details from './pages/Details';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const[state, setState] = useState({
    destinationCardDetails: [],
    page: 'Home',
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home state={ state } setState={ setState }/> }/>
        <Route path='/details' element={ <Details state={ state } setState={ setState }/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
