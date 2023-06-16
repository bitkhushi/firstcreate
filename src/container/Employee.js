import React, { Component } from 'react';

class Employee extends Component {

    constructor(props) {
        super(props);
         this.state={
            id:101,
            Name:"Amit",
            Age:50
         }
    }
    handleage=()=>{
       this.setState({
        Age:40
       })
    }
    
    render() {
        return (
            <div>
                <h1>Employee class based Component</h1>
                <p>Name:{this.state.Name}</p>
                <p>Age:{this.state.Age}</p>
                <button onClick={this.handleage}>Change Age</button>
            </div>
        );
    }
}

export default Employee;