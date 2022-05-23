import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Content from './page/Content';
import Footer from './components/Footer';
import Meta from './components/Meta';
import GlobalStyles from './components/GlobalStyles';


const App = () => {
  return(
    <div>
      <Meta />
      <GlobalStyles />

      <Header />
      
      <Routes>
        <Route path='/' export={true} element={<Content />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
