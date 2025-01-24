import React, { useState } from 'react'
import { categories } from '../utils/constant'

function Sidebar() {

    const [selectedCategory, setSelectedCategory] = useState("new") 
  return (
    <div>
        <button> 
            {categories.map((category)=>(
            <div className='p-3 cursor-pointer hover:bg-slate-700 rounded-lg '
                 key={category.name}>
                <span className='p-2 text-red-500 '>{category.icon}</span>
                <span className=''> {category.name}</span>
             </div>
        ))}</button>
    </div>
  )
}

export default Sidebar