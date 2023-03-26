import React, {useRef, useState,useContext} from 'react'
// import {useForm} from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Modal,Alert } from 'react-bootstrap';
import { AuthContext } from '../context/authContext';
import { Box } from '@mui/system';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { Button, Container, TextField, Typography } from '@mui/material';

const Login = () => {
  // const {login,handleSubmit}=useForm()
  const [checker,setChecker]=useState([]);
  const {user,setUser}=useContext(AuthContext)
  const [showform,setshowform]=useState(false);
  const [currentUser,setCurrentUser]=useState(null)
  const [err,setErr]=useState('');

  const openform=()=>setshowform(true);
  const closeform = () =>setshowform(false);

  const email=useRef();
  const pass=useRef();
 
// const getData=async()=>{
//   const result=await fetch('http://127.0.0.1:8000/api/userList');
//       const res=await result.json();
         
//            setChecker(res)
//          let i=0;
//             let yo=false;
//            for(i=0;i<res.length;i++){

//             if(res[i].email==email.current.value){
//               yo=true;
//               setCurrentUser(email.current.value);
//               setUser(res[i].email)
//               closeform();
//             }
//           }
//            if(yo==false){
//             setErr("Invalid Email or Password  !")  
//             }
//           console.log('bider',res[0].name)
//      }
   // TODO here
  console.log(checker,'checker')
  const submitForm=async(e)=>{
    e.preventDefault();

    const newUser={
    email:email.current.value,
    password:pass.current.value
   }
   console.log("the data is",newUser)
   try{
        console.log('tops')
        const result=await  fetch('http://127.0.0.1:8000/api/login',{
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
           });
       const res=await result.json();
       
if (res['error']) {
  setErr (res['error'])
  
}else if (res['sucess']){
  setUser(email.current.value)
  closeform();
  // getData();
}
          }
catch (error) {
        setErr ('some thing goes wrong!')

            console.log(error,"error")


          }
}

  return (
    <>
    <div style={
      {
       color: 'black'
      }
     }
     className="btn"
      onClick={openform}>Login
      </div>
    <Modal centered show={showform} onHide={closeform} >
    <Container >
    <Form className='m-5 borderColor-green' onSubmit={submitForm}>

      <Typography sx={{p:3,m:3}} component={'div'}>
        <LockPersonIcon color='primary'/>
       &nbsp;&nbsp; LOGIN HERE
      </Typography>
      <Box mb={7} mt={7}>

      {err && <Alert variant='danger'>{err}</Alert>}
        
        <TextField fullWidth id='1'   label="Email"autoFocus autoComplete='your email'sx={{mb:4}} inputRef={email} type="email"/>
        <TextField fullWidth id='2' label="password"autoComplete='your password'sx={{mb:4}}inputRef={pass} type="password"/>
        <Button fullWidth  color='primary' variant='contained' type='submit'>Login</Button>
      </Box>
     </Form>
    </Container>
    
    </Modal>
  </>
  )
}

export default Login
