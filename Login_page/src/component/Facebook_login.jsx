import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import anh8 from '../assets/img/Login With Facebook.png';

export default function FacebookButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" className='Facebook_login'>
            <img className='Facebook' src = {anh8}/>
      </Button>
    </Stack>
  );
}