import React, { Component } from 'react';

class FamousPlace extends Component {
    render() {
        return (
            <div>
                <h1>FamousPlace Component</h1>
            <span>{this.props.cname==="India"? "Taj Mahal" : ""}</span>
            <span>{this.props.cname==="London"? "LondonBridge" : ""}</span>
            </div>
        );
    }
}

export default FamousPlace;