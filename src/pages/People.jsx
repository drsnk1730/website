import React, { useState } from "react";
import { Card, Divider } from "antd";
import Footer from "../layout/Footer";
import Header2 from "../layout/Header2";
import peopleData from "../data/peopleData.json";
import { Link } from "react-router-dom";

import people from "../assets/people/people.svg";
import linkedin from '../assets/people/linkedin.png';
import gmail from '../assets/people/gmail.png';

// import neelakandanImage from '../assets/people/neelakandan.png';
// import shineHenryImage from '../assets/people/shine_henry.png';
import indhumathiImage from '../assets/people/indhumathi.png';
// import premkumarImage from '../assets/people/premkumar.png';
// import thamaraiselvanImage from '../assets/people/thamaraiselvan.png';

import neelakandanImage from '../assets/people/edited/neelakandan.jpg';
import shineHenryImage from '../assets/people/edited/shinehenry.jpg';
import premkumarImage from '../assets/people/edited/premkumar.jpg';
import thamaraiselvanImage from '../assets/people/edited/thamaraiselvan.jpg';

export default function People() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const getImage = (name) => {
    if (name === "neelakandanImage") {
      return neelakandanImage;
    }
    if (name === "shineHenryImage") {
      return shineHenryImage;
    }
    if (name === "indhumathiImage") {
      return indhumathiImage;
    }
    if (name === "premkumarImage") {
      return premkumarImage;
    }
    if (name === "thamaraiselvanImage") {
      return thamaraiselvanImage;
    }
    return people;
  }

  const renderPeople = (title, members, startIndex) => (
    <>
      <div className="pl-10 mt-14 mb-5">
        <div className="text-2xl lg:text-4xl text-primaryBlue whitespace-nowrap font-semibold">
          {title}
        </div>
        <div className="h-[3px] bg-primaryBlue w-5 mt-[2px]"></div>
      </div>
      <div className="flex justify-around items-center flex-wrap w-full gap-3">
        {members.map((member, index) => (
          <div
            key={index}
            onMouseOver={() => setFlippedIndex(startIndex + index)}
            onMouseLeave={() => setFlippedIndex(null)}
          >
            {/* {flippedIndex === startIndex + index ? ( */}
            <Card
              className="rounded shadow-md h-full peopleCard p-0"
              id="card"
            >
              <div className="flex flex-col items-center h-full w-full">
                <div className="flex flex-col gap-10 items-center w-full">
                  <img src={getImage(member.imageUrl)} alt={member.name} className="w-full h-60 object-contain" />
                </div>
                <div>
                  <div className="flex flex-col justify-center items-center mt-5">
                    <p
                      className="text-lg whitespace-nowrap text-start font-medium text-primaryRed"
                    >
                      {member.name}
                    </p>
                    <div className="flex flex-col justify-center items-center text-primaryBlue font-semibold gap-2">
                      <div className="mt-2">
                        {member.position && (
                          <div className="flex items-center">
                            <div className="text-center w-full">
                              {member.position}
                            </div>
                          </div>
                        )}
                        {member.currentPosition && (
                          <div className="flex items-center">
                            <div className="text-center w-full">
                              {member.currentPosition}
                            </div>
                          </div>
                        )}
                        {member.education && (
                          <div className="flex items-center">
                            <div className="text-center w-full md:whitespace-nowrap">
                              {member.education}
                            </div>
                          </div>
                        )}
                        {member.education && (
                          <div className="flex items-center">
                            <div className="text-center w-full">
                              {member.university}
                            </div>
                          </div>
                        )}
                        {member.specialCase && (
                          <div className="flex items-center">
                            <Divider>Special Case</Divider>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-full gap-3 mt-4 -mb-4 ml-3">
                <Link to={member.linkedin}><img src={linkedin} alt="" className="size-5" /></Link>
                <Link to={"mailto:" + member.email}><img src={gmail} alt="" className="size-5" /></Link>
              </div>
            </Card>
            {/* ) : (
              <Card className="peopleCard">
                <div className="flex flex-col gap-10 items-center mt-6">
                  <img src={getImage(member.imageUrl)} alt={member.name} className="w-40 h-40 object-contain" />
                  <div>
                    <a href={`mailto:${member.email}`} className="text-lg">
                      {member.name}
                    </a>
                  </div>
                </div>
              </Card>
            )} */}
          </div>
        ))}
      </div>
    </>
  );

  return (
    <>
      <Header2 />
      <div className="container mx-auto py-16">
        {renderPeople("People", peopleData.people, 0)}
        {renderPeople("Researchers", peopleData.Researchers, 1)}
        {renderPeople("Master Students", peopleData.graduateStudents, 5)}
        {/* {renderPeople("Alumni - Students", peopleData.aluminiStudents, 8)} */}
        {/* {renderPeople("Alumni - Researchers", peopleData.aluminResearcher, 12)} */}
      </div>
      <Footer />
    </>
  );
}
