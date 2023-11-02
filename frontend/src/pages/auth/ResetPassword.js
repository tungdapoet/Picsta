import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography } from '@mui/material';
// layouts
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
// sections
import { ResetPasswordForm } from '../../sections/auth/reset-password';
// assets
import { SentIcon } from '../../assets';
import anh1 from '../../img/anh1.png';
import anh2 from '../../img/anh2.png';
import anh3 from '../../img/anh3.png';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));
const BigImg = styled('div')(({ theme }) => ({
    width: 781.5,
    height: 1042,
    left: 819,
    
    position: 'absolute',
    top: 0,
    left: 819,
}));
const Picsta = styled('div')(({ theme }) => ({
  width: 149.17,
  height: 48,
  top: 26,
  left: 22,
  position: 'absolute',
}));
const Forgot = styled('div')(({ theme }) => ({
      width: 565,
      height: 40,
      top: 295,
      left: 203,
      position: 'absolute',
      
}));

const Remember = styled('div')(({ theme }) => ({
    width: 754.14,
    height: 40,
    top: 680,
    left: 190,
    position: 'absolute',
}));

const Reset = styled('div')(({ theme }) => ({
  width: 410,
  height: 68,
  top: 438,
  left: 183,
  position: 'absolute',
}))


// ----------------------------------------------------------------------

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <Page title="Reset Password" sx={{ height: 1 }}>
              <Reset>
                <ResetPasswordForm />
              </Reset>
              <BigImg><img src= {anh1}/></BigImg>
              <Picsta><img src= {anh2}/></Picsta>
              <Forgot><img src= {anh3}/></Forgot>

              <Remember>
                 <div>Did you remember your password?<a href="/Login.js" > Login </a></div>
              </Remember>
    </Page>
  );
}
