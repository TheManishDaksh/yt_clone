import React from 'react'
import { Link } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {demoVideoUrl, demoVideoTitle, demoThumbnailUrl, demoChannelTitle} from "../utils/constant"

function VideoCard({video : {id :{videoId}, snippet},channelItem}) {
  return (
    <div className='p-1'>
      <div> 
       <Link to={videoId ? `video/${videoId}` : "video/cV2gBU6hKfY"} >
        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl } alt={snippet?.title} />
       </Link>
    </div>
    <div className='font-bold text-slate-200'>
      <Link to={videoId ? `video/${videoId}` : "video/cV2gBU6hKfY"}>
        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
      </Link>
    </div>
    <div className='text-sm text-slate-400 font-semibold'>
      <span>
        <AccountCircleIcon style={{fontSize:"large"}}/>
        </span>
      <span>
      <Link className='pr-1 pl-2'>
        {snippet?.channelTitle || demoChannelTitle}
      </Link>
      </span>
      <span>
        <CheckCircleIcon style={{fontSize:"small", color: "gray" }} />
      </span>
    </div>
    </div>
  )
}

export default VideoCard