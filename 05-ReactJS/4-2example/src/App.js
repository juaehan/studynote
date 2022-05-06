import React from 'react';
import { Link, Routes, Route } from "react-router-dom";

import Department from './components/Department';
import Professor from './components/Professor';
import Student from './components/Student';

import data from './myschool';


const App = () => {
  return(
    <div>
      <h1>Exam04-2</h1>

      <nav>
        <Link to="/department">[학과목록]</Link>
        <Link to="/professor">[교수목록]</Link>
        <Link to="/student">[학생목록]</Link>
      </nav>

      <hr/>

      <Routes>
        <Route path="/department" element={<Department name={data.department}/>} />
        <Route path="/professor" element={<Professor name={data.professor}/>} />
        <Route path="/student" element={<Student name={data.student}/>} />
      </Routes>

      
    </div>
  );
}
export default App;
