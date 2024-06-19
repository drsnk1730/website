import React from "react";
import Footer from "../layout/Footer";
import { Card } from "antd";
import Header2 from "../layout/Header2";
import opportunitiesData from "../data/opportunitiesData.json";

export default function Opportunities() {
  const { opportunities } = opportunitiesData;

  return (
    <>
      <Header2 />
      <div className="pl-6 lg:pl-10">
        <div className="text-2xl lg:text-4xl text-primaryBlue whitespace-nowrap font-semibold">
          Opportunities
        </div>
        <div className="h-[3px] bg-primaryBlue w-40 mt-[2px]"></div>
      </div>
      <div className="w-full flex flex-wrap mt-20 px-2 items-center justify-around">
        {opportunities.map((item, index) => (
          <Card key={index} className="w-full lg:w-[50%] mb-10 hover:border-primaryRed transition-all duration-150">
            <div className="w-full flex justify-center items-center pt-0 pb-4 text-xl text-primaryRed">
              {item.title}
            </div>
            <div className="text-center text-gray-500 text-lg px-5">
              <p>
                {item.description.split(" ").map((word, i) => (
                  word.includes("drsnk1730@gmail.com") ? (
                    <span key={i} className="text-[#1849A9]">
                      <a href="mailto:drsnk1730@gmail.com">drsnk1730@gmail.com </a>
                    </span>
                  ) : (
                    `${word} `
                  )
                ))}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <div className="h-64"></div>
      <Footer />
    </>
  );
}