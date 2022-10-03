import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useResolvedPath } from "react-router-dom";

function Table(){
    const[user, setUser] = useState([]);

    useEffect(() => {
        const getuser = async ()=>
 {
    const res = await fetch("http:http://localhost:3000/users");
    const getdata = await res.json();
    setUser(getdata);
    console.log(getuser);
 }   
    getuser();
},[]);

    return(

        <div className="app-container">
        <h1> USERS </h1>
        <table>
            <thead>
                <tr>
               <th>ID</th>
               <th>First Name</th> 
               <th>Last Name</th>
               <th>Email</th>
               </tr>
            </thead>
            <tbody>
                {user.map((getuser)=>(
                    <tr key={getuser.user_id}>
                    <td>{getuser.user_first_name}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                ))}
                
            </tbody>
        </table>
        </div>

    );
}


export default Table;