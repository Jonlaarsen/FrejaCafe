"use client";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="h-full pb-10 w-full items-center justify-center flex flex-col text-foreground bg-background/80">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 1 }}
          animate={{ opacity: 1, y: 200, scale: 1.2 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-full text-7xl lg:text-[10rem] 2xl:text-[14rem] h-[20rem] grid grid-cols-5 text-center items-center justify-center"
        >
          <div>
            <h1>F</h1>
          </div>
          <div>
            <h1></h1>
          </div>
          <div>
            <h1>E</h1>
          </div>
          <div>
            <h1></h1>
          </div>
          <div>
            <h1>A</h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 1 }}
          animate={{ opacity: 1, y: -120, scale: 1.2 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-full text-7xl lg:text-[10rem] 2xl:text-[14rem] h-[20rem] grid grid-cols-5 text-center items-center justify-center"
        >
          <div>
            <h1></h1>
          </div>
          <div>
            <h1>R</h1>
          </div>
          <div>
            <h1></h1>
          </div>
          <div>
            <h1>J</h1>
          </div>
          <div>
            <h1></h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="flex text-secondary items-center justify-center text-xl lg:text-4xl uppercase"
        >
          cafe och vinbar
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
