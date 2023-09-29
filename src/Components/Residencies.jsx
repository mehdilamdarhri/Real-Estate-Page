import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../Assets/slider.json";
import { sliderSettings } from "../Assets/common";

const Residencies = () => {
  return (
    <section>
      <div className="paddings innerWidth relative overflow-hidden">
        <div className="flexColStart mb-8 mw:items-center">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper className="overflow-visible" {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart p-4 gap-[0.6rem] rounded-lg w-fit m-auto transition duration-300 ease-in hover:cursor-pointer hover:scale-105 hover:bg-gradient-to-b from-grey-300 to-[#dbeafe] hover:shadow-xl hover:shadow-blue-400">
                <img className="w-full max-w-[15rem]" src={card.image} alt="" />

                <span className="secondaryText text-[1.2rem] font-semibold">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText text-[1.5rem]">{card.name}</span>
                <span className="secondaryText text-[0.7rem] w-60">
                  {card.detail}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter absolute gap-4 right-0 -top-16 mw:static">
      <button
        className="text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-500 border-none rounded-[5px] bg-grey-400 cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        &lt;
      </button>
      <button
        className="text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-500 border-none rounded-[5px] shadow-md bg-white cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        &gt;
      </button>
    </div>
  );
};
