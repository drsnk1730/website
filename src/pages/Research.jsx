import React from 'react';
import Footer from "../layout/Footer";
import { Card } from "antd";
import Header2 from "../layout/Header2";
import jsonData from '../data/researchData.json';
import sci from "../assets/research/sci.png";
import scopus from "../assets/research/scopus.png";
import patent from "../assets/research/patent.png";
import google_scholar from "../assets/research/google_scholar.png";
import publon_citation from "../assets/research/publon_citation.png";
import scopus_citation from "../assets/research/scopus_citation.png";
import books from "../assets/research/books.png";

export default function Research() {

  const getImage = (name) => {
    if (name === "sci") {
      return sci;
    }
    if (name === "scopus") {
      return scopus;
    }
    if (name === "patent") {
      return patent;
    }
    if (name === "google_scholar") {
      return google_scholar;
    }
    if (name === "publon_citation") {
      return publon_citation;
    }
    if (name === "scopus_citation") {
      return scopus_citation;
    }
    if (name === "books") {
      return books;
    }
  }

  return (
    <>
      <Header2 />
      <div className="pl-10">
        <div className="text-2xl mt-8 lg:text-4xl text-primaryBlue whitespace-nowrap font-semibold">
          Research & Publications
        </div>
        <div className="h-[3px] bg-primaryBlue w-20 mt-[2px] "></div>
      </div>
      <div className="w-full flex justify-center gap-10 my-10 px-10 items-center flex-wrap">
        {
          jsonData.map((item, index) => {
            return (
              <Card key={item.key}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center w-full gap-10"
                >
                  <div className="flex flex-col items-stretch justify-between w-full gap-3">
                    <div className="font-semibold text-lg text-primaryRed text-center">{item.subject}</div>
                    <div className="w-full flex justify-center items-center">
                      <img src={getImage(item.image)} alt={item.subject} className={`researchImage-${item.key}`} />
                    </div>
                  </div>
                  <div className="text-5xl text-primaryRed font-semibold">{item.number}</div>
                </a>
              </Card>
            )
          })
        }
      </div>
      <Footer />
    </>
  );
}
