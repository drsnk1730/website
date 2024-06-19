import ManImage from "../assets/home/manImage.png";
import arrow from "../assets/home/svgs/arrows.svg";
import leftArrow from "../assets/home/svgs/achiLeft.svg";
import rightArrow from "../assets/home/svgs/achiRight.svg";
import bigData from "../assets/home/bigData.png";
import cloudComputing from "../assets/home/cloud-16.png";
import machineLearning from "../assets/home/machineLearning.png";
import dataScience from "../assets/home/dataScience.png";
import certificate1 from "../assets/home/achievement/achi2.png";
import certificate2 from "../assets/home/achievement/achi3.png";
import certificate3 from "../assets/home/achievement/achi4.png";
import certificate4 from "../assets/home/achievement/achievement1.png";
import certificate5 from "../assets/home/achievement/gnu.png";
import certificate6 from "../assets/home/achievement/hgu.png";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import backgGround from "../assets/home/image-21.png";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import homeData from '../data/homeData.json';

const getImage = (imgName) => {
  switch (imgName) {
    case 'bigData':
      return bigData;
    case 'cloudComputing':
      return cloudComputing;
    case 'machineLearning':
      return machineLearning;
    case 'dataScience':
      return dataScience;
    case 'certificate1':
      return certificate1;
    case 'certificate2':
      return certificate2;
    case 'certificate3':
      return certificate3;
    case 'certificate4':
      return certificate4;
    case 'certificate5':
      return certificate5;
    case 'certificate6':
      return certificate6;
    default:
      return null;
  }
};

export default function Home() {
  const [arrData, setArrData] = useState(
    homeData.achievements.map((item) => ({
      ...item,
      img: getImage(item.img),
      currentCount: 0
    }))
  );

  const [arrData2, setArrData2] = useState(
    homeData.additionalAchievements.map((item) => ({
      ...item,
      currentCount: 0
    }))
  );

  const arrDataRefs = useRef(arrData.map(() => React.createRef()));
  const arrData2Refs = useRef(arrData2.map(() => React.createRef()));

  const animateCount = (arr, setArr, refs) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const targetPercentage = arr[index].percentage;
            const intervalId = setInterval(() => {
              setArr((currentItems) => {
                const newItems = [...currentItems];
                if (newItems[index].currentCount < targetPercentage) {
                  newItems[index].currentCount += 1;
                } else {
                  clearInterval(intervalId);
                }
                return newItems;
              });
            }, 40);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  };

  useEffect(() => {
    animateCount(arrData, setArrData, arrDataRefs);// eslint-disable-next-line
  }, [arrData.length]);

  useEffect(() => {
    animateCount(arrData2, setArrData2, arrData2Refs);// eslint-disable-next-line
  }, [arrData2.length]);

  const imageArr = homeData.certificates.map((img) => getImage(img));

  return (
    <div
      className="flex flex-col"
      style={{
        backgroundImage: `url(${backgGround})`,
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <div className="flex w-full h-full lg:py-0 py-10 lg:h-[550px]">
        <div className="w-full h-full flex gap-14 lg:gap-0 lg:flex-nowrap flex-wrap justify-around items-center">
          <div className="flex flex-col gap-7 w-full lg:w-1/2 px-5 lg:pl-20">
            <div className="text-6xl text-white leading-[60px] font-semibold">
              {homeData.heroSection.title}
            </div>
            <div className="text-white font-extralight text-sm">
              {homeData.heroSection.description.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
            <div
              onClick={() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
              }}
              className="cursor-pointer text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300 ease-in-out text-white font-semibold"
            >
              {homeData.heroSection.buttonText}
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
            <img width={300} src={ManImage} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white pt-10">
        <div className="flex w-full flex-wrap lg:flex-nowrap lg:justify-normal lg:items-start justify-center items-center">
          <div className="px-8 flex flex-col gap-5 bg-bgGray py-5">
            <div>
              <div className="text-4xl text-primaryBlue font-semibold">
                {homeData.meMyself.title}
              </div>
              <div className="h-[6px] bg-primaryBlue w-28 mt-[2px]"></div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-base text-grayText">
                {homeData.meMyself.name}
              </div>
              <div className="text-base text-grayText">
                {homeData.meMyself.position}
              </div>
              <div className="text-base text-grayText">
                {homeData.meMyself.department}
              </div>
              <div className="text-base text-grayText">
                {homeData.meMyself.college}
              </div>
              <div className="flex pt-10 pl-6">
                <Link
                  to={"/honors"}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="relative text-xl text-primaryBlue font-bold"
                >
                  {homeData.meMyself.achievementsText}
                  <div className="-top-1 -left-6 absolute pb-2 pr-2">
                    <img src={leftArrow} alt="" />
                  </div>
                  <div className="top-[6px] -right-6 absolute pt-2 pl-2">
                    <img src={rightArrow} alt="" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-between py-3 items-center">
            <div className="w-full flex justify-center items-center flex-wrap">
              {arrData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex pl-8 lg:pl-20 flex-col gap-2 w-full justify-center lg:w-1/2 p-5"
                    ref={arrDataRefs.current[index]}
                  >
                    <div className="flex gap-4">
                      <div className="p-[1px] border-[2px] border-primaryBlue rounded">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="flex flex-col">
                        <div className="text-primaryBlue text-base font-semibold">
                          {item.currentCount}%
                        </div>
                        <div className="text-grayText text-sm font-semibold">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr className="w-[95%] self-center border-[1px] border-gray-300" />
            <div className="flex justify-around flex-wrap lg:flex-nowrap gap-5 lg:gap-0 pt-10 items-center w-full">
              {arrData2.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 items-center"
                    ref={arrData2Refs.current[index]}
                  >
                    <div className="text-4xl text-primaryBlue font-semibold">
                      {item.title.includes("WORLD’S TOP SCIENTIST") ||
                        item.title.includes("PROFESSIONAL SOCIETY MEMBERSHIP")
                        ? `${item.currentCount}`
                        : `${item.currentCount}%`}
                    </div>
                    <div className="text-sm text-grayText text-center font-semibold">
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className="w-[95%] self-center border-[1px] border-gray-300 mt-10" />
        <div className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-10 lg:gap-0 items-center py-5 lg:py-10">
          {imageArr.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center w-full lg:w-1/4"
              >
                <img src={item} alt="logo" className="w-20 h-20 object-contain" />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}