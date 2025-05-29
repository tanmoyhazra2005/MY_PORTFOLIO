import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import pic1 from "../../public/com/img_2.jpg";
import pic2 from "../../public/com/pic_ (11).jpg";
import pic3 from "../../public/com/pic_ (28).jpg";
import pic4 from "../../public/com/pic_ (81).jpg";
import pic5 from "../../public/com/pic_ (86).jpg";
import pic6 from "../../public/com/pic- (2).jpg";
import pic7 from "../../public/com/pic- (3).jpg";

function PortFolio() {
  const navigate = useNavigate();
  const cardItem = [
    {
      id: 1,
      logo: pic1,
      name: "pic1",
    },
    {
      id: 2,
      logo: pic2,
      name: "pic2",
    },
    {
      id: 3,
      logo: pic3,
      name: "pic3",
    },
    {
      id: 4,
      logo: pic4,
      name: "pic4",
    },
    {
      id: 5,
      logo: pic5,
      name: "pic5",
    },
    {
      id: 6,
      logo: pic6,
      name: "pic6",
    },
    {
      id: 7,
      logo: pic7,
      name: "pic7",
    }
  ];
  return (
    <div
      name="Memories"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-pink-500 text-3xl font-bold mb-5">Memories</h1>
        <span className=" underline font-semibold">Click to View Picture</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-5 px-4 md:px-0">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] w-[310px] md:h-[280px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer md:hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[350px] h-[200px] p-1 border-[2px]"
                alt=""
              />
              <div>
                <div className="px-4 font-bold text-xl mb-2"></div>
              </div>
              <div className=" px-7 py-4 space-x-6 justify-around">
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