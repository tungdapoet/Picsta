import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <div className='Check_box'>
      <Checkbox {...label} defaultChecked size="small"/>
    </div>
  );
}