import React from "react";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import ScrollToTop from "react-scroll-to-top";

function Footer() {
  return (
    <>
      <hr />
      <div>
         <ScrollToTop smooth top="600" color="blue" width="28" viewBox="0 0 256 256"/>
        <div className="py-12 max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div>
            <ul className="flex space-x-4">
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
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 @TANMOY HAZRA. All rights reserved.
              </p>
              <p className="text-sm">Support or Help Learn Coding ❤️ </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
