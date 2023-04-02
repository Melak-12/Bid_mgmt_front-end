
import {  useTheme } from '@mui/material/styles';

import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import AuctionCard from './AuctioinCard';

import React,{useContext, useState,useRef} from 'react'
import logo from '../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.css';
import Login from '../auth/Login'
import Register from '../auth/Register'
import {Toolbar,styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
 import * as Icon from 'react-bootstrap-icons';
import { AuthContext } from '../context/authContext';
import { Navigate, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import BidBody from './BidBody';
import Ava from './Ava';
import SearchItem from './Search';
import Footer from './Footer';
// import { GppMaybeIcon } from '@mui/icons-material/GppMaybe';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
///
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
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  color: 'black',
  padding:'2rem',
  // backgroundColor:"#00CCBB",
  // backgroundColor:"black",
  color:"#A0DED9"
})
// const calllogin=(e)=>{
//   console.log('fewfewdfasfds')
//   return <Login/>

// }

///

const Navbar=()=> {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const {user,setUser}=useContext(AuthContext);
  const [searchData,setSearchData]=useState(null);
  const [openAvater,setOpenAvater]=useState(false)
  const [loge,setLogin]=useState(null);
  const [searchs,setSearchs]=useState([]);
  const searchRef=useRef();




  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  return (
    <Box sx={{ display: 'flex'}}>
          {/* <SearchItem data={searchData}/> */}
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{backgroundColor:"#174A5F" }} >
      <StyledToolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
            >
          {user?  <MenuIcon />:""}
          </IconButton>
          <Typography variant='h6'>
           <a href="https://www.melak.tk/"><img  src={logo} alt="this is logo" width={50} height={50} /></a>
        </Typography>
        
        <Search>
          <InputBase placeholder="Search Bids..."inputRef={searchRef}/>
          <Typography align="right" sx={{display:"inline",marginLeft:45}}>
          <Typography sx={{display:"inline"}}><Link to="/search" style={{textDecoration:'none'}}><Typography sx={{color:"white",display:"inline"}}><SearchIcon/></Typography></Link></Typography>
          </Typography>
        </Search>
       
        <Typography><Link to="/"         style={{textDecoration:'none'}}><Typography sx={{color:"white"}}>Home</Typography></Link></Typography>
        {user?<>
        <Typography><Link to="/contact" style={{textDecoration:'none'}}><Typography sx={{color:"white"}}>Contact us</Typography></Link></Typography>
        <Typography><Link to="/about" style={{textDecoration:'none'}}><Typography sx={{color:"white"}}>About us</Typography></Link></Typography>
        <SearchItem data={searchData}/>
        
        </>:<><Login/>
        <Register/></>}
        {/* <Typography><Link to="/login" style={{textDecoration:'none'}}><Typography sx={{color:"white"}}> log</Typography></Link></Typography> */}
        {user?
        <Icons>
          <Badge badgeContent={1} color="error" >
            <MailIcon onClick={e=>alert("No Notification ")}/>
          </Badge>
          
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
           {/* <Avatar sx={{width:30,height:30}} onClick={e=>setOpenAvater(true)}/> */}
          <Ava/>
        </Icons>:""}
        <UserBox>
        <Avatar sx={{width:50,height:30}}/>
        <Typography variant="span">Angel </Typography>

        </UserBox>

        </StyledToolbar>
       </AppBar>
         {user?
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton/>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        {/* <Divider sx={{ borderBottomWidth: 115,color:"white" }} /> */}
        <Typography sx={{color:"white",backgroundColor:"black",margin:2,padding:1}}> System Options </Typography>
         <List>
          {['Bidders', 'Starred','my bids','privacy and policy'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 58,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 ?
                  <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                          <PersonPinIcon />
                        </StyledBadge>
                  </IconButton> 
                      :""}
                  {index=== 1 ?  <MailIcon />:"" }
                  {/* {index=== 2 ?  <MailIcon />:"" } */}
                  {index=== 2 ?
                   <Badge badgeContent={1} color="error" >
                      <ShoppingCartIcon onClick={e=>alert("No Notification ")}/>
                  </Badge>
                  
                  
                  :"" }
                  {index=== 3 ?
                    <Typography><Link to="/Privacy_and_policy" style={{textDecoration:'none'}}><Typography sx={{color:"black"}}><GppMaybeIcon/>
                    </Typography></Link></Typography>
                                    
                  :"" }
                  

                 
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[ 'Trash', 'help'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 58,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : 
        <Typography><Link to="/help" style={{textDecoration:'none'}}><Typography sx={{color:"black"}}><HelpCenterIcon></HelpCenterIcon>
        </Typography></Link></Typography>
                  

                  
                  }
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>:""}
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,}}>
        <DrawerHeader />
        {user?
        <Typography paragraph variant='h5' sx={{ borderRadius:10,flexGrow: 1, marginTop:10,padding:3 ,marginLeft:10,paddingLeft:10,align:"center",color:"blue",boxShadow:4 }}>
          Welcome to our bidding managment , Enjoy our products , sitback relax and set Your Bid 
        </Typography>:""}
       
      <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginLeft:13}}>
          <SearchItem searchD={searchRef}/>
        </Box>
       </Box>
      </Box>
    </Box>
  );
}
export default Navbar;