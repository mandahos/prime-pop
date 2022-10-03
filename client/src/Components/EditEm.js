/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useHistory } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
 
const EditEmployee = () => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const history = useHistory();
    const { id } = useParams();
 
    const updateEmployee= async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/employees/${id}`,{
            name: name,
            department: department
        });
        history.push("/");
    }
 
    useEffect(() => {
        getEmployeeById();
    }, []);
 
    const getEmployeeById = async () => {
        const response = await axios.get(`http://localhost:5000/employees/${id}`);
        setName(response.data.title);
        setDepartment(response.data.price);
    }
 
    return (
        <div>
            <form onSubmit={ updateEmployee }>
                <div className="field">
                    <label className="label">Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Department</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Department"
                        value={ department }
                        onChange={ (e) => setDepartment(e.target.value) }
                    />
                </div>
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditEmployee;