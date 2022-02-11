import React, { Component } from 'react';
import './resetall.css'

class Resetall extends Component {
    handleResetAll = () =>{
        this.props.onReset(this.props.habit)
    }

    render() {
        return (
            <form>
                <button className="resetBtn">Reset All</button>
            </form>
        );
    }   
}

export default Resetall;