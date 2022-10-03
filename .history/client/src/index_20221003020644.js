import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Home from './Pages/Home';
import Prime from './Pages/Prime';
import EmployeeList from './Pages/Employees';
import AddEmployee from "./Components/AddEm"
import EditEmployee from "./Components/EditEm"
import Layout from './Pages/Layout';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Routes>
   
  <Route path="/" element={<Layout />}>
          <Route index element={<EmployeeList />} />
          <Route path="prime" element={<Prime />} />


</Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
