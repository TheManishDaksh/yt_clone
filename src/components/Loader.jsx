import React from 'react'
import { CircularProgress } from '@mui/material';

function Loader() {
  return (
    <div className='flex justify-center'>   
        <CircularProgress/>
    </div>
  )
}

export default Loader