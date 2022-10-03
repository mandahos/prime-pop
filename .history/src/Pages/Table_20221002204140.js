import React from "react";

function Table(){
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
        </table>
        </div>

    );
}


export default Table;