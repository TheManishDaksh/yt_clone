import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchedData} from "../utils/FetchData"
import { ChannelCard } from '../components';

function ChannelDetailPage() {

  const [channel, setChannel] = useState(null)
  const [channelVideo, setChannelVideo] = useState(null)
  const {id} = useParams()

  useEffect(()=>{
    fetchedData(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannel(data.items))

    fetchedData(`search?part=snippet&channelId=${id}`)
    .then((data)=>setChannelVideo(data.items))
  })
  return (
    <div className='bg-black'> 
      <div><ChannelCard channelItem={channel} /></div>
      <div>{id}</div>
    </div>
    
  )
}

export default ChannelDetailPage