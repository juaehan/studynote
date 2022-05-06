import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Visual from './components/Visual';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Visual />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
