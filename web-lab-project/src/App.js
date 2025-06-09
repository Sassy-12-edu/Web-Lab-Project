import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/hero/hero';
import Home from './pages/home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="photography-app">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

