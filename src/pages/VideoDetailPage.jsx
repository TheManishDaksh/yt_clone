import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchedData } from "../utils/FetchData";
import { useParams } from "react-router-dom";
import { Navbar, Loader, Video } from "../components";

function VideoDetailPage() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    fetchedData(`videos?part=snippet,statistics&id=${id}`)
    .then((data) =>
      setVideoDetail(data.items[0]))

    fetchedData(`playlistItems?part=snippet&playlistId=${id}`)
    .then((data)=>setSuggestedVideos(data.items))

  }, [id]);

  if(!videoDetail) return <Loader/>

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { likeCount, viewCount },
  } = videoDetail;
  return (
    <div className="bg-black text-white py-4 px-6">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="px-12 pt-16">
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
        </div>
        <div>{title}</div>
        <div><Video videos={suggestedVideos} /></div>
      </div>
    </div>
  );
}

export default VideoDetailPage;
