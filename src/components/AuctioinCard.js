import React, { useState,useContext, useRef, useEffect } from 'react';
import Countdown from 'react-countdown';
import logo from '../assets/logo.png'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from '../context/authContext';
import Winmsg from './Winmsg'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, ImageList, TextField, Toolbar, Typography } from '@mui/material';
import { Form, Toast } from 'react-bootstrap';

const  AuctionCard =()=>{
  
  const titleReff=useRef()
  const {user,setUser}=useContext(AuthContext)
  const {err,setErr} = useContext(AuthContext)

  const [winmsg,setWinmsg] = useState(null)
  const [titleRef,setTitleRef] =useState(null)
  const [discRef,setDiscRef] = useState(null)
  const [imageRef,setImageRef] = useState(null)
  const [dueDateRef,setDueDateRef] =useState(null)
  const [itemStartPriceRef,setItemStartPriceRef] =useState(null)
  const [newbidPrice,setNewbidPriceRef]=useState(null)
  const [data,setData]=useState([]);
  const [formDisplay,setFormDsiplay]=useState(false)
  const [formDisplay2,setFormDsiplay2]=useState(false)

  const [idRef,setIdref]=useState(null)
useEffect (()=>{
    getData();

},[])
const renderer = ({ days, hours, minutes, seconds, completed,props}) => {
  return (
      <div className="d-flex jsutify-content-between align-item-center">
            <h6>
              {days * 24 + hours} hr: {minutes} min: {seconds} sec
            </h6>
     </div>
    )
  }

  const expDate=(date)=>{
    const expdate=Number(date);
    const currDate=new Date();
    const DueDate=currDate.setHours(
    currDate.getHours()+expdate
    )
 
    // console.log('this is time of ',isNaN(DueDate))
    return DueDate;
  }

const newP=(oldPrice,newPrice,email,id)=>{
  const updatePrice=async (id,newPrice)=>{
    const up=await  fetch('http://127.0.0.1:8000/api/updatePrice/'+id,{
    method:'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPrice)
    })
    .then((result)=>{
      result.json().then((resp)=>{
        console.log("response form api",resp);
        // setWiner(resp["done!"])
        getData();
      })
    })
  
  }
  const updateWinner=async (id,winner)=>{
    const up=await  fetch('http://127.0.0.1:8000/api/updateWinner/'+id,{
    method:'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(winner)
    })
    .then((result)=>{
      result.json().then((resp)=>{
        console.log("response form api",resp);
        // setWiner(resp["done!"])
        getData();
      })
    })
  
  }

  if(newPrice<=oldPrice){
    console.log('cant set bid ');
   
 }
  else{
   

    const newp={
      price:newPrice
    }
    const currWinner={
      winner:user
    }
    updatePrice(id,newp);
    updateWinner(id,currWinner);

    }
    const getData=async()=>{
      const result=await fetch('http://127.0.0.1:8000/api/list');
          const res=await result.json();
          // const da=await data.json();
          console.log('data', res)
          setData(res);
          // console.log('data 2',data)
   }
}
const formD=(id)=>{
  console.log('update clicked')
   setIdref(id);
  setFormDsiplay(prev=>!prev);

  }
  const formD2=(id)=>{
    
    
    console.log('bid clicked')
     setIdref(id);
    setFormDsiplay2(prev=>!prev);
  
    }
    // const display3=(id1,id2)=>{
    //   if(id1==id2){
    //     return (
    //     <div>
    //       <TextField id="filled-basic" label="Enter Your Price !" variant="filled" type="number" onChange={e=>setNewbidPriceRef(e.target.value)}/>   
    //       <Button type='submit' className='m-5' onClick={()=>{newP(itemStartPrice,newbidPrice,user,id2)}}>Set Bid</Button>
    //     </div> )
    //   }
    // }
// const titleRef=useRef();
// const discRef=useRef();
// const imageRef=useRef();
// const dueDateRef=useRef();
// const itemStartPriceRef=useRef();
useEffect( ()=>{
    function  fetchdata(){
      getData();
    }
    fetchdata();
   
  },[]);
const  deleteItem=async (id)=>{
    const del=await fetch('http://127.0.0.1:8000/api/delete/'+id,{
      method:'DELETE'
    });
    const result=await del.json();
    console.warn("this is deleted",result);
    getData();
  };
// const update user is not about what 
const updateBid=async (id,formdata)=>{
    const up=await  fetch('http://127.0.0.1:8000/api/updateItem/'+id,{
    method:'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formdata)
    })
    .then((result)=>{
      result.json().then((resp)=>{
        console.log("my resp",resp);
        console.log("form data",formdata);
        getData();
      })
    })
  
}
const getData=async()=>{
  const result=await fetch('http://127.0.0.1:8000/api/list');
      const res=await result.json();
      // const da=await data.json();
      console.log('data', res)
      setData(res);
      // console.log('data 2',data)
}
const submitForm=(e,id)=>{
  console.log('this will be key ',id);
  e.preventDefault();
  const formdata={
    itemTitle:titleRef,
    itemDisc:discRef,
    itemImage:imageRef,
    itemDuration:dueDateRef,
    itemStartPrice:itemStartPriceRef,
  }
  // const formdata=new FormData();
  // formdata.append('itemTitle',titleRef)
  // formdata.append('itemDisc',discRef)
  // formdata.append('itemImage',imageRef)
  // formdata.append('itemDuration',dueDateRef)
  // formdata.append('itemStartPrice',itemStartPriceRef)
  // console.log('the image is ',imageRef);
  // const result=  fetch('http://127.0.0.1:8000/api/additem',{
  //  method: 'POST',
  //  body: formdata
  // })
  console.log("id",id);
 console.log('on submit update  data',formdata);
 console.log(data,'is data after api')
 updateBid(id,formdata);

}
return (
  
    <>
     <div className="row"> 
     {
      data.map((item)=>{
        
        return <Card 
        sx={{
           maxWidth: 390,
          //  display: '',
           margin:3,mt:9,
           boxShadow: "0 2px 10px 2px rgba(1, 253, 144, 0.2), 0 6px 20px 0 rgba(78, 127, 103, 0.19)",
           backgroundColor:"white",
           direction:"row"
           
          }}
           
          
           
            key={item.id}>
           
         {/* <Button color="secondary" variant="contained" onClick={()=>setWinmsg(true) }>winner</Button> */}
        {user?
        
        <Winmsg msg={item.currentWinner} click={winmsg}/>
        :""}
        
        <CardActionArea>
          <CardMedia
            sx={{pt:2}}
            component="img"
            height="250"
            image={"http://localhost:8000/"+item.itemImage}
            alt={item.title}
            >
             
          </CardMedia>
         
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {item.itemTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary" >
            {item.itemDisc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions  sx={{ justifyContent: "flex-end"}}>
          <Button color="secondary" >${item.itemStartPrice}</Button>
        </CardActions>
        <CardActions>
          <Button size="small" color="warning" >
            
          {
                <>
                  <Countdown
                  // date={()=>expDate(item.itemD)}
                  date={Date.now()+item.itemDuration*1}
                  renderer={renderer}
                  />
                </>
              }
          </Button>
        </CardActions>
        <CardActions>
        
          <div className="d-flex justify-content-between align-item-right">
              <div>
               
                      <Button variant='contained'
                         onClick={()=>{user?
                          formD2(item.id)
                          :setErr("Please login First !");
                        }}
                      >
                         Bid
                      </Button>
                      <div>
                     {
                      user==='melakabebeee@gmail.com'?
                      <>
                    <CardActions sx={{pt:4, pl:-2}}>
                        <Button color="error"
                          onClick={() =>deleteItem(item.id)}>
                        <DeleteIcon/>
                          Remove Bid
                        </Button>
                        <Button key={item.id}color='secondary'
                        onClick={()=>{formD(item.id)}}>
                          Update Bid
                        </Button>
                    </CardActions>
                        </>
                      :""
                } 
                </div>
                
              </div>
              
          </div>
       </CardActions>
         <CardContent>
            <form onSubmit={(e)=>{submitForm(e,idRef)}} >
              <div style={{display:formDisplay?"":"none"}}className="" >
                <Grid sx={{pb:3}}>
                  <br/>
                  <TextField  label='Title' defaultValue={item.itemTitle}   inputRef={titleReff} onChange={e=>setTitleRef(e.target.value)}/>
                </Grid>
                <Grid sx={{pb:3}}>
                 <TextField defaultValue={item.itemDisc} label='Description'   multiline rows={3} onChange={e => setDiscRef(e.target.value)}/>
                </Grid>
                <Grid sx={{pb:3}}>
                  <img  style={{width:100}}   src={"http://localhost:8000/"+item.itemImage} alt={"image of "+item.itemTitle}/>
                </Grid>
                <Grid sx={{pb:3}}>
                  <TextField    type='file'  onChange={e => setImageRef(e.target.value)}/>
                </Grid>
                <Grid sx={{pb:3}}>
                  <TextField defaultValue={item.itemDuration} label='Due Date'   type='number'  onChange={e => setDueDateRef(e.target.value)}/>
                </Grid>
                <Grid sx={{pb:3}}>
                  <TextField  defaultValue={item.itemStartPrice} label='Price'   type='number'  onChange={e => setItemStartPriceRef(e.target.value)}/>
                </Grid>
                <CardActions sx={{pt:3}}>
                  <Button variant="outlined" color="error"
                        style={{marginRight:'8rem'}} 
                        onClick={e=>setFormDsiplay(false)}>Cancel</Button>
                  <Button type='submit' color='success' variant='contained' > Update</Button>
                </CardActions>
             </div>
              <div >
            {
              // display3(idRef,item.id)
            }  
             {/* style={{visibility:formDisplay2&&idRef==item.id?"":"hidden"}}               */}
                  <div style={{display:formDisplay2&&idRef==item.id?"":"none"}}>
                   
                    <TextField id="filled-basic" label="Enter Your Price !" variant="filled" type="number" onChange={e=>setNewbidPriceRef(e.target.value)}/>   
                    <Button type='submit' className='m-5' onClick={()=>{newP(item.itemStartPrice,newbidPrice,user,item.id)}}>Set Bid</Button>
                  
                  </div>
             </div>
           </form>
          </CardContent>
        
      </Card>

          })}
    </div> 
   </>    
);
}

export default  AuctionCard