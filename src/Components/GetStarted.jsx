import React from "react";

const GetStarted = () => {
  return (
    <section>
      <div className="paddings innerWidth">
        <div className="flexColCenter text-center gap-6 bg-blue-300 p-8 rounded-[10px] border-[6px] border-solid border-blue-600">
          <span className="primaryText text-white font-semibold">
            Get Started with Homyz
          </span>
          <span className="secondaryText text-grey-300">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon.
          </span>
          <button className="bg-[#5a73d7] border-2 border-solid border-white rounded-[10px] py-[0.6rem] px-[1.4rem] text-white text-sm font-normal transition ease-in duration-300 hover:scale-105">
            <a href="mailto:elmehdi021@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
