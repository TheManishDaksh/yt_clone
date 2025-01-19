import React from "react";

import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div className="flex justify-between px-2">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" width={"40px"} />
        </Link>
      </div>
      <div className="pt-[6px] ">
        <input className="rounded-3xl p-[6px] "
        type="text" placeholder="Search..." />
        <SearchIcon/>
      </div>
      <div>
        <img className="rounded-full"
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s' alt="profile" width={"40px"} />
      </div>
    </div>
  );
}

export default Navbar;
