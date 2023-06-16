import React, { useState } from 'react';
import FamousPlaceFun from './FamousPlaceFun';

function CountryFun(props) {

    const[countryName,setCountryName]=useState("India")

    const handleChange=()=>{
        setCountryName("London")
    }


    return (
        <div>
            <h1>CountryFun Component</h1>
            <button onClick={handleChange}>Country</button>
            <FamousPlaceFun cname={countryName} />
           
            
        </div>
    );
}

export default CountryFun;