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
import anh7 from '../../img/Login With Facebook.png';
import anh8 from '../../img/Login With Google.png';
import anhlacay from '../../img/anh1.png'
import anhlogo from '../../img/anh2.png'
import Getstarted from '../../img/Get Started Now.png'
import Sologan from '../../img/Enter your Credentials to access your account.png'
import { blue } from '@mui/material/colors';
// ----------------------------------------------------------------------
const Dangky = styled('div')(({ theme }) => ({
  position: 'relative',
  width: 1600,
  height: 1042,
}))
const Picsta = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 26,
    left: 22,
}))

const Leafphoto = styled('div')(({ theme }) => ({
    position: 'absolute',
    width: 781.5,
    height: 1042,
    top: 0,
    left: 819,
}))

const Register_form = styled('div')(({ theme }) => ({
    position: 'absolute',
    width: 404,
    height: 35.02,
    top: 293.49,
    left: 212,
}))

const Getstarted_ = styled('div')(({ theme }) => ({
    position: 'absolute',
    width: 277,
    height: 48,
    top: 195,
    left: 212,
}))

const Sologan_ = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: 372,
  height: 26.26,
  top: 247.53,
  left: 212,
}))

const Haveacc = styled('div')(({ theme }) => ({
  width: 183,
  height: 21,
  fontSize: 20,
  position: 'absolute',
  top: 810.02,
  left: 210,
  }))
const Signin = styled('div')(({ theme }) => ({
  width: 183,
  height: 21,
  top: 810.02,
  left: 380,
  position: 'absolute',
  fontSize: 20,
  }))
const Facebook= styled('div')(({ theme }) => ({
    position: 'absolute',
    width: 221,
    height: 45,
    top: 700,
    left: 197,
    borderRadius: 10,
    backgroundColor: blue,
 }))
const Google = styled('div')(({ theme }) => ({
      width: 221,
      height: 45,
      top: 740,
      left: 197,
      borderRadius: 10,
      position: 'absolute',
      
      }))

// ----------------------------------------------------------------------

export default function Register() {
  
  return (
    <Page title="Register">
        <Leafphoto
          sx={{
            borderTopRightRadius: '45px',
            borderBottomRightRadius: '45px',
          }}
        ><img src = {anhlacay} /></Leafphoto>
        <Picsta><img src = {anhlogo} /></Picsta>
        <Getstarted_><img src = {Getstarted} /> </Getstarted_> 
        <Sologan_><img src = {Sologan} /></Sologan_>
        <Register_form>
            <RegisterForm />
        </Register_form>
        <Facebook>
          <Stack spacing={2} direction="row">
              <Button variant="text">
                  
                  <img  src = {anh7}/>
                  
              </Button>
          </Stack>
        </Facebook>
        <Google>
            <Stack spacing={2} direction="row">
              <Button variant="text">
                  
                  <img src = {anh8}/>
                  
              </Button>
          </Stack>
        </Google>
        <Haveacc>
                 Have an account?
        </Haveacc>
        <Signin><a href= "https://www.google.com/"> Sign In </a></Signin>
           
    </Page>
  );
}
