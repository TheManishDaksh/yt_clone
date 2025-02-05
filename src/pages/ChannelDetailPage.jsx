import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchedData} from "../utils/FetchData"
import { ChannelCard, VideoCard } from '../components';

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
    <div className='bg-black min-h-screen block'> 
      <div className='flex justify-center rounded-full'
      ><ChannelCard channelItem={channel} /></div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3'
      ><VideoCard video={channelVideo} /> </div>
    </div>
    
  )
}

export default ChannelDetailPage