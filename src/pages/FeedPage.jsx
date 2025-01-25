import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export function FeedPage() {

  const [selectedCategory, setSelectedCategory] = useState("New")
  return (
    <div className="bg-black min-h-screen text-white ">
      <div className=" px-4 py-[10px]">
        <Navbar />
      </div>
      <div className="flex   ">
        <div className="w-[40vh] p-4">
          <div >
            <Sidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}/>
          </div>
          <p className="text-slate-700 text-sm">Copyright @2025 View_tube</p>
        </div>
        <div className="p-4 "> 
          <span className="text-4xl p-2 font-bold"
          >{selectedCategory}</span>
          <span className="text-4xl font-bold text-red-500"
          >Videos</span>
        </div>
      </div>
      
    </div>
  );
}

export default FeedPage;
