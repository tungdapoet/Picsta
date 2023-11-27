import React, { useState } from 'react';
import { Container, Box, Typography, Button, Avatar, Dialog, DialogActions, DialogTitle, DialogContent } from '@mui/material';
import bannerImageDefault from '../../../img/Category_4.png';
import avatarImageDefault from '../../../img/Category_3.png';

const Profile = () => {
   const [bannerImage, setBannerImage] = useState(bannerImageDefault);
   const [avatarImage, setAvatarImage] = useState(avatarImageDefault);
  const [isFollowed, setIsFollowed] = useState(false);
  const [openBlockDialog, setOpenBlockDialog] = useState(false);
  const [openImageDialog, setOpenImageDialog] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleFollowClick = () => {
    setIsFollowed(!isFollowed);
  };

  const handleBlockClick = () => {
    setOpenBlockDialog(true);
  };

  const handleCloseBlockDialog = () => {
    setOpenBlockDialog(false);
  };

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setOpenImageDialog(true);
  };

  const handleCloseImageDialog = () => {
    setOpenImageDialog(false);
  };

  const handleImageChange = (event, setImage) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const postsCount = 120; // Số bài đăng
    const followersCount = 3400; // Số người theo dõi
    const followingCount = 300; // Số người đang theo dõi

  return (
    <Container maxWidth="md">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', bgcolor: '#FFFFFF', paddingTop: 5 }}>
        {/* Banner */}
        <Box sx={{ width: '100%', height: '406px', borderRadius: '30px', backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginBottom: '-100px', cursor: 'pointer' }} onClick={() => handleImageClick(bannerImage)} />
        {/* Avatar */}
        <Avatar src={avatarImage} alt="User Avatar" sx={{ width: 200, height: 200, border: '5px solid #A5A58D', position: 'relative', marginTop: '-30px', zIndex: 1, cursor: 'pointer' }} onClick={() => handleImageClick(avatarImage)} />
        {/* User Name and Handle */}
       {/* User Name and Handle */}
       <Typography variant="h4" sx={{ fontWeight: 'normal', color: '#000', textAlign: 'center', marginTop: 1 }}>
         Tên người dùng
       </Typography>
      <Typography sx={{ fontWeight: 'normal', color: '#000', textAlign: 'center' }}>
        @TenTaiKhoan
       </Typography>

       {/* User Bio */}
         <Typography sx={{ color: 'text.secondary', textAlign: 'center', marginTop: 1 }}>
           Tiểu sử ở đây
         </Typography>


        {/* Action Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
          <Button variant="outlined" onClick={handleFollowClick} sx={{ marginX: 2, borderColor: '#A5A58D', borderRadius: '10px',color: 'black' }}>
            {isFollowed ? 'Unfollow' : 'Follow'}
          </Button>
          <Button variant="outlined" sx={{ marginX: 2, borderColor: '#A5A58D', borderRadius: '10px',color: 'black' }}>
            Message
          </Button>
          <Button variant="outlined" onClick={handleBlockClick} sx={{ marginX: 2, borderColor: '#A5A58D', borderRadius: '10px',color: 'black' }}>
            Block
          </Button>
        </Box>

        {/* Stats Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
          <Box sx={{ textAlign: 'center', paddingX: 2, borderRight: 1, borderColor: 'black' }}>
            <Typography sx={{ fontSize: '1.25rem' }}>{postsCount}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary'}}>Posts</Typography>
          </Box>
          <Box sx={{ textAlign: 'center', paddingX: 2 ,borderRight: 1, borderColor: 'black' }}>
            <Typography sx={{ fontSize: '1.25rem' }}>{followersCount}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary'}}>Followers</Typography>
          </Box>
          <Box sx={{ textAlign: 'center', paddingX: 2  }}>
            <Typography sx={ {fontSize: '1.25rem' }}>{followingCount}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary'}}>Following</Typography>
          </Box>
        </Box>


        {/* Block Confirmation Dialog */}
        <Dialog open={openBlockDialog} onClose={handleCloseBlockDialog}>
          <DialogTitle>Are you sure you want to block this user?</DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseBlockDialog}>Cancel</Button>
            <Button onClick={handleCloseBlockDialog} autoFocus>
              Block
            </Button>
          </DialogActions>
        </Dialog>
        {/* Image Dialog */}
        <Dialog open={openImageDialog} onClose={handleCloseImageDialog} maxWidth="lg">
          <DialogContent>
            <img src={currentImage} alt="Preview" style={{ width: '100%', height: 'auto' }} />
          </DialogContent>
          <DialogActions>
            <Button component="label">
              Change Image
              <input type="file" hidden onChange={(e) => handleImageChange(e, currentImage === bannerImage ? setBannerImage : setAvatarImage)} accept="image/*" />
            </Button>
            <Button onClick={handleCloseImageDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>

    </Container>
  );
};

export default Profile;
