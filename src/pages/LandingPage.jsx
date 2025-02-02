import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Play, Video, Share2, Tv } from 'lucide-react';

export default function LandingPage() {

  const navigate = useNavigate();

  function handleGetStart (){
    navigate("/feed ")
  }
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Video className="h-12 w-12 text-red-600" />
            <h1 className="text-4xl font-bold text-red-600">ViewTube</h1>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Share Your Story With The World
          </h2>
          
          {/* Subheading */}
          <p className="text-xl text-white mb-12">
            Upload, watch, and share videos with millions of users worldwide.
            Join our community and start your journey today.
          </p>
          <div onClick={handleGetStart}
                className='flex justify-center pb-4 lg:pl-2 lg:pb-6 md:pl-0 md:pb-6'> 
                <button className='bg-red-600 rounded-3xl text-white p-4 font-bold text-lg'>Get Started</button>
            </div>
          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link to={'/feed'}>
            <div className="p-6 bg-slate-700 rounded-xl shadow-sm">
              <Play className="h-8 w-8 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Watch</h3>
              <p className="text-slate-300">Endless entertainment across any device, anytime</p>
            </div>
            </Link>

            <Link to={'/feed'}> 
            <div className="p-6 bg-slate-700 rounded-xl shadow-sm">
              <Share2 className="h-8 w-8 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Share</h3>
              <p className="text-gray-300">Share your favorite moments with friends and family</p>
            </div>
            </Link>
              
              <Link to={'/feed'}>
            <div className="p-6 bg-slate-700 rounded-xl shadow-sm">
              <Tv className="h-8 w-8 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Create</h3>
              <p className="text-gray-300 pb-6">Upload and manage your content with ease</p>
            </div>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">1B+</p>
              <p className="text-gray-600">Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">500M+</p>
              <p className="text-gray-600">Videos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">190+</p>
              <p className="text-gray-600">Countries</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}