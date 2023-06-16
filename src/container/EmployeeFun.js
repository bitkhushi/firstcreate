import React, { useState } from 'react';

function EmployeeFun(props) {

    const [Name,setName]=useState("Axit");
    const [Age,setAge]=useState(50);

    const HandleAge=()=>{
        setAge(40)
    }
    return (
        <div>
           <h1>Employee Function Based Component</h1> 
           <p>Name:{Name}</p>
           <p>Age:{Age}</p>
           <button onClick={HandleAge}>Change Age</button>
        </div>
    );
}

export default EmployeeFun;