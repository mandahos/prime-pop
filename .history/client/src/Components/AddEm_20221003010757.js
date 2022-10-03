import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
 
const AddEmployee = () => {
    const [department, setDepartment] = useState('');
    const [name, setName] = useState('');
    const history = useHistory();
 
    const saveEmployee = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/employees',{
            name: name,
            department: department
        });
        history.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveEmployee }>
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddEmployee;