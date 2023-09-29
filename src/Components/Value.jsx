import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../Assets/accordion";

const Value = () => {
  return (
    <section>
      <div className="paddings innerWidth flexCenter mg:flex-col">
        {/* left Side */}
        <div className="flex-1">
          <div className="image-container border-8 border-solid border-grey-100">
            <img src="./value.png" alt="" className="h-full w-full" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart flex-1 gap-2">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better
          </span>

          <Accordion
            className="mt-8 border-none"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, id) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`bg-white border-[0.8px] border-solid border-grey-100 rounded-lg overflow-hidden mb-[20px] ${className}`}
                  key={id}
                  uuid={id}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="bg-white p-4 w-full flexCenter justify-between cursor-pointer">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter p-[10px] bg-grey-400 rounded-md">
                        {item.icon}
                      </div>
                      <span className="primaryText text-[1.1rem] mx:text-[0.8rem]">
                        {item.heading}
                      </span>
                      <div className="flexCenter p-[10px] bg-grey-400 rounded-md">
                        <MdOutlineArrowDropDown
                          size={20}
                          className="fill-blue-100"
                        />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
