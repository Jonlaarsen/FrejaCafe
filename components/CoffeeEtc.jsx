"use client";
import { menuData } from "@/Data/Menu";
import React from "react";
import { motion } from "motion/react";

const CoffeeEtc = () => {
  const coffeeCategory = menuData.find(
    (category) => category.category === "Coffee and Tea"
  );
  const extraCategory = menuData.find(
    (category) => category.category === "Extra"
  );

  return (
    <div className="w-full min-h-screen flex flex-col lg:grid lg:grid-cols-2 bg-background">
      {/* Left Side: Images */}
      <div className="flex flex-col w-full h-full bg-cover bg-center bg-fixed lg:bg-[url('/wine.png')] bg-no-repeat">
        <div className="flex flex-col items-center justify-center h-full w-full gap-10 bg-background/40 p-6 lg:p-12">
          {["drinkbord.png", "wines.png", "drink1.png", "beer.png"].map(
            (src, index) => (
              <motion.img
                key={index}
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                src={`./${src}`}
                className="w-3/4 md:w-1/2 lg:w-90 xl:w-110 object-contain flower"
                alt=""
              />
            )
          )}
        </div>
      </div>

      {/* Right Side: Menu */}
      <div className="flex flex-col items-center justify-center text-foreground w-full p-6 lg:p-12">
        {/* Coffee and Tea Section */}
        <section className="w-full max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-light text-center pb-8">
            {coffeeCategory.category}
          </h1>
          <div className="space-y-4">
            {coffeeCategory.items.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center text-lg border-b pb-2"
              >
                <h2 className="font-semibold">{item.name}</h2>
                <h2 className="text-right">{item.price} kr</h2>
              </div>
            ))}
          </div>
        </section>

        {/* Extra Section */}
        <section className="w-full max-w-2xl mt-12">
          <h1 className="text-3xl md:text-5xl font-light text-center pb-8">
            {extraCategory.category}
          </h1>
          <div className="space-y-4">
            {extraCategory.items.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center text-lg border-b pb-2"
              >
                <h2 className="font-semibold">{item.name}</h2>
                <h2 className="text-right">{item.price} kr</h2>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoffeeEtc;
