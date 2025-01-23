import React from 'react'
import { categories } from '../utils/constant'

function Sidebar() {
  return (
    <div>
        <div>{categories.map((category)=>(
            <div className='p-3 cursor-pointer hover:bg-slate-700 rounded-lg'
                 key={category.name}>
                {category.icon} {category.name}</div>
        ))}</div>
    </div>
  )
}

export default Sidebar