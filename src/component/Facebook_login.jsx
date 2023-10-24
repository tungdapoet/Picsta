import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../css/base.scss';
import '../css/reset.scss';
import anh4 from '../assets/Facebook.png';

export default function FaceButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button href="https://www.google.com" className= 'Facebook' variant="contained">
        <img className='Facebook_img' src= {anh4}/>
      </Button>
    </Stack>
  );
}