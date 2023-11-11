import React from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Button , Card} from '@mui/material';
// components
import Page from '../components/Page';
import { IconButtonAnimate, MotionContainer } from '../components/animate';
import Image from 'src/components/Image';
import Searchbar from 'src/layouts/dashboard/header/Searchbar';
import NotificationsPopover from 'src/layouts/dashboard/header/NotificationsPopover';
//image
import logo_image from '../img/picsta.png'
import home_button from '../img/Home-fill.png'
import setting_button from '../img/Icon.png'
import messenger_button from '../img/Messenger.png'
import newpost_button from '../img/NewPosts.png'
import profile_button from '../img/Profile_image.png'
import left from '../img/Left.png'
import Card_1 from '../img_demo/card_1.png';
import Card_2 from '../img_demo/card_2.png';
import Card_3 from '../img_demo/card_3.png';
import Card_4 from '../img_demo/card_4.png';
import Card_5 from '../img_demo/card_5.png';
import Card_6 from '../img_demo/card_6.png';
import Card_7 from '../img_demo/card_7.png';
import Card_8 from '../img_demo/card_8.png';
import Card_9 from '../img_demo/card_9.png';



// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Demo() {
  return (
    <Page title="Demo" sx={{ height: 1 }}>
      <RootStyle>
       
          <Image 
            alt='anhlogo'
            src={logo_image}
            sx={{width: 180 , height: 55 , top: 21 , left : 32 , position: 'absolute'}}
          />
         
          <Button size= 'medium' sx={{ top: 38 , left : 201 , position : 'absolute'}}>
            <Image 
                alt='homebutton'
                src={home_button}
            />
          </Button>
          <Box  sx={{width: 900 , height: 50 , top: 38 , left : 380 , position: 'absolute'}}>
          <Searchbar />
          </Box>
          <Button size= 'medium' sx={{ top: 38 , left : 299 , position : 'absolute'}}>
            <Image 
                alt='newpost'
                src={newpost_button}
            />
          </Button>
          <Button size= 'medium' sx={{ top: 38 , left : 1399 , position : 'absolute'}}>
            <Image 
                alt='mess'
                src={messenger_button}
            />
          </Button>
          <Button size= 'medium' sx={{ top: 38 , left : 1499 , position : 'absolute'}}>
            <Image 
                alt='profile'
                src={profile_button}
            />
          </Button>
          <Button size= 'medium' sx={{ top: 38 , left : 1299 , position : 'absolute'}}>
            <Image 
                alt='setting'
                src={setting_button}
            />
          </Button>
          <Box sx={{ top: 38 , left : 1599 , position : 'absolute'}}>
            <NotificationsPopover />
          </Box>
          <Image 
             alt='left'
             src={left}
             sx={{width: 357 , height: 533 , top: 98 , left : 3 , position: 'absolute'}}
          />
          <Container sx={{width: 997 , height: 1126 , top: 150 ,columns: 4, left : 358 , 
            position: 'absolute',
            '@media (max-width: 1200px)': {
              columns: 3,
              width: 'calc(100% - 40px)'
            },
            '@media (max-width: 768px)': {
              columns: 2,
            },
            '@media (max-width: 480px)': {
              columns: 1,
            },}}>
            <Card><Image src={Card_8} /></Card>
            <Card><Image src={Card_4} /></Card>
            <Card><Image src={Card_1} /></Card>
            <Card><Image src={Card_9} /></Card>
            <Card><Image src={Card_2} /></Card>
            <Card><Image src={Card_5} /></Card>
            <Card><Image src={Card_3} /></Card>
            <Card><Image src={Card_6} /></Card>
            <Card><Image src={Card_7} /></Card>
          </Container>
      </RootStyle>
    </Page>
  );
}
