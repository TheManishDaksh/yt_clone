import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchedData } from '../utils/FetchData'
import { Navbar, Video } from '../components'

function SearchFeed() {
    
const {searchItem} = useParams()
const [searchVideos, setSearchVideos] = useState(null)

useEffect(()=>{
    fetchedData(`search?${searchItem}&part=snippet`)
    .then((data)=>setSearchVideos(data.items))
},[searchItem])
  return (
    <div className='bg-black'>
        <div className='py-4'>
            <Navbar/>
        </div>
        <div> 
            <div className='text-white font-bold text-3xl'
            > <span>Results for</span> <span className='text-red-500'>{searchItem}</span></div>
            <div><Video videos={searchVideos}/></div>
        </div>
    </div>
  )
}

export default SearchFeed