"use client";
import React, { useState } from "react";
import Images from "./Images";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const GalleryContainer = () => {
  const [gridItems, setGridItems] = useState(Images);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const itemsCopy = [...gridItems];
    const [reorderedItem] = itemsCopy.splice(result.source.index, 1);
    itemsCopy.splice(result.destination.index, 0, reorderedItem);

    setGridItems(itemsCopy);
  };

  return (
    <div className="bg-white rounded-xl">
      <div className="border-2 border-b-[rgb(238, 243, 245)] border-t-transparent border-r-transparent border-l-transparent h-[50px] font-bold text-2xl pl-6 flex items-center">
        Gallery
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="grid" direction="both" spacing={8}>
          {(provided) => (
            <div
              className="grid grid-cols-5 gap-4 overflow-hidden p-8"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {gridItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      className={`${
                        index === 0 ? "col-span-2 row-span-2" : "col-span-1"
                      } border border-gray-200 rounded-xl`}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <img
                        src={item.image}
                        className="rounded-xl"
                        alt="image"
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default GalleryContainer;
