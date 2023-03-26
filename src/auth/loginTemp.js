import React, {useRef, useState,useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Modal,Button,Alert } from 'react-bootstrap';
import { AuthContext } from '../context/authContext';
import { Box } from '@mui/system';

const Login = () => {
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
    <div className="btn btn-secondary" onClick={openform}>
        Login
    </div>
    <Modal centered show={showform} onHide={closeform}>
    
      <Form className='m-5 borderColor-green' onSubmit={submitForm}>

        <Modal.Header>
          <Modal.Title>
            Login
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {err && <Alert variant='danger'>{err}</Alert>}
          
          <Form.Group>
            <Form.Label> Email</Form.Label>
            <Form.Control type='email' ref={email}/>
          </Form.Group>
          <Form.Group>
          <Form.Label>Password</Form.Label>
            <Form.Control type='password' ref={pass}/>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button type='submit' variant='success'>Login</Button>
        </Modal.Footer>
      </Form>
  
    </Modal>
  </>
  )
}

export default Login
