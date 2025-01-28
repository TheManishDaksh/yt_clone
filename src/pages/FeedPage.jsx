import React, { useEffect, useState } from "react";
import { fetchedData } from "../utils/FetchData";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

export function FeedPage() {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null)

  useEffect( ()=>{

    setVideos(null);

        fetchedData(`search?part=snippet&q=${selectedCategory}`)
        .then((data)=>setVideos(data.items));  
      
  },[selectedCategory]);

  return (
    <div className="bg-black min-h-screen text-white ">
      <div className=" px-4 py-[10px]">
        <Navbar />
      </div>
      <div className="flex   ">
        <div className="w-[40vh] p-6"> 
          <div >
            <Sidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}/>
          </div>
          <p className="text-slate-700 text-sm">Copyright @2025 View_tube</p>
        </div>
        <div>
        <div className=" "> 
          <span className="text-4xl p-2 font-bold"
          >{selectedCategory}</span>
          <span className="text-4xl font-bold text-red-500"
          >Videos</span>  
        </div>
        <div>
          {
            <Video videos={videos}/>
          }
        </div>
        </div>
      </div> 
      
    </div>
  );
}

export default FeedPage;
