import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section>
      <div className="paddings innerWidth flexCenter justify-between mg:flex-col">
        {/* left side */}
        <div className=" flexColStart  gap-2 flex-1">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy To Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make you life better.
          </span>
          <div className="grid grid-cols-2 grid-rows-2  mt-8 gap-y-4 gap-x-6 items-start mg:w-full mg:grid-cols-1 mg:grid-rows-4">
            {/* first mode */}
            <div className="flexColCenter w-64 p-4 border-[0.8px] border-solid border-grey-100 rounded-md gap-4 transition duration-300 ease-in hover:scale-105 hover:shadow-xl hover:shadow-blue-400 mg:w-full">
              <div className="flexStart w-full gap-[1.6rem]">
                <div className="flexCenter p-[10px] bg-grey-400 rounded-md">
                  <MdCall size={25} className="fill-blue-100" />
                </div>
                <div className="flexColStart">
                  <span className="primaryText text-[1.1rem] font-semibold">
                    Call
                  </span>
                  <span className="secondaryText">021 123 145 14</span>
                </div>
              </div>
              <div className="flexCenter w-full bg-grey-400 text-blue-100 font-[600] text-[0.9rem] py-[0.6rem] px-[1.4rem] border-none rounded ease-in duration-300 hover:cursor-pointer hover:scale-110 hover:text-white hover:bg-blue-100">
                Call Now
              </div>
            </div>
            {/* second mode */}
            <div className="flexColCenter w-64 p-4 border-[0.8px] border-solid border-grey-100 rounded-md gap-4 transition duration-300 ease-in hover:scale-105 hover:shadow-xl hover:shadow-blue-400 mg:w-full">
              <div className="flexStart w-full gap-[1.6rem]">
                <div className="flexCenter p-[10px] bg-grey-400 rounded-md">
                  <BsFillChatDotsFill size={25} className="fill-blue-100" />
                </div>
                <div className="flexColStart">
                  <div className="primaryText text-[1.1rem] font-semibold">
                    Chat
                  </div>
                  <div className="secondaryText">021 123 145 14</div>
                </div>
              </div>
              <div className="flexCenter w-full bg-grey-400 text-blue-100 font-[600] text-[0.9rem] py-[0.6rem] px-[1.4rem] border-none rounded ease-in duration-300 hover:cursor-pointer hover:scale-110 hover:text-white hover:bg-blue-100">
                Chat Now
              </div>
            </div>
            {/* third mode */}
            <div className="flexColCenter w-64 p-4 border-[0.8px] border-solid border-grey-100 rounded-md gap-4 transition duration-300 ease-in hover:scale-105 hover:shadow-xl hover:shadow-blue-400 mg:w-full">
              <div className="flexStart w-full gap-[1.6rem]">
                <div className="flexCenter p-[10px] bg-grey-400 rounded-md">
                  <BsFillChatDotsFill size={25} className="fill-blue-100" />
                </div>
                <div className="flexColStart">
                  <div className="primaryText text-[1.1rem] font-semibold">
                    Video Call
                  </div>
                  <div className="secondaryText">021 123 145 14</div>
                </div>
              </div>
              <div className="flexCenter w-full bg-grey-400 text-blue-100 font-[600] text-[0.9rem] py-[0.6rem] px-[1.4rem] border-none rounded ease-in duration-300 hover:cursor-pointer hover:scale-110 hover:text-white hover:bg-blue-100">
                Video Call Now
              </div>
            </div>
            {/* fourth mode */}
            <div className="flexColCenter w-64 p-4 border-[0.8px] border-solid border-grey-100 rounded-md gap-4 transition duration-300 ease-in hover:scale-105 hover:shadow-xl hover:shadow-blue-400 mg:w-full">
              <div className="flexStart w-full gap-[1.6rem]">
                <div className="flexCenter p-[10px] bg-grey-400 rounded-md">
                  <HiChatBubbleBottomCenter
                    size={25}
                    className="fill-blue-100"
                  />
                </div>
                <div className="flexColStart">
                  <div className="primaryText text-[1.1rem] font-semibold">
                    Message
                  </div>
                  <div className="secondaryText">021 123 145 14</div>
                </div>
              </div>
              <div className="flexCenter w-full bg-grey-400 text-blue-100 font-[600] text-[0.9rem] py-[0.6rem] px-[1.4rem] border-none rounded ease-in duration-300 hover:cursor-pointer hover:scale-110 hover:text-white hover:bg-blue-100">
                Message Now
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter w-full flex-1">
          <div className="image-container">
            <img src="./contact.jpg" alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
