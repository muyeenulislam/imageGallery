"use client";
import React from "react";
import Images from "./Images";
import Image from "next/image";

const GalleryContainer = () => {
  return (
    <div className="bg-white rounded-xl">
      <div className="border-2 border-b-[rgb(238, 243, 245)] border-t-transparent border-r-transparent border-l-transparent h-[50px] font-bold text-2xl pl-6 flex items-center">
        Gallery
      </div>
      <div className="grid grid-cols-5 gap-3 p-12">
        {Images.map((image, index) => (
          <div
            key={image.id}
            className={`${
              index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
            } relative border-gray-400 border-2 border-[rgb(238, 243, 245)] rounded-xl`}
          >
            <img
              src={image.image}
              alt="image"
              className="imageStyle rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryContainer;
