import React from 'react'
import NavBar from './NavBar'
import { useEffect,useState,useContext } from 'react'
import AddBid from './AddBid'
import AuctionCard from './AuctioinCard'
import { AuthContext } from '../context/authContext'
import { Alert, AlertTitle, Box, Typography } from '@mui/material'
import { Modal } from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Contactus from './Contactus'
import Aboutus from './Aboutus';
import SideBar from './SideBar'
import Login from './../auth/Login'
import Register from './../auth/Register'

import Privacy from './Privacy'
import Help from './Help'
import SearchItem from './Search'
import Profile from './Profile';
import Logincopy from './Logincopy'
import Footer from './Footer'


const BidBody = () => {
   const [showform,setshowform]=useState(true);

  const openform = () =>setshowform(prev=>!prev);
  const closeform = () =>setshowform(false);
  
  const {user,setUser} =useContext(AuthContext);
  const {err,setErr} = useContext(AuthContext)
  
  useEffect(()=>{
    const timeOut=setTimeout(()=>setErr(null),3000)
    return ()=>clearTimeout(timeOut)
  },[err])

  return (
     <BrowserRouter>
     

     <NavBar/>
     {/* <SideBar/> */}
     {err?
         <Modal centered show={openform} onHide={closeform}style={{top: "32px",backgroundColor:"174A5"}}>
           <Alert severity='info' sx={{p:5,backgroundColor:"#174A5F"}}>
          <AlertTitle sx={{color:"yellow"}}>Bidder Unknown !</AlertTitle>
            &nbsp;&nbsp;&nbsp;&nbsp;<Typography sx={{color:"yellow",fontFamily:"sans-serif"}}>{err}</Typography>
        </Alert>
        </Modal>
       
        :""}
        {user=='angel@gmail.com'?
        <AddBid/>:""}
       <Routes>
       
         
        {/* {user=='melakabebeee@gmail.com'?
        <Route path="/addbid" element={ <AddBid/>}/>:""} */}
       <Route path="/" element={
       <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginLeft:13}}>
          <AuctionCard/>
        </Box>
       </Box>
       
       } /> 
        
       <Route path="contact" element={<Contactus/>} >contact</Route> 
       <Route path="about" element={<Aboutus/>} /> 
       <Route path="login" element={<Login/>}/>
       <Route path="signup" element={<Register/>}/>
       <Route path="signout" element={<Login/>}/>
       <Route path="privacy_and_policy" element={<Privacy/>}/>
       <Route path="help" element={<Help/>}/>
       <Route path="search"element={<SearchItem/>}/>
       <Route path="profile"element={<Logincopy/>}/>





       <Route path="" element={<Footer/>}/>
        
       </Routes>
     
      <Footer/>
     </BrowserRouter> 
  )
}
export default BidBody;