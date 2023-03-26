import React from 'react';
import './App.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';


function Contactus() {


  return (
    <div className="App"> 
      <Typography gutterBottom variant="h3" align="center">
        Contact Us
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 950, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            {/* <Typography gutterBottom variant="h5">
              Contact Us
          </Typography>  */}
            <Typography variant="body2" color="textSecondary" align='center' component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> <br/><br/>
            <form>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Contactus;