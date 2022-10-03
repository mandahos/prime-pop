import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import EmployeeList from "./Pages/Employees";
import AddEmployee from "./Components/AddEm";
import EditEmployee from "./Components/EditEm";




function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
            <Route exact path="/">
              <EmployeeList />
            </Route>
            <Route path="/add">
              <AddEmployee />
            </Route>
            <Route path="/edit/:id">
              <EditEmployee />
            </Route>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
