import React from 'react';
import {Component} from 'react'
class Counter extends Component {
    // state={
    //     count:this.props.e.value,
    //     //id:this.props.id
    //    // tags:['tag1', 'tag2', 'tag3'],
    // };
    //    HandleIncrement=(product)=>{
    //     console.log(product);
    //     this.setState({count:this.state.count+1});
    //    }
        
    render() { 
        console.log('properties',this.props);
       return (
        <div>
            <span style={{fontSize:20}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
              onClick={()=>this.props.onIncremet(this.props.e)}
              className="btn btn-secondary btn-sm">increment
            </button>
            <button 
             onClick={ () => this.props.onDelete(this.props.e.id)}
             className="btn btn-danger btn-sm m-2">Delete
             
            </button>
         
        </div>
        );
    }
    formatCount() {
        const {value}=this.props.e;
        return value===0? "zero":value;
    }
    getBadgeClasses(){
        let classes=" m-2 badge badge-";
        classes+=(this.props.e.value==0)?"warning":"primary";
        return classes;
    }
}
 
export default Counter;