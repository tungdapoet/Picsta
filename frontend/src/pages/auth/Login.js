import { capitalCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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
import anh2 from '../../img/Photo_Alex.png';
import anh3 from '../../img/picsta.png';
import anh4 from '../../img/nice_to_see.png';
import anh7 from '../../img/Login With Facebook.png';
import anh8 from '../../img/Login With Google.png';
// ----------------------------------------------------------------------
const anh_dep = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: 1123,
  height: 907,
  right: 477,
  bottom: -7,
}));

const Photo_Alex = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 836,
    left: 48,
}))

const Log_in = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 1,
    left: 1123,
    width: 477,
    height: 906,
}))

const Login_father = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 160,
  left: 0,
  width: 381,
  height: 444.5,
}))

const Frame_login = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 48,
    left: 48,
    width: 381,
    height: 444.5,
    gap: 48,
  }))
const Nice_to_see = styled('div')(({ theme }) => ({
    position: 'absolute' ,
    top:96,
    left: 0,
}))
const Nothaveacc = styled('div')(({ theme }) => ({
  width: 228,
  height: 20,
  gap: 8,
  top:677.5,
  left:48,
  position: 'absolute',
}))
const Sign_now =  styled('div')({
  width: 100,
  height: 20,
  top:676,
  left: 218,
  position: 'absolute',

});

const EmailInputFields = styled('div')(({ theme }) => ({
    width: 381,
    height: 48,
    top:220,
    left:48,
    position: 'absolute',
}))

const Password_input = styled('div')(({ theme }) => ({
  width: 381,
  height: 48,
  top: 300,
  left: 48,
  position: 'absolute',
}))
const FacebookButton = styled('div')(({ theme }) => ({
    width: 304,
    height: 35,
    top: 533,
    left: 1300,
    position: 'absolute',
}))
const A = styled('div')(({ theme }) => ({
    width: 304,
    height: 35,
    position: 'absolute' ,
}))

const GoogleButton = styled('div')(({ theme }) => ({
  width: 304,
  height: 35,
  top: 600,
  left: 1300,
  position: 'absolute',
}))

const B = styled('div')(({ theme }) => ({
  width: 304,
  height: 35,
  position: 'absolute' ,
}))




// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuth();

  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  
  return (
    <Page title="Login">
        
        <anh_dep><img src= {anh1} /></anh_dep>
        <Photo_Alex>
        <a href="https://unsplash.com/@irrabagon">
            <img  src= {anh2} />
        </a>
        </Photo_Alex>
        <Log_in>
            <Frame_login>
                <img class="Avatar" src= {anh3}/>
                <Nice_to_see><img src = {anh4}/></Nice_to_see>
                <Login_father>
                    <LoginForm />
                </Login_father>
            </Frame_login>
            <Nothaveacc>Dont have an account?</Nothaveacc>
            <Sign_now><a href="https://www.google.com">Sign up now</a></Sign_now>
        </Log_in>
        <FacebookButton>
          <Stack spacing={2} direction="row">
              <Button variant="contained">
                  <A>
                  <img  src = {anh7}/>
                  </A>
              </Button>
          </Stack>
        </FacebookButton>
        <GoogleButton>
            <Stack spacing={2} direction="row">
              <Button variant="text">
                  <B>
                  <img src = {anh8}/>
                  </B>
              </Button>
          </Stack>
        </GoogleButton>
        
    </Page>
  );
}
