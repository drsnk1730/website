import Footer from "../layout/Footer";
import { Card } from "antd";
import Header2 from "../layout/Header2";
import projectData from "../data/projects.json";

export default function Projects() {
  return (
    <>
      <Header2 />
      <div className="pl-6 lg:pl-10">
        <div className="text-2xl lg:text-4xl text-primaryBlue whitespace-nowrap font-semibold">
          Projects
        </div>
        <div className="h-[3px] bg-primaryBlue w-40 mt-[2px]"></div>
      </div>
      <div className="w-full flex pt-10 mt-16 justify-center items-center gradienttext heading">
        Ongoing Project
      </div>
      <div className="justify-center items-center w-full flex">
        <hr className="self-center bg-primaryBlue mb-10 h-[3px] w-[6%]" />
      </div>
      <div className="w-full flex gap-x-6 flex-wrap justify-around">
        {projectData.projects.map((project, index) => (
          <Card className="w-full lg:w-[50%] mb-10 hover:border-primaryRed transition-all duration-150" key={index}>
            <div className="w-full flex justify-center items-center pt-0 pb-4 text-xl text-primaryRed">
              {project.title}
            </div>
            <div className="text-center text-gray-500 text-lg px-5">
              <p className="text-justify">
                {project.description}
              </p>
              <p>
                <span className="text-primaryBlue font-medium">Funding Source:</span> {project.fundingSource}, <span className="text-primaryBlue font-medium">Duration:</span> {project.duration}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
}
