import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography , Stack } from '@mui/material';
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
import anhcay from '../../img/anh1.png';
import anhlogo_ from '../../img/anh2.png';
import anhquenmk from '../../img/anh3.png';
import anh9 from '../../img/Facebook.png';
import anh10 from '../../img/Google.png';
import Image from 'src/components/Image';
// ----------------------------------------------------------------------



const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

// ----------------------------------------------------------------------

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <Page title="Reset Password" sx={{ height: 1 }}>
        <RootStyle>
          <Box sx={{width: 781.5,height: 1042, left: 819,position: 'absolute',top: 0, left: 819}}>  
                <Image
                      visibleByDefault
                      disabledEffect
                      src={anhcay}
                    />
          </Box>
          <Box sx={{ width: 149.17, height: 48,top: 26, left: 22,position: 'absolute'}}>
                <Image
                      visibleByDefault
                      disabledEffect
                      src={anhlogo_}
                    />
          </Box>
          <Box sx={{width: 405,height: 20,top: 295,left: 190,position: 'absolute'}}>  
                <Image
                      visibleByDefault
                      disabledEffect
                      src={anhquenmk}
                    />
          </Box>
          <Box sx={{width: 410,height: 68,top: 438,left: 183, position: 'absolute'}}>
                <ResetPasswordForm />
          </Box>
          <Typography sx={{ width: 754.14, height: 40,top: 700,left: 190, position: 'absolute'}}>
                Did you remember your password?<a href="/Login.js" > Login </a>
          </Typography>
        </RootStyle> 
    </Page>
  );
}
