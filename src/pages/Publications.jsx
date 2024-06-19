import Footer from "../layout/Footer";
import Header2 from "../layout/Header2";
import publicationsData from "../data/publications.json";
import { Card } from "antd";

import scopus from "../assets/publications/scopus.jpg";
import research from "../assets/publications/research.jpg";

export default function Publications() {

  return (
    <>
      <Header2 />
      <div className="pl-6 lg:pl-10 ">
        <div className="  text-2xl  lg:text-4xl  text-primaryBlue whitespace-nowrap font-semibold">Publications</div>
        <div className=" h-[3px] bg-primaryBlue w-20 mt-[2px] "></div>
      </div>
      <div className=" w-full flex text-2xl pt-10 mt-8 justify-center items-center gradienttext heading">
        SCI/SCIE Indexed -ARTICLES
      </div>
      <div className=" justify-center items-center w-full flex">
        <hr className=" self-center bg-primaryBlue mb-10 h-[3px] w-[6%]" />
      </div>
      <div className=" w-full flex flex-wrap px-2 items-center justify-around gap-3 mt-1">
        {
          publicationsData.sci.map((item, index) => {
            return (
              <Card key={index} className="w-3/4 px-5 md:px-10 hover:border-primaryBlue p-0">
                <div className=" flex flex-col md:flex-row justify-between gap-5">
                  <div className="md:w-[30%]">
                    <img src={research} alt="" className="size-52 rounded-md" />
                  </div>
                  <div className=" flex gap-2 md:w-[70%]">
                    <div className="pt-[2px] font-semibold hidden md:flex">
                      {index + 1}
                      <div>
                        {")"}
                      </div>
                    </div>
                    <p className="md:text-lg font-medium text-black w-full md:w-auto overflow-auto"><span className="md:hidden">{index + 1}) </span>{item}</p>
                  </div>
                </div>
              </Card>
            );
          })
        }
      </div>
      <div className=" w-full flex text-2xl  pt-10  mt-16 justify-center items-center gradienttext heading">
        SCOPUS Indexed -ARTICLES
      </div>
      <div className=" justify-center items-center w-full flex">
        <hr className=" self-center bg-primaryBlue mb-10 h-[3px] w-[6%]" />
      </div>
      <div className=" w-full flex flex-wrap px-2 items-center justify-around  mt-1">
        {
          publicationsData.scopus.map((item, index) => {
            return (
              <Card key={index} className="w-3/4 px-5 md:px-10 p-2 hover:border-orange-500">
                <div className=" flex flex-col md:flex-row justify-between gap-5">
                  <div className="md:w-[30%]">
                    <img src={scopus} alt="" className="md:size-40 rounded-md" />
                  </div>
                  <div className=" flex gap-2 md:w-[70%]">
                    <div className=" flex pt-[2px] font-semibold">
                      {index + 1}
                      <div>
                        {")"}
                      </div>
                    </div>
                    <p className="md:text-lg font-medium text-black overflow-auto">{item}</p>
                  </div>
                </div>
              </Card>
            );
          })
        }
      </div>
      <div className=" h-24"></div>
      <Footer />
    </>
  );
}
