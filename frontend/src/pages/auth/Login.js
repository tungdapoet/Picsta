import { capitalCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Alert, Tooltip, Container, Typography, TextField, Button } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
// hooks
import useAuth from '../../hooks/useAuth';
import useResponsive from '../../hooks/useResponsive';
// components
import Page from '../../components/Page';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
// sections
import { LoginForm } from '../../sections/auth/login';
import { User } from '@auth0/auth0-spa-js';
//image
import anh1 from '../../img/anh.png';
import anh3 from '../../img/picsta.png';
import anh4 from '../../img/nice_to_see.png';
import anh7 from '../../img/Login With Facebook.png';
import anh8 from '../../img/Login With Google.png';

// ----------------------------------------------------------------------


const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuth();

  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  
  return (
    <Page title="Login">
        <RootStyle>
            <Box
              sx= {{width: 1100,height: 900,position : 'absolute'}}>
            <Image
                visibleByDefault
                disabledEffect
                src={anh1}
              />
            </Box>
            <Box sx={{
                position: 'absolute',
                left: 1130,top: 48,width: 160,height: 12}}>
                <Image
                  visibleByDefault
                  disabledEffect
                  src={anh3}
                />
            </Box>
            <Box sx={{
                position: 'absolute',
                left: 1130,top: 125 ,width: 200,height: 16}}>
                <Image
                    visibleByDefault
                    disabledEffect
                    src={anh4}
                       />
            </Box>
            <Button
              size="medium"
              component={RouterLink}
              to=""
              sx={{position: 'absolute',
              left: 1130,top: 480, width: 399 }}
            >
              <Image
                  visibleByDefault
                  disabledEffect
                  src={anh7}
                />
            </Button>
            <Button
              size="medium"
              component={RouterLink}
              to=""
              sx={{position: 'absolute',
              left: 1130,top: 540, width: 399 }}
            >
              <Image
                  visibleByDefault
                  disabledEffect
                  src={anh8}
                />
            </Button>
            <Box sx={{
                position: 'absolute',
                left: 1130,top: 180, width: 399 }}>
              <LoginForm />
            </Box>
            <Typography
                sx= {{width: 228,height: 20, gap: 8, top:677.5, left:1130,
                      position: 'absolute', whiteSpace: 'nowrap',
                     }}>Dont have an account ? <a href="https://www.google.com">Sign up now</a>
            </Typography>
        </RootStyle>
    </Page>
  );
}
