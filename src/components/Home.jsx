import React from "react";

import pic from "../../public/my_pic.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-red-500 text-xl">HELLO..,MOST WELCOME DEAR..</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>MANY MANY HAPPY RETURNS OF THE DAY..🎈🎈💝</h1>
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Happy Birthday, SINU !!
              May this special day bring you lots of joy, love, and happiness in your life.
              Your smile is my greatest gift.
              I feel lucky to have a beautiful friend like you in my life.
              Just like every day, today too, you are beautiful, radiant, and unique.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/share/1NETSScG3X/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer hover:scale-150 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/miss.jana007?utm_source=qr&igsh=MWs1OG52c2FlZjN6cg==" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer hover:scale-150 duration-300" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
