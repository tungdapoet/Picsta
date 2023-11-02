import React from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { MotionContainer } from '../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function BlankPage() {
  return (
    <Page title="Blank Page" sx={{ height: 1 }}>
      <RootStyle>
        <Container component={MotionContainer}>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <Typography variant="h3" paragraph>
              Đây là trang trắng
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              abcdefgh
            </Typography>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
