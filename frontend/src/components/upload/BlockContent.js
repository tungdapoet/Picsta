// @mui
import { Box, Typography, Stack , Container } from '@mui/material';
// assets
import { UploadIllustration } from '../../assets';
import uploadfile_img from '../../img/Upload Field.png'
import Image from '../Image';
import vector from '../../img/Vector.png';
// ----------------------------------------------------------------------

export default function BlockContent() {
  return (
    <Container>
      <Image src={uploadfile_img} />
      <Image src={vector}
      sx= {{top: 120 , width: 200 , left: 430 ,position: 'absolute'}}
      />
    </Container>
   
  );
}
