import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import GradeTable from './components/GradeTable';
import Meta from './components/Meta';

const App = () => {
  return(
    <div>
      <Meta />

      <h1>성적표</h1>

      <nav>
        <Link to='/grade_table/1'>1학년</Link>&nbsp;|&nbsp;
        <Link to='/grade_table/2'>2학년</Link>&nbsp;|&nbsp;
        <Link to='/grade_table/3'>3학년</Link>&nbsp;|&nbsp;
        <Link to='/grade_table/4'>4학년</Link>
      </nav>

      <hr />

      <Routes>
        <Route path='/grade_table/:grade' element={<GradeTable/>}/>
      </Routes>
    </div>
  )
}

export default App;
