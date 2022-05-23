import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import myschool from './myschool';
import Department from './components/Department';
import Professor from './components/Professor';
import Student from './components/Student';

const App = () => {
  return (
    <div>
      <h1>Exam 02</h1>
      <Link to="/department">[학과목록]</Link>
      <Link to="/professor">[교수목록]</Link>
      <Link to="/student">[학생목록]</Link>

      <hr />

      <Routes>
        <Route path="/department" element={<Department name={myschool.department} />} />
        <Route path="/professor" element={<Professor name={myschool.professor}/>} />
        <Route path="/student" element={<Student name={myschool.student}/>} />
      </Routes>
    </div>
  );
};

export default App;