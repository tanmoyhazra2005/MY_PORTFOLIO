import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import java from "../../public/Com/pic_ (1).jpg";
import python from "../../public/Com/pic_ (2).png";
import mongoDB from "../../public/Com/pic_ (5).png";
import express from "../../public/Com/pic_ (3).png";
import reactjs from "../../public/Com/pic- (7).jpg";
import pic from "../../public/Com/pic_ (118).jpg";
import nodejs from "../../public/Com/img_1.jpg";

function PortFolio() {
  const navigate = useNavigate();
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
    {
      id: 7,
      logo: pic,
      name: "Java",
    },
  ];
  return (
    <div
      name="Memories"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-red-500 text-3xl font-bold mb-5">Memories🥰</h1>
        <span className=" underline font-semibold">Click to View Picture & Video</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-5 px-4 md:px-0">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] w-[310px] md:h-[280px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer md:hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[350px] h-[190px] p-1 border-[2px]"
                alt=""
              />
              <div>
                <div className="px-4 font-bold text-xl mb-2"></div>
              </div>
              <div className=" px-7 py-4 space-x-6 justify-around">
                <Link to="/video">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button></Link>
                <Link to="/gallery">
                <button 
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                   All Photos
                </button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PortFolio;