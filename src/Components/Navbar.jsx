import React, { useState } from "react";
import Main from "./Main";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [sidebar,Setsidebar]=useState(false)
  return (
    <>
      <main>
        <section className="relative min-h-[750px] w-full">
          <div className="container">
            <Main sidebar={sidebar} Setsidebar={Setsidebar} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
              <div className="text-LightOrange mt-[100px] md:mt-0 space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1,
                  }}
                  className="text-7xl font-bold leading-tight ml-14"
                >
                  Blvck Tumbler
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1.2,
                  }}
                  className="relative "
                >
                  <div className="relative z-10 space-y-4 mt-20">
                    <h2 className="text-2xl">Black Lifestyle Lovers,</h2>
                    <p className="text-sm opacity-55 leading-loose">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore libero suscipit autem, repudiandae error dicta
                      velit earum quo itaque explicabo laborum illum voluptatum
                      ,
                    </p>
                  </div>
                  <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25"></div>
                </motion.div>
              </div>
              <div className="relative">
                <motion.img
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }}
                  src="hero.png"
                  alt="banner img"
                  className="relative z-40 h-[400px] md:h-[700px] img-shadow"
                />
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.8,
                  }}
                  className="h-[180px] w-[180px] absolute top-24 -right-16 border-Primary rounded-full z-10 border-[20px]"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.8,
                  }}
                  className="absolute -top-20 left-[200px] z-[1]"
                >
                  <h1 className=" text-[140px] scale-150 font-bold text-gray-950/40 leading-none">
                    Blvck Tumbler
                  </h1>
                </motion.div>
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1.2,
                  }}
                  className="text-LightOrange mt-[100px] md:mt-0 space-y-4"
                >
                  <h1 className=" hidden text-7xl font-bold leading-tight ml-14">
                    Blvck Tumbler
                  </h1>
                  <div className="relative ">
                    <div className="relative z-10 space-y-4 mt-48">
                      <h2 className="text-2xl">Blvck Tumbler</h2>
                      <p className="text-sm opacity-55 leading-loose">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore libero suscipit autem, repudiandae error dicta
                        velit earum quo itaque explicabo.
                      </p>
                    </div>
                    <div className="absolute -top-6 -right-10 w-[250px] h-[180px] bg-gray-700/10"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {sidebar && (

          <motion.div initial={{x:"100%"}} whileInView={{x:0}} className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-r from-Primary/80 to-PrimaryDark/80 backdrop-blur-sm z-10">
            <div className="w-full h-full flex justify-center items-center">
              <div className=" flex flex-col justify-center items-center gap-6 text-white">
                <div className="w-[2px] h-[70px] bg-white"></div>
                <div className="inline-block p-2 border rounded-full cursor-pointer border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 border rounded-full cursor-pointer border-white">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="inline-block p-2 border rounded-full cursor-pointer border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="w-[2px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
          )}
        </section>
      </main>
    </>
  );
};

export default Navbar;
