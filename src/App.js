import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component{
  state = {
    counters: [
      { id:1 , value:4 },
      { id:2 , value:0 },
      { id:3 , value:0 },
      { id:4 , value:0 }
    ]
  };

  handleDelete = (counterId) => {
    const counters =  this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters =  this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  }

  handleIncrement = counter => {

    //create a refrence to the original state object of 'counter' array
    const counters = [...this.state.counters];

    //find the index from the counter we recieved from the event.
    const index = counters.indexOf(counter); 
    
    //clone only the object we need to update.
    //So the counter object we get from event is assigned to 
    //the index where changes need to be done 
    counters[index] = {...counter};

    counters[index].value++;

    //Pass the whole array to setState, it will figure out
    //which array object needs to be updated.
    this.setState({ counters });
  };

  render() {
    return(
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}



export default App;
