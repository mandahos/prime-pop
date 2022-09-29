import React from 'react';
import './App.css';
import Prime from './Prime';
import Table from './Table';
import { Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route to="prime" component={Prime} />
      <Route to="table" component={Table} />
    </div>
  );
}

export default App;
