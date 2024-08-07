import React from "react";
import pic from "../../public/pic_lo.png";
import { Link, useNavigate } from 'react-router-dom';

function NavGall() {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-10 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-blue-900">
        <div className="text-white flex justify-between items-center h-16">
          <div className=" flex space-x-2">
            <img src={pic} className="h-11 md:h-16 w-19 md:w-49" alt="" />
          </div>
          <div className="flex space-x-8">
            <Link to="/back">
                    <button 
                       className="hover:scale-105 duration-200 cursor-pointer" >
                       Back to Home
                   </button></Link>
                   <Link to="">
                    <button 
                       className="hover:scale-105 duration-200 cursor-pointer" >
                       
                   </button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavGall;