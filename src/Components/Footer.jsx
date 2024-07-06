import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
  return (
    <>
      <footer className="py-12 bg-Primary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-content-center space-y-4 lg:space-y-0">
            <div>
              <h2 className="text-4xl font-bold">CODERS CAFE</h2>
              <p className="text-base font-normal max-w-[320px] mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
                ratione quidem libero, praesentium ab atque? Quidem maxime,
                numquam dolores
              </p>

              <a className="flex gap-3 items-center mt-7" href="#">
                <BsFillTelephoneFill />
                +1 (123) 456-7890
              </a>

              <a className="flex gap-3 items-center mt-3" href="#">
                <FaMapLocationDot />
                Mirpur, Dhaka
              </a>
            </div>
            <div className="flex gap-5">
              <div>
                <h2 className="text-4xl font-bold">Quick Links</h2>
                <ul className="mt-7 flex flex-col gap-3">
                  <li className="text-base font-semibold">
                    <a href="#">Home</a>
                  </li>
                  <li className="text-base font-semibold">
                    <a href="#">About</a>
                  </li>
                  <li className="text-base font-semibold">
                    <a href="#">Contact us</a>
                  </li>
                  <li className="text-base font-semibold">
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-4xl font-bold">Quick Links</h2>
                <ul className="mt-7 flex flex-col gap-3">
                  <li className="text-base font-semibold">
                    <a href="#">Home</a>
                  </li>
                  <li className="text-base font-semibold">
                    <a href="#">About</a>
                  </li>
                  <li className="text-base font-semibold">
                    <a href="#">Contact us</a>
                  </li>
                  <li className="text-base font-semibold">
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold">Follow Us</h2>
              <div className="flex gap-2 mt-6">
                <a href="#">
                  <FaFacebookF className="w-8 h-8 hover:scale-105 duration-200 " />
                </a>
                <a href="#">
                  <CiInstagram className="w-8 h-8 hover:scale-105  duration-200" />
                </a>
                <a href="#">
                  <SlSocialYoutube className="w-8 h-8 hover:scale-105  duration-200" />
                </a>
                <a href="#">
                  <FaGoogle className="w-8 h-8 hover:scale-105  duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
