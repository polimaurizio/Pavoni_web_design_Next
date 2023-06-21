import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { auto } from "@popperjs/core";

const CustomCard = ({ cardContent }) => {
  return (
    <div
      className={
        "grid grid-cols-[repeat(auto-fit,minmax(calc(6rem+10vw),1fr))] gap-3 sm:gap-2 md:gap-5 mx-10 text-montserrat font-light md:text-sm sm:text-sm text-sm"
      }
    >
      {cardContent.map((content, index) => (
        <div
          key={index}
          className="max-w-sm mt-20 sm:mx-4 mx-auto focus:outline-none"
        >
          <Card
            imgSrc={content.img}
            className={"h-full bg-[#f5f4f4] cursor-pointer"}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {content.title}
            </h5>
            <p className="hidden sm:block text-gray-700 dark:text-gray-400 font-montserrat font-normal">
              {content.text}
            </p>
            <div className={"flex w-full justify-end pt-2"}>
              <button
                className={"border hover:bg-gray-200 rounded-full py-2 px-4"}
              >
                Aggiungi
              </button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CustomCard;
