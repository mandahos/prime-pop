import React from 'react';
import './App.css';
import Prime from './Pages/Prime';
import Table from './Table';
import { Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route excat path="/prime" component={Prime} />
      <Route excat path="/table" component={Table} />
    </div>
  );
}

export default App;
