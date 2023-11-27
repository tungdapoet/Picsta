// @mui
import { Container, Typography, Button} from '@mui/material';
// hooks
import useSettings from "../../../hooks/useSettings";
// components
import Page from "../../../components/Page";
import Image from 'src/components/Image';
//image
import anh1 from "../../../img/creatPin.png";


// ----------------------------------------------------------------------

export default function Home() {
    const { themeStretch } = useSettings();

    return (
        <Page title="Home">
            <Container maxWidth={themeStretch ? false : 'xl'}>
                <Image 
                    disabledEffect
                    src={anh1}
                    sx={{ width: 403, height: 273,
                    left: 500,
                    position: 'absolute'}} />
                <Typography sx={{ left: 600, top: 440, position: 'absolute', fontSize: 25, fontFamily: 'Roboto', fontWeight: '600'
                    }}>Start creating Pins</Typography>
                <Button sx={{ width: 118, height: 48,
                    left: 320, top: 400
                    }}
                    href='http://localhost:3030/dashboard/pin/detail'
                    >
                        Creat Pin
                </Button>
            </Container>
        </Page>
    );
}