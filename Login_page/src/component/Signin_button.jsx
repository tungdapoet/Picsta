import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SigninButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" className='Signin'>
            Sign in
      </Button>
    </Stack>
  );
}