// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Stack, Container, Typography, InputAdornment } from '@mui/material';
// hooks
import useCountdown from '../hooks/useCountdown';
// components
import Page from '../components/Page';
import InputStyle from '../components/InputStyle';
import SocialsButton from '../components/SocialsButton';
import Image from 'src/components/Image';
import Searchbar from 'src/layouts/dashboard/header/Searchbar';
import NotificationsPopover from 'src/layouts/dashboard/header/NotificationsPopover';
// assets
import { ComingSoonIllustration } from '../assets';
import logoimage from '../img/picsta.png'
import homebutton from '../img/Home-fill.png'
import settingbutton from '../img/Icon.png'
import messengerbutton from '../img/Messenger.png'
import newpostbutton from '../img/NewPosts.png'
import profilebutton from '../img/Profile_image.png'
import left from '../img/Left.png'
import { BlogNewPostForm } from 'src/sections/@dashboard/blog';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const CountdownStyle = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const SeparatorStyle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  [theme.breakpoints.up('sm')]: {
    margin: theme.spacing(0, 2.5),
  },
}));

// ----------------------------------------------------------------------

export default function ComingSoon() {
  const countdown = useCountdown(new Date('07/07/2022 21:30'));

  return (
    <Page title="Coming Soon" sx={{ height: 1 }}>
      <RootStyle>
      
          <Box sx={{ top: 38 , left : 1599 , position : 'absolute'}}>
            <NotificationsPopover />
          </Box>
          <Image 
             alt='left'
             src={left}
             sx={{width: 357 , height: 533 , top: 98 , left : 3 , position: 'absolute'}}
          />
          <Box sx={{top: 200 , left: 455 , height: 284 , width: 1031, position: 'absolute' }}>
            <BlogNewPostForm />
          </Box>
          
      </RootStyle>
    </Page>
  );
}
