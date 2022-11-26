import React, { Component } from 'react';
 const navbar = (props) => {
    return ( 
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#" >
          <b>Cart
            <span className="badge badge-pill badge-secondary m-2">{props.totalCounter}
            </span>
          </b>
        </a>
    </nav>
   );
 }
export default navbar; 