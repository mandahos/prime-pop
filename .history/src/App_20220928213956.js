import React from 'react';
import './App.css';
import Prime from './Pages/Prime';
import Table from './Pages/Table';
import Home from './Pages/Home';

import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route excat path="/" component={Home} />
      <Route excat path="/prime" component={Prime} />
      <Route excat path="/table" component={Table} />
    </div>
  );
}

export default App;
