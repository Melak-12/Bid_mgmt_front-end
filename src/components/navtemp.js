import React,{useContext, useState,useRef} from 'react'
import logo from '../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.css';
import Login from '../auth/Login'
import Register from '../auth/Register'


// mui
import {AppBar,Toolbar,styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
 
import * as Icon from 'react-bootstrap-icons';
import { AuthContext } from '../context/authContext';
import { Navigate, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import BidBody from './BidBody';


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  color: 'black',
  padding:'2rem',
  backgroundColor:"#00CCBB",
  color:"#A0DED9"
})

const Search=styled("div")(({ theme })=>({
      backgroundColor:"#A0DED9",
      padding:"0 10px",
      borderRadius:theme.shape.borderRadius,
      width:"40%",
      color:"#00CCBB"
}));

const Icons=styled(Box)(({ theme })=>({
      display: 'none ',
      gap:"20px",
      alignItems:"center",
      [theme.breakpoints.up("sm")]:{
        display:"flex",
      }

  }));

const UserBox=styled(Box)(({ theme })=>({
      display: 'flex',
      gap:"10px",
      alignItems:"center",
      [theme.breakpoints.up("sm")]:{
        display:"none",
      }
}));
const calllogin=(e)=>{
  console.log('fewfewdfasfds')
  return <Login/>

}

const Nav = () => {
  
  const {user,setUser}=useContext(AuthContext);
  const [open,setOpen]=useState(false)
  const [loge,setLogin]=useState(null);
  const [searchs,setSearchs]=useState([]);
  const searchRef=useRef();


return (
      <AppBar position="sticky">
       <StyledToolbar>


         <Typography variant='h6'>
        <a href="https://www.melak.tk/"><img  src={logo} alt="this is logo" width={50} height={50} /></a>
        </Typography>
        <Search><InputBase placeholder="Search Bids..." /><SearchIcon onClick={e=>alert("search")} sx={{justifyContent:"flex-end",paddingRight:0,marginLeft:0}}/></Search>
        <Login/>
        <Register/>
        <Typography>home</Typography>
        <Typography><Link to="/contact">contact us</Link></Typography>
        <Typography><Link to="/about">about</Link></Typography>


        <Icons>
          <Badge badgeContent={1} color="error" >
            <MailIcon onClick={e=>alert("No Notification ")}/>
          </Badge>
         <Avatar sx={{width:60,height:60}} onClick={e=>setOpen(true )}/>
        </Icons>
        <UserBox>
        <Avatar sx={{width:30,height:30}}/>
        <Typography variant="span">Angel </Typography>

        </UserBox>
        {/*
         */}

       </StyledToolbar>
    
        <>
        {user?
        <>
          <Menu  
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            // anchorEl={anchorEl}
            open={open}
            onClose={e=>setOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >

        <MenuItem >Home</MenuItem>
        <MenuItem >DashBoard</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Bids</MenuItem>
        <MenuItem onClick={e=>setUser(null)}>LogOut</MenuItem>

          </Menu>
       
        </>
        :
        <>
      <Menu  
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              // anchorEl={anchorEl}
              open={open}
              onClose={e=>setOpen(false)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >

        
        <MenuItem>Home</MenuItem>
        <MenuItem>DashBoard</MenuItem>
        <MenuItem>Bids</MenuItem>
        <MenuItem onClick={()=>calllogin(2)}>login</MenuItem>
       

        <Register/>
      
      </Menu>
        
       
        </>
        
        }
        </>
 
      
      </AppBar>
    )
  }
  
  export default Nav
