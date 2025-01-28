import React, { useState } from 'react'
import { categories } from '../utils/constant'

function Sidebar({setSelectedCategory, selectedCategory}) {

  return (
    <div className=''>
       {categories.map((category) => (
        <button 
          className={`flex flex-row gap-4 px-2 overflow-hidden py-4 pr-8 hover:bg-slate-800 hover:rounded-2xl ${(selectedCategory === category.name) ? "bg-slate-800 rounded-2xl" : ""}`}
           key={category.name}
            onClick={()=>setSelectedCategory(category.name)}>
          <span className='text-red-500'
          >{category.icon}</span>
          <span>{category.name}</span>
        </button>
       ))}
    </div>
  )
}

export default Sidebar