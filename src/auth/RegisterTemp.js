import React, {  useRef, useState,useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Modal,Form,Button, Alert} from 'react-bootstrap';
import { createContext } from "react";
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../context/authContext';
// import AuthProvider, { AuthContext } from '../context/authContext';


const Register = () => {

  const [user,setUser]=useState([]);
  const [currentUSer,setCurrentUser]=useState(null);

    const [showform,setshowform]=useState(false);
    const [err,setErr]=useState('')
    // const history=useHistory();
    const open = () =>setshowform(true);
    const closeform = () =>setshowform(false);
    //values
  
   const nameRef=useRef()
   const emailRef=useRef()
   const passRef=useRef()
   const cfpassRef=useRef()
   useEffect( ()=>{
    function  fetchdata(){
      getData();
    }
    fetchdata();
   
  },[]);
  //! retrive 
  const arr=[];
  const getData=async()=>{
    const result=await fetch('http://127.0.0.1:8000/api/userList');
        const res=await result.json();
        setUser(res.email)
       console.log("your name is",res.email);

 }
  
const submitForm=async (e) =>{
    e.preventDefault();

    if(passRef.current.value!==cfpassRef.current.value){
     setErr('Password does not match !');
    }
   const newUser={
    name:nameRef.current.value,
    email:emailRef.current.value,
    password:passRef.current.value

   }
   
      try {
        console.log('tops')
        const result=await  fetch('http://127.0.0.1:8000/api/register',{
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"

          },
           }).then(async function (response) {
          getData();
          console.log('respose is ',response.json())
           
        })
        result=await result.json();
        console.log('user id',result.id);
       
      closeform();
      } 
        catch (error) {
        
          setErr('Registration error ')
          
        }
        console.log('the user is',user);  
       
        
        closeform();


}
return (
    
     <>
  
    <div onClick={open} className="btn btn-secondary mx-2 px">Register</div>
      <Modal centered show={showform} onHide={closeform} >
        <form onSubmit={submitForm} className="">
          <div className=" p-5 registerForm">

         


            <Modal.Header>
                <Modal.Title className="mx-5 px-5">
                    Register
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {err&&<Alert variant='danger'>{err}</Alert>}
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control  type='text' className='inputField bg-secondary ' ref={nameRef}  placeholder='Enter your name '/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control ref={emailRef} type='email' className='inputField bg-secondary' placeholder='Enter your valid email address'/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control ref={passRef} type='password'className='inputField bg-secondary' placeholder='Enter your password '/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Conifrom  password</Form.Label>
                  <Form.Control ref={cfpassRef} type='password'className='inputField bg-secondary' placeholder='Re-Enter your password'/>
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
                <Button type='submit' className="btn btn-success mx-2">Register</Button>
                <Button variant='secondary' type='cancel' onClick={closeform}className="btn btn-danger mx-2">Close</Button>

            </Modal.Footer>

            </div>
        </form>
      </Modal>
     
   
      </>
     
      


  )

    
}

export default Register