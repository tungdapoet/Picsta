// @mui
import { Container, Typography, Button, TextField, Box, Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// hooks
import useSettings from "../../../hooks/useSettings";
// components
import Page from "../../../components/Page";
import Image from 'src/components/Image';
//image
import uploadFile from "../../../img/Vector.png";


// ----------------------------------------------------------------------

export default function Home() {
    const { themeStretch } = useSettings();

    return (
        <Page title="Home">
            <Container maxWidth={themeStretch ? false : 'xl'}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        height: '70vh',
                        width: '80vh',
                        border: '2px dashed rgba(0, 0, 0, 0.2)',
                        padding: 3,
                    }}>
                        <Image
                            src={uploadFile}
                            sx={{ top: 68, width: 60, height: 30, }}
                        />
                        <Typography sx={{ top: 133.5, fontWeight: 600 }}>Drag and drop here</Typography>
                        <Typography sx={{ top: 180.5 }}>JPG, PNG or PDF, file size no more than 20MB</Typography>
                        <Button variant='outlined' size='large' sx={{ top: 100, width: 120, height: 36 }}>Select file</Button>


                    </Grid>
                    <Grid item xs={6} sx={{ left: 1000, position: 'absolute' }}>
                        <Typography>Title</Typography>
                        <TextField id="outlined-basic" label="Add your title" variant="outlined" />
                        <Typography>Caption</Typography>
                        <TextField id="outlined-basic" label="Tell everyone what your Pin is about" variant="outlined" />
                        <Typography>Link</Typography>
                        <TextField id="outlined-basic" label="Add a destination link" variant="outlined" />
                        <Typography>Category</Typography>

                        <Select sx={{ width: 222 }}

                        >
                            <MenuItem value={10}>Arabic Poetry</MenuItem>
                            <MenuItem value={20}>Learning Korean grammar</MenuItem>
                            <MenuItem value={30}>Book</MenuItem>
                            <MenuItem value={30}>Art</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
}