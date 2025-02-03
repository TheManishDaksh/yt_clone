import React from "react";

import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div className="flex justify-between w-full px-2 md:px-2 lg:px-2">
      <div >
        <Link className="flex text-white pt-2 text-xs md:font-bold lg:font-bold md:text-lg lg:text-lg gap-1"
        to="/" >
          <img src={logo} alt="logo" className="w-[23px] md:w-[30px] lg:w-[30px] " />
          <p>View tube</p>
        </Link>
        
      </div>
      <div className="text-slate-600">
        <input className="rounded-3xl p-[6px] w-[120px] md:w-96 lg:w-96 bg-black border-solid border-slate-800 border-2 text-white"
        type="text" placeholder="Search..." />
        
      </div>
      <div>
        <img className="rounded-full"
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s' alt="profile" width={"30px"} />
      </div>
    </div>
  );
}

export default Navbar;
