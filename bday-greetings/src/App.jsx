import React, { useState } from 'react';
import BirthdayCards  from '../src/components/BirthdayCards.jsx';
import Greetings from '../src/components/Greetings.jsx';
import Memories from '../src/components/Memories.jsx';
import Footer from '../src/components/Footer.jsx';
import Navigation from '../src/components/Navigation.jsx';
import Hero from '../src/components/Hero.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('greetings');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <Navigation  currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Hero currentPage={currentPage} />
      {currentPage === 'greetings' && (
        <Greetings />
      )}
      {currentPage === 'cards' && (
        <BirthdayCards />
      )}
      {currentPage === 'memories' && (
        <Memories />
      )}
      <Footer /> 
    </div>
  )
}

export default App