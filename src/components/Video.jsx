import React from 'react';
import {VideoCard, ChannelCard, Loader} from './';

function Video({ videos }) {
  return (
    <div className='grid grid-cols-3 text-white gap-1 p-4'>
      { videos ? videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} channelItem={item}/> }
          {item.id.channelId && <ChannelCard channelItem={item}/>}
        </div>
      )) : <Loader/>}
    </div>
  );
}

export default Video;
 