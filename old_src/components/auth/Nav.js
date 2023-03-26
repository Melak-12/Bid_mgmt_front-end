import React,{useState} from 'react'
import logo from '../../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login'
import Register from './Register'

// import { MDBIcon } from 'mdb-react-ui-kit';
import * as Icon from 'react-bootstrap-icons';
import {AuthContext} from '../../context/authContext'
import { useContext } from 'react';



const Nav = () => {
  const [showUSER,setShowUSER]=useState(false);
  const showUser=()=>{
  setShowUSER(true)
  }
  const offUSER=()=>{
    setShowUSER(false)
  }
    const {currentUSer,logout}=useContext(AuthContext)
  return (
    <>
    <nav className="nav  navbar sticky-top navbar-light mb-5 fixed-top">
      <div className="container-fluid text-light">
           <div className="navbar-brand">
                  <a href="https://www.melak.tk/"><img  src={logo} alt="this is logo" width={50} height={50} /></a>
           </div>
          
           <h2 size="40">WELCOME TO BID MANAGMENT SYSTEM</h2>
           <div className="d-flex">
            
                <div className="col">
                    
                  {currentUSer?(
                  <>
                      <div className="btn btn-outline-success mx-2  " >
                        <Icon.Person color='yellow' size='20' onClick={showUser} onDoubleClick={offUSER}/>
                       <div>{showUSER?currentUSer.email:''}</div>
                      </div>
                      <div className="btn btn-outline-danger mx-2 "
                      onClick={()=>logout()}>
                      
                      log out
                      </div>
                      
                    </>

                  )
                  :(
                      <>
                      <Login/>
                      <Register/>
                     
                      </>

                  )}
                </div>
           </div>
    </div>
    <div className=" sidenavbar">
            hellokfjdsf
    </div> 
</nav>
<div className=" sidenavbar">
   <ul>
    <li>home</li>
    <li>my bid</li>
    <li>about us</li>
   </ul>
</div>
<>
                      <Login/>
                      <Register/>
                     
                      </> 
</>
  )
}

export default Nav