import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './foter.css'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { Button, TextField } from '@mui/material';
import { height } from '@mui/system';
import { Github } from 'react-bootstrap-icons';

export default function Footer() {
  return (
    <MDBFooter className='text-white text-center text-lg-left' style={{backgroundColor:"#174A5F" ,paddingBottom:0,marginBottom:0,}}>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' sm='12' className='mb-1 mb-md-0 p' style={{paddingBottom:1,marginBottom:2}}>
            <h5 className='text-uppercase mb-5'>Support us</h5>
            <b>Email :</b>&nbsp;&nbsp;
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{width:"25%", height:"10%"}} /> */}
           
            <input placeholder='Enter you Email !'style={{backgroundColor:"white"}}/>  &nbsp; &nbsp; &nbsp;
            <Button variant='contained' color='primary'>subscribe</Button>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-4'>Links</h5>
            <ul className='list-unstyled mb-0' >
              <li>
                <a href='/about' className='text-white' >
     
                  About us
                </a>
              </li>
              <li>
                <a href='/help' className='text-white'>
                 Help
                </a>
              </li>
              <li>
                <a href='/privacy_and_policy' className='text-white'>
                  Privacy and Policy
                </a>
              </li>
              <li>
                <a href='/contact' className='text-white'>
                  Contact us
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-4'>Address</h5>

            <row className='list-unstyled'>
              <li>
              <a href='mailto:melakabebeee@gmail.com' className='text-white'>
                <MailIcon/>  melakabebeee@gmail.com
                </a>
              </li>
                <a href='tel:+251961295261' className='text-white'><CallIcon/>
               +2519612951
                </a>
                <br/>
                <a href='https://github.com/Melaku4' className='text-white'>&nbsp;&nbsp;
                <Github/>
               </a>
               <a href='https://github.com/Melaku4' className='text-white'>&nbsp;&nbsp;
                <FacebookIcon/>
               </a><a href='https://github.com/Melaku4' className='text-white'>&nbsp;&nbsp;
                <InstagramIcon/>
               </a>

              <li>
              </li>
              
            </row>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        designed by Melaku Abebe
      </div>
    </MDBFooter>
  );
}