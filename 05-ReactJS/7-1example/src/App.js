import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import PrintStar from './PrintStar';
import Calc from './Calc';

const App = () => {
  return (
    <div>
      <h1>연습문제 07</h1>

      <nav>
        <Link to="/printstar">PrintStar</Link>&nbsp; | &nbsp;
        <Link to="/calc">Calc</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/printstar" element={<PrintStar />} />
        <Route path="/calc" element={<Calc />} />
      </Routes>
    </div>
  );
};

export default App;