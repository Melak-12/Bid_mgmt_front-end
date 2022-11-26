import React, { Component } from 'react';
import Counter from './counter'
class Counters  extends Component {
        render() { 
          return (
            <div>
                <button onClick={this.props.onReset}
                className="btn btn-primary btn-lg m-2">Reset
                </button>
                {this.props.counters.map(e =>(
                <Counter
                    key={e.id} 
                    onDelete={this.props.onDelete}
                    onIncremet={this.props.onIncremet}
                    e={e}
                />))}
            </div>);
        }
}
 export default Counters; 