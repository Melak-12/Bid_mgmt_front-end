import React, { useContext, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Modal,Form,Button, Alert} from 'react-bootstrap';
import { AuthContext } from '../../context/authContext';
const Register = () => {
    const [showform,setshowform]=useState(false);
    const [err,setErr]=useState('')

    const open = () =>setshowform(true);
    const closeform = () =>setshowform(false);
    //values
  
  const nameRef=useRef()
   const emailRef=useRef()
   const passRef=useRef()
   const cfpassRef=useRef()

   const {register}=useContext(AuthContext)

    const submitForm=async (e) =>{
    e.preventDefault();

    if(passRef.current.value!==cfpassRef.current.value){
     setErr('Password does not match !');
    }
   
try {
  await register(emailRef.current.value,passRef.current.value)
 
   closeform();
} 
catch (error) {
 // console.log(error);
  setErr('Registration error ')
  
}
    }
  return (
     <>
    
      <div onClick={open} className="btn btn-outline-secondary mx-2 ">Register  </div>
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