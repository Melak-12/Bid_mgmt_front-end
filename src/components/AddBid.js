import React, {useRef, useState,useContext,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Modal,Button,Alert, Col, FormGroup } from 'react-bootstrap';
import AuctionCard from './AuctioinCard';
import { AuthContext } from '../context/authContext';
import { ButtonBase, Typography } from '@mui/material';

const  AddBid = () => {
  const {user,setUser}=useContext(AuthContext);
 

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
useEffect( ()=>{
  function  fetchdata(){
    getData();
  }
  fetchdata();
 
},[]);
const AddBid= async(formdata)=>{
  const add=await  fetch('http://127.0.0.1:8000/api/additem',{
    method: 'POST',
    body: formdata
    
   });
   const result=await add.json();
   console.warn("this is added",result);
   getData();
}
const getData=async()=>{
  const result=await fetch('http://127.0.0.1:8000/api/list');
      const res=await result.json();
      // const da=await data.json();
      console.log('data', res)
      // setData(res);
      // console.log('data 2',data)
}

const submitForm=(e)=>{
  e.preventDefault();

if(!imageTypes.includes(itemImage.current.files[0].type)){
setErr('not image');
  console.log('not image type')
}
else {
  const currDate=new Date();
  let DueDate=currDate.setHours(
    currDate.getHours()+itemDuration.current.value
  )
 
  const formdata=new FormData();
  formdata.append('itemTitle',itemTitle.current.value)
  formdata.append('itemDisc',itemDsc.current.value)
  formdata.append('itemImage',itemImage.current.files[0])
  formdata.append('itemDuration',DueDate)
  formdata.append('itemStartPrice',itemStartPrice.current.value)
  formdata.append('currentWinner',"o")

  console.log('form data elements are',formdata);

  AddBid(formdata);

closeform();
//?install axios

}

  
}

  return (
    
    <>
    <div className="d-flex justify-content-center">
           <div className="btn btn-success mb-5" onClick={openform}>
          + Add Bid
      </div>
    
        {/* <span className="disspanlay-9 hello ">Hello  {currentUSer.email}  </span> */}
    
    </div>
      
      {/* <Button fullwidth variant="primary" sx={{padding:100}}>+ Add Bid</Button> */}
    
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
                    // value=
                    // {currentUSer.email} 
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