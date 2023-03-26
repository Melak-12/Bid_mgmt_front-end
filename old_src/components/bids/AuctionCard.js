
import React, { useState,useContext, useRef } from 'react';
import Countdown from 'react-countdown';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { AuthContext } from '../../context/authContext';
const renderer = ({ days, hours, minutes, seconds, completed,props }) => {
  
  if (completed) {
    return null;
  }
  const handle=()=>{
    console.log('prev',props.inputD)
    props.setIN(prev=>!prev)

  }
  const update=()=>{
    props.setForm(prev=>!prev)
  }

  return (
    <div className="col ">
      <div className="card">
        <div
          style={{
            padding:'10rem',
            height: '250px',
            backgroundImage: `url(${props.item.imgUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width:'auto'
          }}
          className="p-5"
        />
        <div className="card-body">
          <p className="lead display-6 text-center"><b>{props.item.title}</b></p>
          <div className="d-flex jsutify-content-between align-item-center">
            <h6>
              {days * 24 + hours} hr: {minutes} min: {seconds} sec
            </h6>
          </div>
          <p className="decription">{props.item.disc}</p>
          <div className="d-flex justify-content-between align-item-right">
            <div>
              { 
              props.owner?(
                // admin
                props.owner.email==='melakabebeee@gmail.com'?(
                 <div>
                    <div className="btn btn-danger m-4 "
                      onClick={() =>props.endAuction(props.item.id)}
                      style={{marginRight:'5rem'}}>
                      Remove Bid
                    </div>
                    <div className="btn btn-outline-secondary "
                      onClick={update}>
                      Update Bid
                    </div>
                    <div 
                      style={{display:props.formD?"":"none"}}
                      className="">
                      
                       <label>
                         Title
                        <input  className="inputPrice m-3" type="text" name="" id="" placeholder="Enter new title " ref={props.titleRef}/>
                       </label>
                       <label>
                        Description
                        <input  className="inputPrice m-3" type="text" name="" id="" placeholder="Enter new description " ref={props.discRef}/>
                       </label>
                       <label>
                       Image <br />
                        <input   className=" m-3" type="file" name="" id="" ref={props.imageRef}/>
                       </label>
                       <label>
                       Due date
                        <input  className="inputPrice m-3" type="number" name="" id=""  placeholder="Enter new Due date  " ref={props.dueDateRef}/>
                       </label>
                       <label>
                        Price 
                        <input  className="inputPrice m-3" type="number" name="" id=""  placeholder="Enter new Price  " ref={props.itemStartPriceRef}/>

                       </label>

                        <div>
                        <div className="btn btn-outline-danger" onClick={update} style={{marginRight:'8rem'}}>Cancel</div>
                        <div className="btn btn-outline-success" onClick={()=>{props.updateBid(props.item.id,props.titleRef,props.discRef,props.imageRef,props.dueDateRef,props.itemStartPriceRef)}}>Update </div>

                        </div>
                      
                    </div>
                  </div>
                 
                )
                :(

                props.owner.email===props.item.currWinner?(
                  <b className="display-8 text-success">Currently You are the winner !</b>
                  ):(
                    <div className="btn btn-outline-success"
                  onClick={handle} >
                   Bid
                 </div>
                  )
               
                )

              ):(
               <>
               {
                // console.log('reached here') 
                }
                  <div className="btn btn-outline-success"
                  onClick={()=>props.bidAuction(props.item.id,props.item.itemStartPrice)}
                  >
                  Bid
                </div>
              
               </>
              
              )
            }
            </div>
            <p className="display-7 text-light m-0 p-0"><span className="text-warning">$</span>{props.item.itemStartPrice}</p>
          </div >
           
         <div>

            <div style={{display:props.inputD?"":"none"}}>
              <input 
              className="inputPrice"
              style={{ marginTop:"5px",marginBottom:"30px",padding:"10px",width:"100%"}}
              type="number"
                name=""
                id="" 
                min={1}
                ref={props.inputRef}
                placeholder="Enter your new price !"
                />
              <div className="btn btn-danger" style={{marginRight:'10rem'}} onClick={handle}>Cancel</div>
              <div className="btn btn-primary"  onClick={()=>{props.bidAuction(props.item.id,props.item.itemStartPrice,props.inputRef)}}>Bid now</div>
          </div>
         </div>
           
           
          
        </div>
      </div>
    </div>
  );
};

 const AuctionCard = ({ item }) => { 
const [inputDisplay,setInputDisplay]=useState(false);
const [formDisplay,setFormDsiplay]=useState(false)

const inputRef=useRef();

const titleRef=useRef();
const discRef=useRef();
const imageRef=useRef();
const dueDateRef=useRef();
const itemStartPriceRef=useRef();
 
 const expiredDate = item.itemDueDate;
 const {currentUSer,bidAuction,updateBid,endAuction}=useContext(AuthContext);
 
console.log('counter is null in Action card componenet line 160');
  
//console.log(currentUser,'user value ');
  return (
    <Countdown 
    bidAuction={bidAuction}
    updateBid={updateBid}
    endAuction={endAuction}
    owner={currentUSer}
    date={expiredDate} 
    item={item}
    inputD={inputDisplay}
    setIN={setInputDisplay}
    setForm={setFormDsiplay}
    formD={formDisplay}
    inputRef={inputRef}
     
    titleRef={titleRef}
    discRef={discRef}
    imageRef={imageRef}
    dueDateRef={dueDateRef}
    itemStartPriceRef={itemStartPriceRef}
    



    renderer={renderer}
   />
  );
};
export default  AuctionCard