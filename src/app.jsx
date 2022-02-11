import React, { Component } from 'react';
import "./app.css";
import Habits from "./components/habits";
import Navbar from './components/navbar';


class App extends Component {
  state={
    habits:[
        { id: 1, name:'Reading', count: 0},
        { id: 2, name:'Running', count: 0},
        { id: 3, name:'Coding', count: 0},
    ],
};
handleIncrement = (habit) => {
  const habits = this.state.habits.map(item=>{
    if(item.id === habit.id){
      return{...habit, count: habit.count + 1};
    }
    return item;
    
  })
  this.setState({ habits: habits});
};

handleDecrement = (habit) => {
  const habits = this.state.habits.map(itme=>{
    if(itme.id === habit.id){
      const count = habit.count - 1;
      return{...habit, count: count < 0 ? 0 : count}
    }
    return itme;
  })
  this.setState({ habits: habits});
};

handelDelete = (habit) => {
  const habits = this.state.habits.filter(item => item.id !==habit.id);
  this.setState({habits});
};

handleAdd = name => {
  const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
  this.setState({habits});
}

handleReset = () => {
  const habits = this.state.habits.map(habit =>{
    if(habit.count !=0){
    return{...habit, count:habit.count = 0}
    }
    return habit;
  });
  this.setState({habits});
}

  render() {
    return (
      <>
        <Navbar 
        totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handelDelete}
        onAdd={this.handleAdd}
        onReset={this.handleResetAll}
    />
      </>
    )
  }

}
export default App;
