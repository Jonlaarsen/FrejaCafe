"use client";
import React from "react";
import { motion } from "motion/react";
import { menuData } from "@/Data/Menu";

const Day = () => {
  const frukostCategory = menuData.find(
    (category) => category.category === "Frukost & Brunch"
  );
  const snacksCategory = menuData.find(
    (category) => category.category === "Snacks"
  );
  const kakorCategory = menuData.find(
    (category) => category.category === "Kakor"
  );

  return (
    <>
      <motion.div
        id="day"
        // initial={{ opacity: 0.8 }}
        // whileInView={{ opacity: 1 }}
        // viewport={{ once: true, amount: 0.3 }}
        className="w-full h-full bg-background/80 "
      >
        {/* DAY SECTION */}
        <motion.div
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="grid py-[5rem] h-full w-full lg:grid-cols-3 gap-5 "
        >
          <div className="flex items-center justify-center h-full">
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
              FREJAS DAYTIME
            </h1>

            <h2 className="text-2xl text-foreground/50">Tis-Sondag: 09 - 16</h2>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <motion.img
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.3 }}
              src="./food4.png"
              className="  w-110 lg:w-110  flower  "
              alt=""
            />
          </div>
        </motion.div>

        {/* MENY SECTION */}

        <div className="grid lg:grid-cols-2 w-full h-full menuborder bg-secondary/5 py-10">
          <motion.div className=" px-10 mb-10 lg:mb-0 flex flex-col">
            <h1 className="text-4xl lg:text-6xl text-foreground pb-10">
              {frukostCategory.category}
            </h1>
            {frukostCategory.items.map((item) => (
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
          </motion.div>
          <motion.div className=" px-10 flex flex-col">
            <div className=" px-10 flex pb-[3rem] flex-col">
              <h1 className="text-4xl lg:text-6xl text-foreground pb-10">
                {snacksCategory.category}
              </h1>
              {snacksCategory.items.map((item) => (
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
            <div className=" px-10 flex flex-col">
              <h1 className="text-4xl lg:text-6xl text-foreground pb-10">
                {kakorCategory.category}
              </h1>
              {kakorCategory.items.map((item) => (
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
              <div className="pt-10">
                <h2 className="text-right">vid allergi fraga personalen!</h2>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Day;

{
  /* <div className=" bg-[url('/outside.png')] bg-cover bg-center w-full h-full">
          hi
        </div> */
}
