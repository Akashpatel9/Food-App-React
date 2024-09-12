import React from 'react'
import logo from '../../../public/images/LOGO.png';
import { CgProfile } from "react-icons/cg";
import { BiSolidOffer } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function Nevbar() {
  return (
    <div className=" flex justify-between items-center py-8 px-20 w-full bg-zinc-100">
      <img src={logo} className="w-24" />
      <div className=" flex gap-10">
        <div className="flex items-center gap-1 text-md">
          <div>
            <CiSearch />
          </div>
          <div>Search</div>
        </div>
        <div className="flex items-center gap-1 text-md">
          <div>
            <BiSolidOffer />
          </div>
          <div>Offers</div>
        </div>
        <div className="flex items-center gap-1 text-md">
          <div><CgProfile /></div>
          <div>LogIn/Signup</div>
        </div>
        <div className="flex items-center gap-1 text-md">
          <div><CiShoppingCart /></div>
          <div>Cart</div>
        </div>
      </div>
    </div>
  )
}

export default Nevbar;