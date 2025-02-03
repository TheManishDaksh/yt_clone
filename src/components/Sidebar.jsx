import React from 'react';
import { categories } from '../utils/constant';

function Sidebar({ setSelectedCategory, selectedCategory }) {
  return (
    <div className="flex flex-row md:flex-col w-[270px] md:w-auto overflow-x-auto md:overflow-x-visible  md:p-1 gap-1 rounded-lg">
      {categories.map((category) => (
        <button
          className={`
            flex items-center justify-start
            min-w-[120px] md:min-w-[160px]
            p-2 md:p-4 lg:p-2
            transition-all duration-200
            hover:bg-slate-800 
            rounded-xl
            ${selectedCategory === category.name ? "bg-slate-800" : ""}`}
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span className="text-red-500 text-xl md:text-2xl">
            {category.icon}
          </span>
          <span className="ml-3 text-sm md:text-base whitespace-nowrap">
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
