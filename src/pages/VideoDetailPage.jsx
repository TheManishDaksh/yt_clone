import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchedData } from "../utils/FetchData";
import { useParams,Link } from "react-router-dom";
import { Navbar, Loader, Video } from "../components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';

function VideoDetailPage() {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchedData(`videos?part=snippet,statistics&id=${id}`)
    .then((data) =>
      setVideoDetail(data.items[0]))

  }, [id]);

  if(!videoDetail) return <Loader/>

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { likeCount, viewCount },
  } = videoDetail;
  return (
   <div className="flex justify-center items-center">
    <div className="bg-black min-h-screen text-white grid grid-cols-1">
      <div className=" top-0 z-50 py-3">
        <Navbar />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 pt-6">
          {/* Video Player Section */}
          <div className="">
            <div className="relative w-full pt-[56%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                width="100%"
                height="100%"
                className="absolute top-0 left-0"
              />
            </div>
            
            <div className="mt-4 text-lg md:text-xl font-semibold">
              {title}
            </div>
            <div>
              <div>
                <Link to={`channel/${channelId}`}>
                <span><AccountCircleIcon fontSize="large"/></span>
                <span>{channelTitle}</span>
                </Link>
              </div>
              <div className="flex justify-between">
                <div className="p-2 border-2 border-slate-600 rounded-3xl">
                  <span>{viewCount} views</span>
                </div>
                <div className="p-2 border-2 border-slate-600 rounded-3xl">
                  <span><FavoriteIcon fontSize="large" color="red"/></span>
                  <span>{likeCount}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
   </div>
  );
};
export default VideoDetailPage;
