import React, { Component } from 'react';
import Habit from './habit';
import Input from './input';
import Resetall from './resetall';

class Habits extends Component {
    
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);

    };

    handelDelete = (habit) => {
        this.props.onDelete(habit);

    };

    handleAdd = (name) =>{
        
        this.props.onAdd(name);
    } 
    
    handleRsetAll = (habit) => {
        this.props.onReset(habit);
    }

    render() {
        return (
        <>
            <Input 
            onAdd={this.handleAdd}
            />
            <ul>
            {
                this.props.habits.map(habit=>(
                <Habit 
                key={habit.id} 
                habit={habit} 
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handelDelete}
                />
                ))
            }
            </ul>
            <Resetall
            onReset={this.onResetAll}
            />
        </>
        );
    }
}

export default Habits;