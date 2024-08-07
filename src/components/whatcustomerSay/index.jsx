// import { FaCircleArrowRight } from "react-icons/fa6";
// import { FaCircleArrowLeft } from "react-icons/fa6";

import React from "react";
import { FaStar } from "react-icons/fa";
import customerSayImage from "../../assets/images/customerSayImage.png";

// Define the data array before the component function
const data = [
  {
    img: customerSayImage,
    review:
      "Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam rhoncus amet at lobortis nec.",
    name: "Lora Okeke",
    rating: "3.0",
  },
  {
    img: customerSayImage,
    review:
      "Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam rhoncus amet at lobortis nec.",
    name: "Lora Okeke",
  },
  {
    img: customerSayImage,
    review:
      "Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam rhoncus amet at lobortis nec.",
    name: "Lora Okeke",
    rating: "3.0",
  },
  {
    img: customerSayImage,
    review:
      "Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam rhoncus amet at lobortis nec.",
    name: "Lora Okeke",
    rating: "3.0",
  },
];

function WhatCustomersSay() {
  return (
    <div className="bg-custom-background-pink justify-center m-auto py-10 px-6">
        <p className="font-bold text-xl flex justify-center mb-8">What Our <span className="text-custom-red"> Customers </span> Say</p>
      <div className="flex flex-row justify-center gap-4">
        {data.map((d, index) => (
          <div key={index} className="review-card bg-custom-background-white h-[200px] w-[250px] rounded-xl text-custom-black-text px-4 py-4">
            <div className="review-img flex flex-row justify-between">
              <img src={d.img} alt={d.name}  className="w-12 h-12 object-cover rounded-full"/>
              <div className="flex flex-row gap-1">
                <FaStar className="text-yellow-500" />
                <span className="text-custom-black">{d.rating}</span>
              
              </div>
            </div>
            <div className="review-text">
              <p>{d.review}</p>
            </div>
            <div className="review-author text-custom-black">
              <p>{d.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatCustomersSay;
