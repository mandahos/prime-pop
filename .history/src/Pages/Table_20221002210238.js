import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getSearchParamsForLocation } from "react-router-dom/dist/dom";


function Table(){
    const[user, setUser] = useState([]);

    useEffect(() => {
        const getuser = async ()=>
 {
    const re= fetch();
 }    })

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
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        </div>

    );
}


export default Table;