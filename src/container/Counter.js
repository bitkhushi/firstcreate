import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

    }

    handleplus = () => {
        if(this.state.count <  5){
            this.setState({
                count:this.state.count+1
            })
            
        }
    
        
    }
    handleminus = () => {
        if(this.state.count > 0){
            this.setState({
                count:this.state.count-1
            })
            console.log("minus");
        }
        
    }
    render() {
        return (
            <div>
                <h1>COUNTER</h1>
                <h2>Class Based Counter</h2>
                <button disabled={this.state.count < 5 ? false:true} onClick={this.handleplus}>+</button>
                <p>ANSWER:{this.state.count}</p>
                <button disabled={this.state.count === 0 ? true:false} onClick={this.handleminus}>-</button>
            </div>
        );
    }
}

export default Counter;