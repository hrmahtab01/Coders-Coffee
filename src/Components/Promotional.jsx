import React from "react";
import promoimg from "../assets/coffee-white.png";
import Appstore from "../assets/website/app_store.png";
import playsote from "../assets/website/play_store.png";
import { motion } from "framer-motion";

const Promotional = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container">
        <div className="w-full h-96 bg-gray-200 rounded-lg grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 relative  lg:pb-0 overflow-hidden place-content-center">
          <div className="z-[999]  ">
            <img
              className="-left-[130px] -top-[80px] absolute -z-10 hidden lg:block"
              src={promoimg}
              alt=""
            />
            <img
              className="absolute -top-[328px] rotate-[301deg] left-[20rem] hidden lg:block"
              src="key.png"
              alt="keyboard "
            />
          </div>
          <div className="flex flex-col justify-around items-center ">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
              }}
              className="text-4xl font-bold text-black"
            >
              Download the app
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
              }}
              className="text-black text-base w-[340px] text-center mt-6"
            >
              Lorem ipsum dolor sit amet consedolor sit amet consectetur
              adipisicing elit. Officiis
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              className="flex mt-6 gap-4"
            >
              <img className="w-[170px]" src={Appstore} alt="app store" />
              <img className="w-[170px]" src={playsote} alt="play storre" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotional;
