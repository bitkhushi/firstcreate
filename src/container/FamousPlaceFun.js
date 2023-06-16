import React from 'react';

function FamousPlaceFun(props) {
    return (
        <div>
            <h1>FamousPlaceFun Component</h1>
            <span>{props.cname==="India"?"Taj Mahal":""}</span>
            <span>{props.cname==="London"?"LondonBridge":""}</span>


            
        </div>
    );
}

export default FamousPlaceFun;