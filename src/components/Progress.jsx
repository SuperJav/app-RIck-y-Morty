import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <div className=' absolute flex h-40 items-center'>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress className=' mn:mx-10 md:mx-36 lg:mx-64' />
      </Box>
    </div>
  );
}