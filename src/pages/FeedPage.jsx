import React, { useEffect, useState } from "react";
import { fetchedData } from "../utils/FetchData";
import { Navbar, Sidebar, Video } from "../components";

export function FeedPage() {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null)

  useEffect( ()=>{

    setVideos(null);

        fetchedData(`search?part=snippet&q=${selectedCategory}`)
        .then((data)=>setVideos(data.items));  
      
  },[selectedCategory]);

  return (
    <div className="bg-black min-h-screen min-w-fit text-white ">
      <div className=" px-1 py-[10px]">
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="w-[70vh] py-4 px-1"> 
          <div >
            <Sidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}/>
          </div>
          
        </div>
        <div>
        <div className=" "> 
          <span className="text-4xl p-2 font-bold"
          >{selectedCategory}</span>
          <span className="text-4xl font-bold text-red-500"
          >Videos</span>  
        </div>
        <div className="bg-black min-h-screen  ">
          {
            <Video videos={videos}/>
          }
          <p className="text-slate-700 text-sm flex justify-center">Copyright @2025 View_tube</p>
        </div>
        </div>
      </div> 
      
    </div>
  );
}

export default FeedPage;
