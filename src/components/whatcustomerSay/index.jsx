// import { FaCircleArrowRight } from "react-icons/fa6";
// import { FaCircleArrowLeft } from "react-icons/fa6";



import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,  // Set to true if you want centered slides
    centerPadding: "60px",  // Adjust if necessary
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-custom-background-pink py-10 px-6">
      <p className="font-bold text-xl flex justify-center mb-8">
        What Our <span className="text-custom-red">Customers</span> Say
      </p>
      <div className="relative">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className="review-card bg-custom-background-white h-[200px] w-[250px] rounded-xl text-custom-black-text px-4 py-4"
            >
              <div className="review-img flex flex-row justify-between items-center">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div className="flex flex-row gap-1 items-center">
                  <FaStar className="text-custom-yellow" />
                  <span className="text-custom-black">
                    {d.rating ? d.rating : "N/A"}
                  </span>
                </div>
              </div>
              <div className="review-text mt-2">
                <p>{d.review}</p>
              </div>
              <div className="review-author text-custom-black mt-2">
                <p>{d.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default WhatCustomersSay;
