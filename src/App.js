import React, {Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';


class App extends Component {
  state = {
    counters:[
        {id:1,value:5},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0},

            ]
  };
        handleIncrement=e=>{
          console.log('encr',e);
          const newCounters=[...this.state.counters];
          const index=newCounters.indexOf(e);
        // newCounters[index]={...e}
          newCounters[index].value++;
        this.setState({newCounters})
        }
        handleDelete=counterId=>{
          const newCounters=this.state.counters.filter(e=>e.id!==counterId);
          this.setState({counters:newCounters});
        }
        handleReste=()=>{
            const newCounter=this.state.counters.map(e=>{
                e.value=0;
                return e;
            })
            this.setState({newCounter});
        }
  render(){
      return (
      <React.Fragment>
          <NavBar totalCounter={this.state.counters.filter(e=>e.value>0).length}/>
          <main className="container">
            <Counters
            onDelete={this.handleDelete}
            onReset={this.handleReste}
            onIncremet={this.handleIncrement}
            counters={this.state.counters}
            />
          </main>

      </React.Fragment>

        
        
      );
    }
}

export default App;
