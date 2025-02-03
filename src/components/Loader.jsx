import React from 'react'
import { CircularProgress } from '@mui/material';

function Loader() {
  return (

        <div className='flex flex-col items-center'>   
        <CircularProgress/>
        <p className='py-2'>Loading...</p>
    
    </div>
  
  )
}

export default Loader