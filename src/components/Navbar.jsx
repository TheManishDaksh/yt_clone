import React from "react";

import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div className="flex justify-between px-2">
      <div >
        <Link className="flex text-white font-bold text-lg gap-1"
        to="/" >
          <img src={logo} alt="logo" width={"30px"} />
          <p>View tube</p>
        </Link>
        
      </div>
      <div className="text-slate-600">
        <input className="rounded-3xl p-[6px] w-96 bg-black border-solid border-slate-800 border-2 text-white"
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
