import React from "react";

function Table(){
    return(

        <div className="app-container">
        <h1> USERS </h1>
        <table>
            <thead>
               <tr>ID</tr>
               <tr>First Name</tr> 
               <tr>Last Name</tr>
               <tr>Email</tr>
            </thead>
        </table>
        </div>

    );
}


export default Table;