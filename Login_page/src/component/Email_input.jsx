import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function EmailInputFields() {
  return (
    <Box
      className="Email_input"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Email or phone number" variant="filled" />
    </Box>
  );
}