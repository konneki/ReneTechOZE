import React from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Carousel />
    </div>
  );
};

export default App;
