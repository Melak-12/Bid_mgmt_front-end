import React, {useRef, useState,useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Modal,Button,Alert } from 'react-bootstrap';
import { AuthContext } from '../../context/authContext';

const Login = () => {
const [showform,setshowform]=useState(false);
const [err,setErr]=useState('');

const {login}=useContext(AuthContext);

const openform=()=>setshowform(true);
const closeform = () =>setshowform(false);


const email=useRef();
const pass=useRef();

const submitForm=async(e)=>{
  e.preventDefault();
  setErr('');
console.log(email.current.value,pass.current.value);
 /* if(email.current.value==''||email.current.value==null){
    return setErr('Please enter your email!')
  }
  else if(pass.current.value==''||pass.current.value==null){
    return setErr('Please enter the valid password!');
  }*/

  
  // const updateBid=(bidId,bidTitle,bidDisc,bidImage,bidDueDate,bidItemStartPrice,itemTitle,itemDsc,itemDuration,itemImage,itemStartPrice)=>{
                        
  {/* <div className="btn btn-outline-success" onClick={()=>{props.updateBid(props.item.id,props.titleRef,props.discRef,props.imageRef,props.dueDateRef,props.itemStartPriceRef,props.item.itemTitle,props.item.itemDsc,props.item.itemDuration,props.item.itemImage,props.item.itemStartPrice)}}>Update</div> */}

 try {
  await login(email.current.value,pass.current.value)
  closeform();
 } catch (error) {
  
  setErr('invalid login');
 
 }
}

  return (
    <>
    <div className="btn btn-outline-secondary mx-2" onClick={openform}>
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