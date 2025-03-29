"use client";
import React from "react";
import { motion } from "motion/react";
import { menuData } from "@/Data/Menu";

const Night = () => {
  const smallCategory = menuData.find(
    (category) => category.category === "Smaller"
  );
  const biggerCategory = menuData.find(
    (category) => category.category === "Bigger"
  );
  const middleCategory = menuData.find(
    (category) => category.category === "Middle"
  );
  const sweetCategory = menuData.find(
    (category) => category.category === "Sweet"
  );
  return (
    <div
      id="evening"
      className="h-full w-full bg-background  flex flex-col items-center justify-center"
    >
      {/* DAY SECTION */}
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="grid py-[5rem] h-full w-full lg:grid-cols-3 gap-5 bg-secondary/5 "
      >
        <div className="flex items-center justify-center  h-full">
          <motion.img
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3 }}
            src="/outside.png"
            className="  w-100 lg:w-110 flower2"
            alt="nice food from freja cafe"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-5xl text-center w-full font-bold text-foreground">
            FREJAS NIGHTIME
          </h1>

          <h2 className="text-2xl text-foreground/50">Tis-Sondag: 09 - 16</h2>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <motion.img
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.3 }}
            src="./wine.png"
            className="  w-110 lg:w-110  flower  "
            alt=""
          />
        </div>
      </motion.div>
      <motion.div className="grid lg:grid-cols-2 w-full h-full py-10 menuborder">
        <div className="flex flex-col px-10 pb-10">
          <div className=" lg:h-[32rem] xl:h-[25rem] px-10 flex pb-[2rem] flex-col ">
            <h1 className="text-4xl lg:text-6xl text-foreground pb-10">
              {middleCategory.category}
            </h1>
            {middleCategory.items.map((item) => (
              <div
                className="flex w-full items-center pb-5 justify-between"
                key={item.name}
              >
                <h2 className="text-foreground text-sm lg:text-lg font-bold">
                  {item.name}
                </h2>
                <h2 className=" ml:4 text-sm lg:text-lg">{item.price}/kr</h2>
              </div>
            ))}
          </div>
          <div className=" px-10 flex pb-[0rem] flex-col ">
            <h1 className="text-4xl lg:text-6xl text-foreground pb-10">
              {biggerCategory.category}
            </h1>
            {biggerCategory.items.map((item) => (
              <div
                className="flex w-full items-center pb-5 justify-between"
                key={item.name}
              >
                <h2 className="text-foreground text-sm lg:text-lg font-bold">
                  {item.name}
                </h2>
                <h2 className=" ml:4 text-sm lg:text-lg">{item.price}/kr</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col px-10">
          <div className="lg:h-[25rem] px-10 flex pb-[0rem] flex-col">
            <h1 className="text-4xl lg:text-6xl text-foreground pb-10">
              {smallCategory.category}
            </h1>
            {smallCategory.items.map((item) => (
              <div
                className="flex w-full items-center pb-5 justify-between"
                key={item.name}
              >
                <h2 className="text-foreground text-sm lg:text-lg font-bold">
                  {item.name}
                </h2>
                <h2 className=" ml:4 text-sm lg:text-lg">{item.price}/kr</h2>
              </div>
            ))}
          </div>

          <div className="  px-10 flex pb-[0rem] flex-col ">
            <h1 className="text-4xl lg:text-6xl text-foreground pb-10">
              {sweetCategory.category}
            </h1>
            {sweetCategory.items.map((item) => (
              <div
                className="flex w-full items-center pb-5 justify-between"
                key={item.name}
              >
                <h2 className="text-foreground text-sm lg:text-lg font-bold">
                  {item.name}
                </h2>
                <h2 className=" ml:4 text-sm lg:text-lg">{item.price}/kr</h2>
              </div>
            ))}
          </div>
          <div className="pt-10">
            <h2 className="text-right">vid allergi fraga personalen!</h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Night;
