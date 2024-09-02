import * as React from 'react';
import Typography from '@mui/material/Typography';
import './copyright.css';

export default function Copyright() {
  return (
    <div className='footer'>
        <Typography variant="body2">
            {'Copyright © '}
            {/* <Link color="inherit" href="https://mui.com/">
                QKD Simulator
            </Link>{' '} */}
            {new Date().getFullYear()}
            {' '}
            All rights reserved. 
        </Typography>
    </div>
  );
}