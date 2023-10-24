import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../css/base.scss';
import '../css/reset.scss';
import anh5 from '../assets/Google.png';

export default function GoogleButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button href="https://www.google.com" className= 'Google' variant="text">
        <img className='Google_img' src= {anh5}/>
      </Button>
    </Stack>
  );
}