import React from 'react';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

function Video({ videos }) {
  return (
    <div className='grid grid-cols-3 text-white gap-1 '>
      { videos && videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item}/> }
          {item.id.channelId && <ChannelCard channelItem={item}/>}
        </div>
      ))}
    </div>
  );
}

export default Video;
 