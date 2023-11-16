import { capitalCase } from 'change-case';
// @mui
import { Container, Tab, Box, Tabs, Button , Typography} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useTabs from '../../hooks/useTabs';
import useSettings from '../../hooks/useSettings';
// _mock_
import { _userPayment, _userAddressBook, _userInvoices, _userAbout } from '../../_mock';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import {
  AccountGeneral,
  AccountBilling,
  AccountSocialLinks,
  AccountNotifications,
  AccountChangePassword,
} from '../../sections/@dashboard/user/account';
import Image from 'src/components/Image';
import anh1 from  '../../img/follower_.png'
import profile from  '../../img/shots followers following.png'
import profile_ from '../../img/Profile_image.png'


// ----------------------------------------------------------------------

export default function UserAccount() {
  const { themeStretch } = useSettings();

  const { currentTab, onChangeTab } = useTabs('general');

  const ACCOUNT_TABS = [
    {
      value: 'general',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <AccountGeneral />,
    },
    {
      value: 'billing',
      icon: <Iconify icon={'ic:round-receipt'} width={20} height={20} />,
      component: <AccountBilling cards={_userPayment} addressBook={_userAddressBook} invoices={_userInvoices} />,
    },
    {
      value: 'notifications',
      icon: <Iconify icon={'eva:bell-fill'} width={20} height={20} />,
      component: <AccountNotifications />,
    },
    {
      value: 'social_links',
      icon: <Iconify icon={'eva:share-fill'} width={20} height={20} />,
      component: <AccountSocialLinks myProfile={_userAbout} />,
    },
    {
      value: 'change_password',
      icon: <Iconify icon={'ic:round-vpn-key'} width={20} height={20} />,
      component: <AccountChangePassword />,
    },
  ];

  return (
    <Page title="User: Account Settings">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Account"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.user.root },
            { name: 'Account Settings' },
          ]}
        />

        <Box sx={{ mb: 5 }} />
        
        <Button size='medium' sx={{top: 90, withd : 300 ,height: 46, left:1359, position : 'absolute'}}>
          Account setting
        </Button>
        <Image 
          sx={{top: 260 , withd : 404 ,height: 100, left:845 ,position : 'absolute'}}
           visibleByDefault
           disabledEffect
           src={profile}  
           />
        <Image 
          sx={{top: 220 , withd : 604 ,height: 90, left:400, position : 'absolute'}}
           visibleByDefault
           disabledEffect
           src={profile_}  
           />
        <Typography  sx={{top: 240 , withd : 604 ,height: 90, left:500, position : 'absolute',fontSize:20 , fontFamily: 'Karla,sans-serif'}}>Hải béo</Typography>
        <Typography  sx={{top: 270 , withd : 604 ,height: 90, left:500, position : 'absolute'}}> Chi chi chành chành, im mẹ mồm đê</Typography>
        
        
        
     
        <Box sx={{top: 390 , position : 'absolute'}}>
            <AccountGeneral />
            <AccountChangePassword />
        </Box>
      </Container>
    </Page>
  );
}
