import React, { Component } from 'react';
import FamousPlace from './FamousPlace';

class Country extends Component {
    constructor(props) {
        super(props);
         this.state={
            country_name:"India"
         }
    }
    handleChange=()=>{
        this.setState({
            country_name:"London"
        })
        console.log("llll");
    }
    render() {
        return (
            <div>
                <h1>Country  Component</h1>
                <button onClick={this.handleChange}>Country</button>
                <FamousPlace cname={this.state.country_name} />
            </div>
        );
    }
}

export default Country;