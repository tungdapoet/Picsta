import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function EmailFieldSizes() {
  return (
    <Box
      className = "name_input"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '47ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-size-small"
          size="small"
        />
      </div>
    </Box>
  );
}