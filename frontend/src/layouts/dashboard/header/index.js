import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar , Button } from '@mui/material';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { HEADER, NAVBAR } from '../../../config';
// components
import Logo from '../../../components/Logo';
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';
import Image from 'src/components/Image';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import ContactsPopover from './ContactsPopover';
import NotificationsPopover from './NotificationsPopover';
//img
import logo__image from '../../../img/picsta.png'
import home__button from '../../../img/Home-fill.png'
import setting__button from '../../../img/Icon.png'
import messenger__button from '../../../img/Messenger.png'
import newpost__button from '../../../img/NewPosts.png'
import profile__button from '../../../img/Profile_image.png'

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})(({ isCollapse, isOffset, verticalLayout, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    ...(isCollapse && {
      width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
    }),
    ...(isOffset && {
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
    }),
    ...(verticalLayout && {
      width: '100%',
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
      backgroundColor: theme.palette.background.default,
    }),
  },
}));

// ----------------------------------------------------------------------

DashboardHeader.propTypes = {
  onOpenSidebar: PropTypes.func,
  isCollapse: PropTypes.bool,
  verticalLayout: PropTypes.bool,
};

export default function DashboardHeader({ onOpenSidebar, isCollapse = false, verticalLayout = false }) {
  const isOffset = useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;

  const isDesktop = useResponsive('up', 'lg');

  return (
    <RootStyle isCollapse={isCollapse} isOffset={isOffset} verticalLayout={verticalLayout}>
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
        }}
      >
        {isDesktop && verticalLayout && <Logo sx={{ mr: 2.5 }} />}

        {!isDesktop && (
          <IconButtonAnimate onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButtonAnimate>
        )}
        <Image 
            alt='anhlogo'
            src={logo__image}
            sx={{width: 180 , height: 55 , top: 21 , left : 32 , position: 'absolute'}}
          />
         
          <Button size= 'medium' sx={{ top: 38 , left : 201 , position : 'absolute'}}>
            <Image 
                alt='homebutton'
                src={home__button}
            />
          </Button>
          <Box  sx={{width: 900 , height: 50 , top: 38 , left : 380 , position: 'absolute'}}>
          <Searchbar />
          </Box>
          <Button size= 'medium' sx={{ top: 38 , left : 299 , position : 'absolute'}}>
            <Image 
                alt='newpost'
                src={newpost__button}
            />
          </Button>
          <Button size= 'medium' sx={{ top: 38 , left : 1399 , position : 'absolute'}}>
            <Image 
                alt='mess'
                src={messenger__button}
            />
          </Button>
          <Button size= 'medium' sx={{ top: 38 , left : 1499 , position : 'absolute'}}>
            <Image 
                alt='profile'
                src={profile__button}
            />
          </Button>
          <Button size= 'medium' sx={{ top: 38 , left : 1299 , position : 'absolute'}}>
            <Image 
                alt='setting'
                src={setting__button}
            />
          </Button>
          <Box sx={{ top: 38 , left : 1599 , position : 'absolute'}}>
            <NotificationsPopover />
          </Box>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </RootStyle>
  );
}
