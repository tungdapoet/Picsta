import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../css/base.scss';
import '../css/reset.scss';

export default function BasicTextFields() {
  return (
    <div className='email_input'>
    <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '42ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Email" variant="standard"/>

    </Box>
    </div>
  );
}