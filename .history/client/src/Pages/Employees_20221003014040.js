import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const EmployeeList = () => {
    const [employees, setEmployee] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async () => {
        const response = await axios.get('http:localhost:5000/employees');
        setEmployee(response.data);
    }

    return (
        <div>
            <Link to="/add" className="button is-primary mt-3">Add New</Link>
            <table className="table is-dotted is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employees, index) => (
                        <tr key={employees.id}>
                            <td>{index + 1}</td>
                            <td>{employees.name}</td>
                            <td>{employees.department}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList;