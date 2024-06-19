import academicQualification from "../assets/academics/academic_qualification_110624.png";
import academicExperience from "../assets/academics/academic_experience_110624.png";
import Footer from "../layout/Footer";
import Header2 from "../layout/Header2";
import academicData from '../data/academicData.json';

export default function Academics() {
  return (
    <>
      <Header2 />
      <div className="pl-6 lg:pl-10">
        <div className="text-xl lg:text-4xl text-primaryBlue whitespace-nowrap font-semibold">
          {academicData.academicQualification}
        </div>
        <div className="h-[3px] bg-primaryBlue w-60 mt-[2px]"></div>
      </div>
      <div className="w-full flex lg:px-0 px-5 py-20 justify-center items-center">
        <img src={academicQualification} alt="" className="w-full md:w-3/5" />
      </div>
      <div className="pl-6 lg:pl-10">
        <div className="text-xl lg:text-4xl text-primaryBlue whitespace-nowrap font-semibold">
          {academicData.academicExperience}
        </div>
        <div className="h-[3px] bg-primaryBlue w-60 mt-[2px]"></div>
      </div>
      <div className="w-full flex lg:px-0 px-5 py-20 justify-center items-center">
        <img src={academicExperience} alt="" className="w-full md:w-3/5" />
      </div>
      <Footer />
    </>
  );
}
