import React from "react";
import { IoIosMenu } from "react-icons/io";
import { motion } from "framer-motion";

const Main = ({sidebar ,Setsidebar}) => {
  return (
    <nav className="absolute  top-0 left-0 w-full pt-10 text-white z-40">
      <div className="container">
        <div className="flex justify-between items-center">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
            className="text-2xl font-semibold uppercase"
          >
            <span className="text-Primary">CODERS </span>COFFEE.
          </motion.h2>
          <motion.div
          onClick={()=>Setsidebar(!sidebar)}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
          >
            <IoIosMenu className="text-3xl cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Main;
