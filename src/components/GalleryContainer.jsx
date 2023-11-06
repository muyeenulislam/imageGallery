"use client";
import React, { useState } from "react";
import Images from "./Images";
import Image from "next/image";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const GalleryContainer = () => {
  const [images, updateImages] = useState(Images);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateImages(items);
  }

  return (
    <div className="bg-white rounded-xl">
      <div className="border-2 border-b-[rgb(238, 243, 245)] border-t-transparent border-r-transparent border-l-transparent h-[50px] font-bold text-2xl pl-6 flex items-center">
        Gallery
      </div>
      {/* <div className="grid grid-cols-5 gap-3 p-12">
        {Images.map((image, index) => (
          <div
            key={image.id}
            className={`${
              index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
            } relative border-gray-400 border-2 border-[rgb(238, 243, 245)] rounded-xl`}
            draggable
          >
            <Image
              src={image.image}
              alt="image"
              className="imageStyle rounded-xl"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        ))}
      </div> */}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="images">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-5 gap-3 p-12"
            >
              {images.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`${
                            index === 0
                              ? "col-span-2 row-span-2"
                              : "col-span-1 row-span-1"
                          } relative border-gray-400 border-2 border-[rgb(238, 243, 245)] rounded-xl`}
                        >
                          <Image
                            src={item.image}
                            alt="image"
                            className="imageStyle rounded-xl"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      );
                    }}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default GalleryContainer;
