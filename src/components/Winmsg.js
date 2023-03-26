import React,{useState,forwardRef} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert =forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Winmsg({msg}) {
  const [open, setOpen] =useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={1} sx={{ width: '10%' }}>
       <Button color="secondary" variant="contained" onClick={handleClick }>winner</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose}  severity="success" sx={{ width: '100%' ,}}>
         The Current Winner is <br/> <hr/> Email : {msg}
        </Alert>
      </Snackbar>
     
    </Stack>
  );
}