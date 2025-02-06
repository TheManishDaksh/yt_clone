import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchedData } from "../utils/FetchData";
import { useParams,Link, data } from "react-router-dom";
import { Navbar, Loader, Video} from "../components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';

function VideoDetailPage() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState(null)
  const [comments, setcomments] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchedData(`videos?part=snippet,statistics&id=${id}`)
    .then((data) =>
      setVideoDetail(data.items[0]))

    fetchedData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>setSuggestedVideos(data.items))

    fetchedData(`comments?part=snippet&id=${id}`)
    .then((data)=>setcomments(data.items))

  }, [id]);

  if(!videoDetail) return <Loader/>

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { likeCount, viewCount },
  } = videoDetail;
  return (
   <div className="bg-black flex justify-center items-center">
    <div className=" min-h-screen text-white grid grid-cols-1">
      <div className=" top-0 z-50 py-3">
        <Navbar />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-1 md:px-6 lg:px-8">
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
            
            <div className="mt-4 text-lg md:text-xl font-semibold px-2">
              {title}
            </div>
            <div>
              <div>
                <Link className="flex gap-4 items-center py-4"
                to={`channel/${channelId}`}>
                <span><AccountCircleIcon fontSize="large"/></span>
                <span>{channelTitle}</span>
                </Link>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="p-2 border-2 shadow shadow-white border-slate-600 rounded-3xl">
                  <span>{viewCount} views</span>
                </div>
                <div className="p-2 border-2 flex gap-1 border-slate-600 shadow shadow-white rounded-3xl ">
                  <span><FavoriteIcon fontSize="medium" /></span>
                  <span>{likeCount}</span>
                </div>
              </div>
              <div className="pt-6">
                <button className=" flex px-2 py-2 bg-slate-800 rounded-full border-2 border-slate-500 shadow shadow-white">Suggested Videos</button>
                <div>
                <div className="hidden lg:flex">
                  <p>{comments}</p>
                </div>
                <div>
                  <Video videos={suggestedVideos} />
                </div>
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
