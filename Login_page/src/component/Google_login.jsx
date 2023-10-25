import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import anh9 from '../assets/img/Login With Google.png';

export default function GoogleButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" className='Google_login'>
            <img className='Google' src = {anh9}/>
      </Button>
    </Stack>
  );
}