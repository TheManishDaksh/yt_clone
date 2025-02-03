import React from 'react'
import { CircularProgress } from '@mui/material';

function Loader() {
  return (
    <div className='min-h-[95vh]'>
        <div className='flex flex-col justify-center items-center h-[80vh] w-[150vh]'>   
        <CircularProgress/>
        <p className='p-2'>If this take time then we will sorry,</p>
        <p>Becasue probably the api is not working, api is from Rapid Api </p>
    </div>
    </div>
  )
}

export default Loader