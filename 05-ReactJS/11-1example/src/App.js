import React from 'react';
import News from './pages/News';
import {Routes, Route} from 'react-router-dom';
import MenuLink from './components/MenuLink';

const App = () => {
  return (
    <div>
      <h1>Exam 12</h1>
      <nav>
        <MenuLink to="/news">News</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/news" element={<News />}/>
      </Routes>
    </div>
  );
};

export default App;