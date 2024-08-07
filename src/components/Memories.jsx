import React from "react";
import java from "../../public/Com/pic_ (11).jpg";
import python from "../../public/Com/pic_2.jpg";
import mongoDB from "../../public/Com/pic_ (19).jpg";
import express from "../../public/Com/pic_ (13).jpg";
import reactjs from "../../public/Com/pic_ (17).jpg";
import nodejs from "../../public/Com/pic_ (29).jpg";
function Memories() {
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
  ];
  return (
    <div
      name=""
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-black text-2xl font-bold mb-5">Best Memories Picture</h1>
        <span className=" underline font-semibold"></span>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-5 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="w-[170px] md:w-[300px] h-[275px] md:h-[320px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer md:hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[350px] h-[250px] md:h-[300px] p-1 border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Memories;

