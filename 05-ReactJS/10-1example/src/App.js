import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ProList from './pages/ProList'
import ProAdd from './pages/ProAdd'
import ProEdit from './pages/ProEdit'

const App = () => {
  return (
    <div>
      <h1>Exam 11</h1>

      <Routes>
        <Route path="/" exapt={true} element={<ProList />} />
        <Route path="/add" element={<ProAdd />} />
        <Route path="/edit/:id" element={<ProEdit />} />
      </Routes>
    </div>
  );
};

export default React.memo(App);