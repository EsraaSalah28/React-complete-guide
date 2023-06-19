import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component{
  state = {
    persons: [
      {name: 'max', age: 28},
      {name: 'esraa', age: 27},
      {name: 'toto', age: 30},

    ],
    otherState:'yyyy'
  }
  switchNameHandler =()=>{
    //console.log('was clicked');
    //this.state.persons[0].name='yyyyyyyyyyy';
    this.setState({persons:[
      {name: 'maxxx', age: 28},
      {name: 'esrxxaa', age: 27},
      {name: 'totox', age: 30},

    ]})
  
  }
  render(){
  return (
    <div className="App">
      <button onClick={this.switchNameHandler}> switch name </button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler}> his hobbies:reading</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>

    </div>
  );
}
}

export default App;
