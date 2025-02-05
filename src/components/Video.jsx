import React from 'react';
import {VideoCard, ChannelCard, Loader} from './';

function Video({ videos }) {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 bg-black text-white gap-1 py-4'>
      { videos? videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} channelItem={item}/> }
          {item.id.channelId && <ChannelCard channelItem={item}/>}
        </div>
      )): <Loader/>}
    </div>
  );
}

export default Video;
 