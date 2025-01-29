import React from 'react'
import { CircularProgress } from '@mui/material';

function Loader() {
  return (
    <div className='min-h-[95vh]'>
        <div className='flex flex-row justify-center items-center h-[80vh] w-[150vh]'>   
        <CircularProgress/>
    </div>
    </div>
  )
}

export default Loader