import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <div className="flex justify-between w-fit gap-9 md:w-full lg:w-full px-1 md:px-2 lg:px-2">
      <div >
        <Link className="flex text-white pt-2 text-xs md:font-bold lg:font-bold md:text-lg lg:text-lg gap-1"
        to="/" >
          <img src={logo} alt="logo" className="w-[23px] md:w-[30px] lg:w-[30px] " />
          <p>View tube</p>
        </Link>
        
      </div>
      <div >
       <Searchbar/>
      </div>

      <div>
        <img className="rounded-full"
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s' alt="profile" width={"30px"} />
      </div>
    </div>
  );
}

export default Navbar;
