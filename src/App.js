import React from 'react';
import './App.css';
import Courses from '../src/components/Courses/Course'
import Header from '../src/components/Header/Header'

function App() {
  return (
    <div className="back-ground">
      <Header></Header>
      <Courses></Courses>
    </div>
  );
}

export default App;
