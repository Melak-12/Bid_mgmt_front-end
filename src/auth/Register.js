import React, {  useRef, useState,useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import LockPersonIcon from '@mui/icons-material/LockPerson';

import { Modal,Form, Alert} from 'react-bootstrap';
import { createContext } from "react";
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
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
  //  const cfpassRef=useRef()
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

    // if(passRef.current.value!==cfpassRef.current.value){
    //  setErr('Password does not match !');
    // }
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
           })
        //    .then(async function (response) {
        //   // getData();
        //   console.log('respose is ',response.json())
           
        // })
       const  re=await result.json();
        console.log('user id',re.id);
       
        if (re['error']) {
          console.log("no success")
          setErr (re['error'])
        }else{
          console.log("sucesss")
          closeform();
          setUser(emailRef.current.value)
          // getData();
        }
      } 
        catch (error) {
        
          setErr('Registration error ')
         
        }
        console.log('the user is',user);  

}
return (
    
     <>

    <div onClick={open} style={{color:'white'}} className="btn mx-2 px">Register</div>
      <Modal  centered show={showform} onHide={closeform}>
  <Box sx={{m:6}}>
      <Container sx={{pt:3}}>
        <Form onSubmit={submitForm}>
          <Typography sx={{p:3,m:3}}>
            <LockPersonIcon color='primary'/>
          &nbsp;&nbsp; Register 
          </Typography>
          <Box mb={2} mt={7}>

          {err&&<Alert variant='danger'>{err}</Alert>}
            
            <TextField  fullWidth label="Name"autoFocus autoComplete='your name'sx={{mb:4}} inputRef={nameRef} type="text"/>
            <TextField fullWidth label="Email"autoComplete='your password'sx={{mb:4}}inputRef={emailRef} type="email"/>
            <TextField fullWidth label="Password"autoComplete='your Cpassword'sx={{mb:4}}inputRef={passRef} type="password"/>
            {/* <TextField fullWidth label="Conifrm Password"autoComplete='your password'sx={{mb:4}}inputRef={cfpassRef} type="password"/> */}
            <Button fullWidth color='primary' variant='contained' type='submit'>Register</Button>
          </Box>
      </Form>
    </Container>
  </Box>
      </Modal>
     
   
      </>
     
      


  )

    
}

export default Register