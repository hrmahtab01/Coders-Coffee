import React from "react";
import { motion } from "framer-motion";

const Map = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 space-x-20 space-y-5 place-content-center place-content-center">
          <div className="">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              className="text-black text-4xl font-bold max-w-[450px] "
            >
              Buy our products from anywhere
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
              }}
              className="flex gap-4"
            >
              <input
                className="bg-white  border-[2px] max-w-[150px] h-10 pl-3 text-black rounded-lg active:border-slate-950 mt-6"
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-white  border-[2px] max-w-[270px] h-10 pl-3 text-black rounded-lg active:border-slate-950 mt-6"
                type="email"
                placeholder="Email"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.7,
              }}
              className="flex gap-4"
            >
              <input
                className="bg-white  border-[2px] max-w-[270px] h-10 pl-3 text-black rounded-lg active:border-slate-950 mt-6"
                type="text"
                placeholder="County"
              />
              <input
                className="bg-white  border-[2px] max-w-[150px] h-10 pl-3 text-black rounded-lg active:border-slate-950 mt-6"
                type="text"
                placeholder="Zip Code"
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              type="button"
              className="bg-orange-400 py-2 px-16 lg:px-44 text-lg rounded-md font-normal hover:bg-orange-600 duration-300 mt-8"
            >
              Order Now
            </motion.button>
          </div>
          <div>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className="w-[500px] mt-4"
              src="map.png"
              alt="map image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
