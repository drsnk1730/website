import Footer from "../layout/Footer";
import { Card } from "antd";
import Header2 from "../layout/Header2";
import honorsData from "../data/honorsData.json";

import image1 from "../assets/honors/Group 708.png";
import image2 from "../assets/honors/Group 709.png";
import image3 from "../assets/honors/Group 710.png";
import awards from "../assets/honors/awards.png";

export default function Honors() {
  const { academicAchievements, industryTraining } = honorsData;

  return (
    <>
      <Header2 />
      <div className="pl-6 lg:pl-10">
        <div className="text-2xl lg:text-4xl text-primaryBlue whitespace-nowrap font-semibold">Honors</div>
        <div className="h-[3px] bg-primaryBlue w-20 mt-[2px]"></div>
      </div>
      <div className="w-full flex pt-10 justify-center items-center gradienttext heading">
        ACADEMIC ACHIEVEMENTS & AWARDS
      </div>
      <div className="w-full flex justify-center items-center">
        <hr className="self-center bg-primaryBlue mb-10 h-[3px] w-1/2 lg:w-[16%]" />
      </div>
      <div className="w-full flex flex-wrap px-2 items-center justify-around">
        {academicAchievements.map((item, index) => (
          <Card key={index} className="w-full lg:w-[30%] mb-10 hover:border-primaryRed transition-all duration-150">
            <div className="w-full flex justify-center items-center pt-0 pb-4 text-xl text-primaryRed">{item.year}</div>
            <div className="text-center px-5">
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="w-full flex pt-10 justify-center items-center gradienttext heading">
        INDUSTRY TRAINING & COURSE
      </div>
      <div className="w-full flex justify-center items-center">
        <hr className="self-center bg-primaryBlue mb-10 h-[3px] w-[16%]" />
      </div>
      <div className="w-full flex flex-wrap px-2 items-center justify-around">
        {industryTraining.map((item, index) => (
          <Card key={index} className="w-full lg:w-[30%] mb-10 hover:border-primaryRed transition-all duration-150">
            <div className="w-full flex justify-center items-center pt-0 pb-4 text-xl text-primaryRed">{item.year}</div>
            <div className="text-center px-5">
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="pl-10">
        <div className="text-4xl text-primaryBlue font-semibold">CERTIFICATION</div>
        <div className="h-[3px] bg-primaryBlue w-20 mt-[2px]"></div>
      </div>
      <div className="w-full flex my-10 flex-wrap lg:flex-nowrap justify-around items-center ">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
      </div>
      <div className="w-full flex mb-10 px-2 justify-around items-center ">
        <img src={image3} alt="" />
      </div>

      <div className="pl-10">
        <div className="text-2xl lg:text-4xl text-primaryBlue whitespace-nowrap font-semibold">
          AWARDS
        </div>
        <div className="h-[3px] bg-primaryBlue w-20 mt-[2px]"></div>
      </div>
      <div className="w-full flex my-10 flex-wrap lg:flex-nowrap gap-5 lg:gap-0 justify-around items-center ">
        <img src={awards} alt="" />
        <img src={awards} alt="" />
        <img src={awards} alt="" />
      </div>

      <Footer />
    </>
  );
}