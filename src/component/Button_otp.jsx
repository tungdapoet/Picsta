import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../css/base.scss';
import '../css/reset.scss';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button href="https://www.google.com" className= 'OTP' variant="contained" color="success">
        <div className='SEND'>Send OTP</div>
      </Button>
    </Stack>
  );
}