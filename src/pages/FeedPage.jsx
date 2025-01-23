import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export function FeedPage() {
  return (
    <div className="bg-black min-h-screen text-white ">
      <div className=" px-4 py-[10px]">
        <Navbar />
      </div>
      <div className="flex flex-col w-[30vh] p-4 ">
        <div className="border-r-2 border-solid border-slate-800">
          <div className="p-2">
            <Sidebar />
          </div>
          <p className="text-slate-700 text-sm">Copyright @2025 View_tube</p>
        </div>
      </div>
      <div className="flex justify-center">Feed Data</div>
    </div>
  );
}

export default FeedPage;
