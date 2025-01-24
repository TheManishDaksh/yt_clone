import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export function FeedPage() {
  return (
    <div className="bg-black min-h-screen text-white ">
      <div className=" px-4 py-[10px]">
        <Navbar />
      </div>
      <div className="flex   ">
        <div className="w-[40vh] p-4">
          <div >
            <Sidebar />
          </div>
          <p className="text-slate-700 text-sm">Copyright @2025 View_tube</p>
        </div>
        <div className="p-4 ">Feed Data</div>
      </div>
      
    </div>
  );
}

export default FeedPage;
