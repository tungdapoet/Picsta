import { capitalCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography, Tooltip, Stack , Button } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useResponsive from '../../hooks/useResponsive';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
// sections
import { RegisterForm } from '../../sections/auth/register';
//image
import anh7 from '../../img/Facebook.png';
import anh8 from '../../img/Google.png';
import anhlacay from '../../img/anh1.png'
import anhlogo from '../../img/anh2.png'
import Getstarted from '../../img/Get Started Now.png'
import Sologan from '../../img/Enter your Credentials to access your account.png'
import { blue } from '@mui/material/colors';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      }));
// ----------------------------------------------------------------------

export default function Register() {
  
  return (
    <Page title="Register">
      <RootStyle>
        <Box sx={{position:'absolute',top: 26, left: 22,}}>
          <Image
                  visibleByDefault
                  disabledEffect
                  src={anhlogo}
              />
        </Box>
         <Box sx={{
           position: 'absolute', width: 781, height: 1030, top: 0, left: 819,}}>
            <Image
                visibleByDefault
                disabledEffect
                src={anhlacay}
            />
         </Box>
         <Box sx={{
           position: 'absolute',width: 277,height: 48,top: 195,left: 212}}>
            <Image
                visibleByDefault
                disabledEffect
                src={Getstarted}
            />
         </Box>
         <Box sx={{
           position: 'absolute',
           width: 372,
           height: 26.26,
           top: 247.53,
           left: 212}}>
            <Image
                visibleByDefault
                disabledEffect
                src={Sologan}
            />
         </Box>
         <Container
            sx={{position: 'absolute',width: 450,height: 35.02, top: 293.49, left: 188,}}>
              <RegisterForm />
         </Container>
         <Button
              size="medium"
              component={RouterLink}
              to=""
              sx={{ position: 'absolute',width: 399, height: 45,  top: 650,   left: 197,borderRadius: 10,
              backgroundColor: blue,}} >
              <Image
                  sx={{width: 259}}
                  visibleByDefault
                  disabledEffect
                  src={anh7}
                />
            </Button>
            <Button
              size="medium"
              component={RouterLink}
              to=""
              sx={{width: 399, height: 45,top: 720,left: 197, borderRadius: 10,
                position: 'absolute', }}>
              <Image
                  sx={{width: 259}}
                  visibleByDefault
                  disabledEffect
                  src={anh8}
                />
            </Button>
            <Typography
                sx= {{width: 183,  height: 21, fontSize: 20, position: 'absolute', top: 810.02,
                left: 210, whiteSpace: 'nowrap'}}>
                  Have an account ? <a href="https://www.google.com">Sign in</a>
            </Typography>
      </RootStyle>     
    </Page>
  );
}
