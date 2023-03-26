import React ,{useRef, useState,useContext} from 'react'
 import 'react-bootstrap'
 import 'bootstrap/dist/css/bootstrap.css'
import  {AuthContext}  from '../../context/authContext';
import { useFirestore } from '../../hooks/useFirestore';
import AddBid from './AddBid';
import ProgressBar from './ProgressBar';
import { doc } from 'firebase/firestore';
import AuctionCard from './AuctionCard';
import { render } from '@testing-library/react';
import { Alert } from 'react-bootstrap';

const BidBody = () => {
 
  const {currentUSer,globalgMsg}=useContext(AuthContext);
  const [bid,setBid]=useState(null)
  const {docs}=useFirestore('bids');
  return (
   <div className="py-1">
    <div className="container">

    {
    globalgMsg&&<Alert className='text-light' variant='danger' style={{backgroundColor:'rgb(86, 61, 63)'}}>{globalgMsg}</Alert>}
    {
    bid&&
   <ProgressBar 
        bid={bid} 
        setBid={setBid}
   />}

   {currentUSer&& 
      <AddBid 
    setBid={setBid}
   />
   }
   
   {docs&&(
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3  ">
     {
        docs.map((doc)=>{
          
          return <AuctionCard item={doc} key={doc.id}/>

        })

        
      }
    </div>
   )}
   
    </div>
   </div>


 
  )
}

export default BidBody