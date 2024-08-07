import React from "react";

import pic from "../../public/my_pic.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-red-500 text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-green-600 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            My name is Tanmoy Hazra, I am a student and I studied computer science in web development and software development. Also I am doing Diploma in Computer Science and Technology, East Burdwan,Katwa. I live in Ghatal District of West Medinipur. I still know the basics of web development and I want to learn more about it and I strongly believe that this will lead me to success one day.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100057400878629&mibextid=ZbWKwL" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer hover:scale-150 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/tanmoyhazra8972?igsh=dHZtdGlyYmM5eWV2" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer hover:scale-150 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@TATAI_VINES6704" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer hover:scale-150 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/tatai_vines000" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer hover:scale-150 duration-300" />
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
