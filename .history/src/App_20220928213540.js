import React from 'react';
import './App.css';
import Prime from './Prime';
import Table from './Table';
import { Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route excate path='/prime" component={Prime} />
      <Route excate path="/table" component={Table} />
    </div>
  );
}

export default App;
