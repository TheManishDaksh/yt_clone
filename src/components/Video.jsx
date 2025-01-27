import React from 'react';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

function Video({ videos }) {
  return (
    <div className='flex flex-row text-white justify-start gap-1 '>
      { videos && videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item}/> }
        </div>
      ))}
    </div>
  );
}

export default Video;
 