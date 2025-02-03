import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoProfilePicture } from '../utils/constant'

function ChannelCard({channelItem}) {
  return (
    <div className='w-[320px] p-4 flex items-center'> 
      <Link to={`channel/${channelItem?.id?.channelId}`}>
      <div >
        <img style={{width:"180px", borderRadius:"50%"}}
        src={channelItem?.snippet?.thumbnails?.high.url || demoProfilePicture} alt={channelItem?.snippet?.title } />
        <p className='text-white font-bold text-lg py-2 pl-8'>
          {channelItem?.snippet?.title || demoChannelTitle}</p>
        </div>
      </Link>
    </div>
  )
}

export default ChannelCard