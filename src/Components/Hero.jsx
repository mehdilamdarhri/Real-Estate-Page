import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className=" text-white relative pb-8">
      <div className="paddings innerWidth flexCenter justify-around items-end mw:mt-8">
        {/* left side */}
        <div className="flexColStart gap-12">
          <div className="relative z-10 mw:text-[2.5rem] mw:leading-[3rem]">
            <div className="absolute top-[-10%] right-[28%] h-16 w-16 bg-gradient-to-l from-orange-100 to-orange-200 z-[-1] rounded-full" />
            <motion.h1
              initial={{ opacity: 0, y: "2rem" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, type: "spring" }}
              className="font-semibold text-[3.8rem] leading-[4rem]"
            >
              Discover
              <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>

          <div className="flexColStart">
            <span className="secondaryText">
              Find a variety of properties that suits you easily
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          <div className="bg-white rounded-md border-[3px] border-solid border-grey-100 py-2 px-4 flexCenter justify-between w-full">
            <HiLocationMarker className="fill-blue-100" size={25} />
            <input
              type="text"
              className="border-none outline-none text-black"
            />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter justify-between w-full mw:justify-center mw:gap-6">
            <div className="flexColCenter">
              <span className="text-[2rem] mw:text-[1.5rem]">
                <CountUp start={8800} end={9000} duration={4} />
                <span className="text-orange-300">+</span>
              </span>
              <span className="secondaryText mw:text-[0.8rem]">
                Premium Product
              </span>
            </div>
            <div className="flexColCenter">
              <span className="text-[2rem] mw:text-[1.5rem]">
                <CountUp start={1950} end={2000} duration={4} />
                <span className="text-orange-300">+</span>
              </span>
              <span className="secondaryText mw:text-[0.8rem]">
                Happy Customers
              </span>
            </div>
            <div className="flexColCenter">
              <span className="text-[2rem] mw:text-[1.5rem]">
                <CountUp end={28} />
                <span className="text-orange-300">+</span>
              </span>
              <span className="secondaryText mw:text-[0.8rem]">
                Award Winning
              </span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="image-container border-8 border-solid border-grey-200"
          >
            <img src="./hero-image.png" alt="" className="h-full w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
