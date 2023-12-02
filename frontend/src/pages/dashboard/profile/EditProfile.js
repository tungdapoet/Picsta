import React from 'react'
import { paramCase, capitalCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// @mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Card, Container, Typography, Avatar, Grid, Switch, FormControlLabel } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
import useAuth from '../../../hooks/useAuth';
import useTabs from '../../../hooks/useTabs';
// _mock_
import { _userAbout, _userFeeds, _userGallery, _userFollowers, _userList } from '../../../_mock';
// components
import Page from '../../../components/Page';

// sections
import {
  Profile,
  ProfileCover,
  ProfileGallery,
  ProfileFollowers,
} from '../../../sections/@dashboard/user/profile';

import {
  AccountGeneral,
  AccountChangePassword,
  AccountNotifications,
} from '../../../sections/@dashboard/user/account';

// ----------------------------------------------------------------------

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6636', // Change this to your desired primary color
      contrastText: '#FFFFFF', // Set contrastText to white for primary button text
    },
  },
  // other theme configurations
});
// ----------------------------------------------------------------------

const ProfileHeader = () => {
    const postsCount = 120; // Số bài đăng
      const followersCount = 3400; // Số người theo dõi
      const followingCount = 300; // Số người đang theo dõi
  return (
    <Box sx={{ flexGrow: 1, p: 2, backgroundColor: 'background.paper', borderRadius: '8px', textAlign: 'center' }}>
      <Avatar alt="User Name" src="/path-to-avatar.jpg" sx={{ width: 90, height: 90, mx: 'auto', mb: 2 }} />
      <Typography variant="h6" component="div">
        meof maajp
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        ghét chiến tranh yêu hòa bình yêu bó cầu ghét điều hậu
      </Typography>
      {/* Stats Section của Qhg */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ textAlign: 'center', px: 2, borderRight: 1, borderColor: 'black' }}>
          <Typography sx={{ fontSize: '1.25rem' }}>{postsCount}</Typography>
          <Typography variant="body2" color="text.secondary">Shots</Typography>
        </Box>
        <Box sx={{ textAlign: 'center', px: 2, borderRight: 1, borderColor: 'black' }}>
          <Typography sx={{ fontSize: '1.25rem' }}>{followersCount}</Typography>
          <Typography variant="body2" color="text.secondary">Followers</Typography>
        </Box>
        <Box sx={{ textAlign: 'center', px: 2 }}>
          <Typography sx={{ fontSize: '1.25rem' }}>{followingCount}</Typography>
          <Typography variant="body2" color="text.secondary">Following</Typography>
        </Box>
      </Box>
    </Box>
  );
};

// ----------------------------------------------------------------------
const SocialConnect = () => {
  return (
  <ThemeProvider theme={theme}>
    <Grid container spacing={3} justifyContent="flex-end" sx={{ pt: 3 }} >
      <Grid item xs={12} md={8}>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Social Connect
        </Typography>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Facebook Connect"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Google+ Connect"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Notifications"
        />
      </Grid>
    </Grid>
  </ThemeProvider>
  );
}
// ----------------------------------------------------------------------


export default function EditProfile() {
  const { themeStretch } = useSettings()
  const { user } = useAuth()
  const { currentTab, onChangeTab } = useTabs('profile');

      const { pathname } = useLocation();

      const { name = '' } = useParams();

      const isEdit = pathname.includes('edit');

      const currentUser = _userList.find((user) => paramCase(user.name) === name);
  return(
    <ThemeProvider theme={theme}>
    <Page title="Edit Profile">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Card
          sx={{
            mb: 3,
              height: 280,
              position: 'relative',
          }}
        >
        <ProfileHeader/>
        </Card>
        <AccountGeneral/>
        <Grid container spacing={3} justifyContent="flex-end" sx={{ pt: 3 }} >
          <Grid item xs={12} md={8}>
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Change Password
            </Typography>
            <AccountChangePassword/>
          </Grid>
        </Grid>
        <SocialConnect/>
      </Container>
    </Page>
    </ThemeProvider>
  );
}
