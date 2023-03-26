import React, {useRef, useState,useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Modal,Button,Alert, Col, FormGroup } from 'react-bootstrap';
import {AuthContext} from '../../context/authContext'


const  AddBid = ({setBid}) => {
 

const [err,setErr]=useState('')
const [showform,setshowform]=useState(false);

const  imageTypes=['image/jpeg' ,'image/png','image/gif','image/jpg']

const openform=()=>setshowform(true);
const closeform = () =>setshowform(false);

const itemTitle=useRef();
const itemDsc=useRef();
const itemDuration=useRef();
const itemImage=useRef();
const itemStartPrice=useRef();


const{currentUSer}=useContext(AuthContext);




const submitForm=(e)=>{
  e.preventDefault();

if(!imageTypes.includes(itemImage.current.files[0].type)){
setErr('not image');
  
}
else {
  const currDate=new Date();
  let DueDate=currDate.setHours(
    currDate.getHours()+itemDuration.current.value
  )
  let newBid={
    email:currentUSer.email,
    title:itemTitle.current.value,
    disc:itemDsc.current.value,
    itemImage:itemImage.current.files[0],
    itemDueDate:DueDate,
    itemStartPrice:itemStartPrice.current.value,
  }
setBid(newBid)

closeform();

}

  
}

  return (
    
    <>
    <div className="d-flex justify-content-center">
      {currentUSer.email==='melakabebeee@gmail.com'?(<div className="btn btn-outline-success mb-5" onClick={openform}>
          + Add Bid
      </div>)
      :(
        <p className="display-9 hello ">Hello  {currentUSer.email}</p>
      
      )}
      
    </div>
   
    <Modal centered show={showform} onHide={closeform}>
      <form className='m-5 borderColor-green' onSubmit={submitForm}>
        <Modal.Header>
          <Modal.Title>
            Create Bid
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {err && <Alert variant='danger'>{err}</Alert>}
          <Col>
            <Col>
                <FormGroup>
                    <Form.Label>item title</Form.Label>
                    <Form.Control type='text' placeholder='Enter the item title ' ref={itemTitle}/>
                </FormGroup>
            </Col>
           
            <Col>
                <FormGroup>
                    <Form.Label>item Description</Form.Label>
                    <Form.Control type='text' placeholder='Write the description of the item ' ref={itemDsc}/>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Form.Label>Start price</Form.Label>
                    <Form.Control type='number' placeholder='start price ' ref={itemStartPrice}/>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Form.Label>Item duration in hr</Form.Label>
                    <Form.Control type='number' placeholder='duration' ref={itemDuration}/>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Form.Label>Seller</Form.Label>
                    <Form.Control type='text'
                    value={currentUSer.email} 
                    readOnly/>

                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Form.Label>Item image</Form.Label>
                    <Form.Control
                   // Label='select the item image'
                   //custum(false)
                    required
                    type='file'ref={itemImage}/>
                </FormGroup>
            </Col>
          </Col>
        </Modal.Body>

        <Modal.Footer>
          <Button type='submit' variant='success'>submit</Button>
        </Modal.Footer>
          
       
      
      </form>
    </Modal>
    
    </>
    

   
     
    
    
   
  )
}

export default AddBid 