import React from 'react';
import './App.css';
import Prime from './Prime';
import Table from './Table';
import { Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Prime />
      <Table />
    </div>
  );
}

export default App;
