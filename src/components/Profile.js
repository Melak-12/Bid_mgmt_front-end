import { Typography } from '@mui/material'
import React,{useContext} from 'react'
import { AuthContext } from './../context/authContext';

const Profile = () => {
    const {user,setUser}=useContext(AuthContext)
    return (
    <Typography sx={{margin:20}}>email :{user}</Typography>
  )
}

export default Profile