import React from "react";
import { motion } from "framer-motion";

const Items = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container">
        <div className=" flex justify-center flex-col items-center ">
          <motion.h2 
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{
             type: "spring",
             stiffness: 100,
             damping: 10,
             delay: 0.7,
           }}
          className="text-black text-4xl font-semibold text-center">
            Fresh and <span className="text-Primary">Tasty coffee</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale:0 }}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
          className="text-black max-w-[600px] text-center mt-6 text-base font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex
            dolorem fuga.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center min-h-[600px] lg:space-x-24">
          <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{
             type: "spring",
             stiffness: 100,
             damping: 10,
             delay: 0.5,
           }}
          className="flex flex-col justify-center items-center">
            <img
              className=" hover:scale-110 duration-300 w-[350px]"
              src="black-coffee.png"
              alt="black coffee"
            />
            <h3 className="text-Primary text-3xl font-medium">Black Coffee</h3>
            <p className="text-black text-base font-normal mt-4 text-center">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>
          <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{
             type: "spring",
             stiffness: 100,
             damping: 10,
             delay: 0.7,
           }}
          className="flex flex-col justify-center items-center">
            <img
              className=" hover:scale-110 duration-300 w-[350px]"
              src="hot-coffee.png"
              alt="black coffee"
            />
            <h3 className="text-Primary text-3xl font-medium">Hot Coffee</h3>
            <p className="text-black text-base font-normal mt-4 text-center">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>
          <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{
             type: "spring",
             stiffness: 100,
             damping: 10,
             delay: 0.9,
           }}
          className="flex flex-col justify-center items-center">
            <img
              className=" hover:scale-110 duration-300 w-[350px]"
              src="black-coffee.png"
              alt="black coffee"
            />
            <h3 className="text-Primary text-3xl font-medium">Cold Coffee</h3>
            <p className="text-black text-base font-normal mt-4 text-center">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Items;
