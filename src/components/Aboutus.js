import { Box, Typography } from '@mui/material'
import React from 'react'

const aboutus = () => {
  return (
    <Box sx={{ display: 'flex',paddingTop:9,}}>
    <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginLeft:13,boxShadow:3,maxWidth:1300, }}>
     <Typography variant='h5'>About us page </Typography>
   
      <p>Our company is committed to providing quality products and services to our valued customers. We are a team of experienced professionals who understand the importance of delivering value-based solutions. Our mission is to create long-term relationships with our clients by providing exceptional products and services.</p>
      <p>We have history of exceeding customer expectations by providing services that are tailored to meet their specific needs. Our goal is to build trust and reliability with our customers while delivering quality products they can depend on. We believe in innovation, hard work, and an attention to detail that sets us apart from other companies.</p>

    </Box>
   </Box>
  )
}

export default aboutus