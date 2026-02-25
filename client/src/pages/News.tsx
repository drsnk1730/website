import { useState } from "react"
import eventPhoto1 from "@assets/event1.png";
import eventPhoto2 from "@assets/event2.png";
import eventPhoto3 from "@assets/event3.png";
import eventPhoto4 from "@assets/event4.png";
import panelPhoto1 from "@assets/panel1.png";
import panelPhoto2 from "@assets/panel2.png";
import mayPhoto1 from "@assets/may1.png";
import mayPhoto2 from "@assets/may2.png";
import mayPhoto3 from "@assets/may3.png";
import mayPhoto4 from "@assets/may4.png";
import mayPhoto5 from "@assets/may5.png";
import mayPhoto6 from "@assets/may6.png";
import mayForumPhoto1 from "@assets/mayf1.png";
import mayForumPhoto2 from "@assets/mayf2.png";
import mayForumPhoto3 from "@assets/mayf3.png";
import mayForumPhoto4 from "@assets/mayf4.png";
import mayForumPhoto5 from "@assets/mayf5.png";
import Recognized from "@assets/Recognized.png"
// Add these imports for the RMK IEEE conference photos
import rmkEventPhoto1 from "@assets/rmk1.png";
import rmkEventPhoto2 from "@assets/rmk2.png";
import rmkEventPhoto3 from "@assets/rmk3.png";
import rmkEventPhoto4 from "@assets/rmk4.png";
import keynotelink from "@assets/keynotelink.png";
// Add new imports for April grant and Malaysia visit photos

import bits1 from "@assets/bits1.png";
import bits2 from "@assets/bits2.png";
import bits3 from "@assets/bits3.png";
import bits4 from "@assets/bits4.png";

import aprilGrantPhoto from "@assets/aprilgrant.png";
import decINTIPhoto1 from "@assets/dec_inti1.png";
import decINTIPhoto2 from "@assets/dec_inti2.png";
import decTaylorsPhoto1 from "@assets/dec_taylors1.png";
import decTaylorsPhoto2 from "@assets/dec_taylors2.png";
import decTaylorsPhoto3 from "@assets/dec_taylors3.png";
import decTaylorsPhoto4 from "@assets/dec_taylors4.png";
import decTaylorsPhoto5 from "@assets/dec_taylors5.png";
import novUCSIPhoto from "@assets/nov_ucsi.png";
import augAchievementPhoto from "@assets/aug_achievement.png"; // update filename if needed
import aug1 from "@assets/aug1.png"; 
import jejuPhoto1 from "@assets/jeju1.png";
import jejuPhoto2 from "@assets/jeju2.png";
import jejuPhoto3 from "@assets/jeju3.png";
import jejuPhoto4 from "@assets/jeju4.png";
import jejuEventMain from "@assets/jeju_main.png";
import julyKeynotePoster from "@assets/july_keynote_poster.png"; // replace with correct filename
import dec2023Collage from "@assets/dec2023_collage.png"; // replace with correct filename

import dec2023ScholarImg from "@assets/dec2023_scholar.png"; // update to your asset filename if needed
import nov2023CollageImg from "@assets/nov2023_collage.png"; // update to your asset filename if needed

import oct2023RecognitionImg from "@assets/oct2023_recognition.png"; // replace with your real asset name
import sep2023ProfPhoto from "@assets/sep2023_prof.png"; // replace with your real asset name

import nov2021OracleImg from "@assets/nov2021_oracle.png";      // Oracle certificate image
import aug2020HackathonImg from "@assets/aug2020_hackathon.png"; // Hackathon winner image

import rd1 from "@assets/rd1.png";
import rd2 from "@assets/rd2.png";

import sch1 from "@assets/sch1.png";

import sch2 from "@assets/sch2.png";

import prof1 from "@assets/prof1.png"; 

import modi1 from "@assets/modi1.png";
import modi2 from "@assets/modi2.png";
import modi3 from "@assets/modi3.png";

import modi21 from "@assets/modi21.png";
import modi22 from "@assets/modi22.png";
import modi23 from "@assets/modi23.png";
import modi24 from "@assets/modi24.png";
import modi25 from "@assets/modi25.png";
import modi26 from "@assets/modi26.png";
import modi27 from "@assets/modi27.png";
import modi28 from "@assets/modi28.png";

import estic1 from "@assets/estic1.png";
import estic2 from "@assets/estic2.png";
import estic3 from "@assets/estic3.png";

import ltu1 from "@assets/ltu1.png";
import ltu2 from "@assets/ltu2.png";

import mosco1 from "@assets/mosco1.png";
import mosco2 from "@assets/mosco2.png";

import wel from "@assets/wel.png";

import sihdec from "@assets/sihdec.png";

import summit1 from "@assets/delhi1.png";
import summit2 from "@assets/delhi2.png";
import summit3 from "@assets/delhi3.png";
import summit4 from "@assets/delhi4.png";

import img1 from "@assets/imgai1.png";
import img2 from "@assets/imgai2.png";
import img3 from "@assets/imgai3.png";
import img4 from "@assets/imgai4.png";
import img5 from "@assets/imgai5.png";
import img6 from "@assets/imgai6.png";
import img7 from "@assets/imgai7.png";

import jp1 from "@assets/ai1.png";
import jp2 from "@assets/ai2.png";
import jp3 from "@assets/ai3.png";
import jp4 from "@assets/ai4.png";
import jp5 from "@assets/ai5.png";

import scimeTechImg1 from "@assets/key1.png";
import scimeTechImg2 from "@assets/key2.png";

export default function News() {
  const [selectedImage, setSelectedImage] = useState(null)
  return (
    <div className="max-w-6xl mx-auto px-6 space-y-14">

      {/* SciMeTech-SD-26 Keynote */}
      <div className="mt-16 rounded-3xl bg-white px-6 py-10 shadow-2xl ring-1 ring-gray-200">

        <h3 className="text-3xl font-bold mb-4 text-center text-teal-800">
          🌍 Keynote Speaker – SciMeTech-SD-26
        </h3>

        <p className="text-gray-700 text-justify leading-relaxed mb-6">
          Happy to join as a <span className="font-semibold text-teal-700">Keynote Speaker</span> at the 
          <span className="font-semibold"> International Conference on Sciences, Methods and Technologies for Sustainable Development (SciMeTech-SD-26)</span>.
        </p>

        <p className="text-gray-700 text-justify leading-relaxed mb-6">
          The conference is organized by the <span className="font-semibold">High School of Technology – Essaouira, Cadi Ayyad University</span>, 
          in collaboration with academic and national partners.
        </p>

        {/* Event Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-center">

          <div className="bg-teal-50 rounded-2xl p-6 shadow-md">
            <h4 className="text-lg font-semibold text-teal-800">📅 Date</h4>
            <p className="text-gray-700 mt-2">May 17–19, 2026</p>
          </div>

          <div className="bg-teal-50 rounded-2xl p-6 shadow-md">
            <h4 className="text-lg font-semibold text-teal-800">📍 Location</h4>
            <p className="text-gray-700 mt-2">Essaouira, Morocco 🇲🇦</p>
          </div>

        </div>

    

        {/* Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {[scimeTechImg1, scimeTechImg2].map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-xl transition duration-500 hover:-translate-y-2 hover:scale-105"
            >
              <img
                src={img}
                alt={`SciMeTech Image ${idx + 1}`}
                className="w-full h-[450px] object-contain bg-gray-50 rounded-2xl"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-semibold text-lg">
                  View
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
      {/* Japan Delegation Section */}
      <div className="mt-16 rounded-3xl bg-white px-6 py-10 shadow-2xl ring-1 ring-gray-200">

        <h3 className="text-3xl font-bold mb-4 text-center text-indigo-900">
          🇯🇵 Meeting Distinguished Delegates from Japan
        </h3>

        <p className="leading-relaxed text-justify mb-6 text-gray-700">
          It was a great honor to meet the distinguished delegates from Japan at the 
          <span className="font-semibold text-purple-700"> AI Summit 2026</span>, held at 
          <span className="font-semibold"> Bharat Mandapam, New Delhi</span>, 
          from February 16–20, 2026.
        </p>

        <p className="leading-relaxed mb-6 text-gray-700">
          I had the privilege of interacting with:
        </p>

        <ul className="space-y-3 mb-10 text-gray-800">
          <li>• <span className="font-semibold">Shiho Nagano</span>, Director, Information Policy Planning, Ministry of Economy, Trade and Industry (METI), Japan</li>
          <li>• <span className="font-semibold">Takumi Miyakawa</span>, Deputy Director, Ministry of Economy, Trade and Industry (METI), Japan</li>
          <li>• <span className="font-semibold">Rentaro Iida</span>, Senior Manager, GPAI Tokyo Expert Support Center, National Institute of Information and Communications Technology (NICT), Japan</li>
          <li>• <span className="font-semibold">Lucas Haywood</span>, Vice President, Global Strategy @ ONESTRUCTION - Japan</li>
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[jp1, jp2, jp3, jp4, jp5].map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(photo)}
              className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg transition duration-500 hover:-translate-y-2 hover:scale-105"
            >
              <img
                src={photo}
                alt={`Japan Delegate ${idx + 1}`}
                className="w-full h-72 object-cover"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-semibold text-lg">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* AI-Summit -2 */}
      <div className="rounded-3xl bg-gradient-to-br from-purple-50 via-white to-indigo-100 px-6 py-10 shadow-2xl ring-1 ring-purple-200/40 backdrop-blur-lg">

  {/* Heading */}
  <h3 className="text-3xl font-extrabold mb-4 text-indigo-900 text-center">
    AI Impact Summit 2026 – New Delhi
  </h3>

  {/* Content */}
  <p className="text-gray-700 text-justify leading-relaxed mb-6">
    I had the privilege of attending the <span className="font-semibold text-purple-700">AI Summit 2026</span>, held from 
    <span className="font-semibold"> February 16–20, 2026</span>, in 
    <span className="font-semibold"> New Delhi</span>, inaugurated by the Prime Minister of India alongside global leaders.
    The event was organized by the <span className="font-semibold">Ministry of Electronics and Information Technology</span>, 
    and it truly showcased the global impact of Artificial Intelligence.
  </p>

  <p className="text-gray-700 text-justify leading-relaxed mb-8">
    India is rapidly emerging as the epicenter of technological growth and the AI revolution, with contributions from policymakers,
    industry leaders, technology developers, and global experts. The summit featured 
    <span className="font-semibold text-indigo-700"> 300 exhibitors</span>, 
    <span className="font-semibold text-indigo-700"> 30 country experts</span>, and 
    <span className="font-semibold text-indigo-700"> 500 global AI leaders</span>, 
    all sharing insights on shaping the future of Artificial Intelligence.
  </p>

  {/* Stats Section */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-center">
    {[
      { number: "300+", label: "Exhibitors" },
      { number: "30+", label: "Country Experts" },
      { number: "500+", label: "Global AI Leaders" }
    ].map((stat, idx) => (
      <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
        <h4 className="text-3xl font-bold text-indigo-800">{stat.number}</h4>
        <p className="text-gray-600 mt-2">{stat.label}</p>
      </div>
    ))}
  </div>

  {/* Image Gallery */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {[img1, img2, img3, img4, img5, img6, img7].map((photo, idx) => (
      <div
        key={idx}
        onClick={() => setSelectedImage(photo)}
        className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-xl transition duration-500 hover:-translate-y-2 hover:scale-105"
      >
        <img
          src={photo}
          alt={`AI Summit ${idx + 1}`}
          className="w-full h-72 object-cover"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 font-semibold text-lg">
            View
          </span>
        </div>
      </div>
    ))}

  </div>
</div>
      {/* AI-Summit */}


      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-purple-100 px-6 py-8 shadow-2xl ring-1 ring-indigo-200/40 backdrop-blur-lg">

  <h3 className="text-2xl font-extrabold mb-2 text-indigo-800">
    February 2026 – AI Impact Summit
  </h3>

  <p className="text-indigo-900 mb-6 text-justify leading-relaxed">
    I am happy to share that I will be attending the <span className="font-semibold text-purple-700">AI Impact Summit 2026</span>, scheduled from <span className="font-semibold">February 16–20, 2026</span>, at <span className="font-semibold">Bharat Mandapam, New Delhi</span>.  
    The summit will be inaugurated by the Honorable Prime Minister of India and will feature eminent visionaries and global leaders from across the world, coming together to shape the future of Artificial Intelligence and emerging technologies.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8">

  {[summit1, summit2, summit3, summit4].map((photo, idx) => (
    <div
      key={idx}
      onClick={() => setSelectedImage(photo)}
      className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-indigo-200/40 transition duration-500 hover:-translate-y-2 hover:scale-105"
    >
      <img
        src={photo}
        alt={`AI Summit Photo ${idx + 1}`}
        className="w-full h-72 object-contain bg-white p-3 transition duration-500 group-hover:scale-105"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/80 to-transparent px-4 py-3">
        {/* <span className="text-white font-semibold text-lg">
          View Image
        </span> */}
      </div>
    </div>
  ))}

</div>
</div>
      {/* scholar */}
      <div className="rounded-2xl bg-gradient-to-br from-teal-50 via-white to-teal-100 px-6 py-8 shadow-2xl ring-1 ring-teal-200/40 backdrop-blur-lg">
        <h3 className="text-2xl font-extrabold mb-2 text-teal-900">February 2026</h3>
        <p className="text-teal-900 mb-4 text-justify leading-relaxed">
          I am excited to share that I have crossed 5000+ citations on Google Scholar, with an H-Index of 38! 🎉
          This milestone reflects not just numbers, but years of dedication, collaborative research, and a shared passion for advancing knowledge.
          I am incredibly deeply grateful to my co-authors and mentors whose guidance, collaboration, and insights have been invaluable throughout this journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8">
        <img
          src={sch1}
          alt="INTI University Entrance"
          className="w-full h-80 lg:h-96 object-contain bg-white rounded-2xl shadow-xl"
        />
        <img
          src={sch2}
          alt="INTI University Meeting"
          className="w-full h-80 lg:h-96 object-contain bg-white rounded-2xl shadow-xl"
        />
      </div>

      </div>
      
      {/* Welcoming */}
      <div className="rounded-2xl bg-gradient-to-br from-green-50 via-white to-green-100 px-6 py-8 shadow-2xl ring-1 ring-green-200/40 backdrop-blur-lg mt-10">
        <h3 className="text-2xl font-extrabold mb-2 text-green-900">January 2026</h3>
        <p className="text-green-900 mb-6 text-justify leading-relaxed">
            🌟 Reflecting on an Incredible 2025 & Welcoming 2026 🌟<br/>
            2025 has truly been an amazing and memorable year for me. I had the opportunity to visit different countries, deliver keynote speeches, and interact with eminent professors, scientists, and distinguished leaders, including presidents, which enriched my academic vision and global perspective.        </p>
        <div className="flex justify-center">
          <img
            src={wel}
            alt="UCSI University Visit - RMK Engineering College Collaboration"
            className="w-full max-w-2xl h-auto object-contain rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* sihdec */}
      <div className="rounded-2xl bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-6 py-8 shadow-2xl ring-1 ring-yellow-200/40 backdrop-blur-lg mt-10">
        <h3 className="text-2xl font-extrabold mb-2 text-yellow-900">December 2025</h3>
        <p className="text-yellow-900 mb-6 text-justify leading-relaxed">
          🌟 Honored to Serve as an Evaluator – Smart India Hackathon 2025 🌟<br/>
I am deeply honored to have served as an Evaluator for the National Screening Round of Smart India Hackathon (SIH) 2025, for both Hardware and Software Editions. The Grand Finale, conducted from December 8 to 12, 2025, across various parts of India, was truly inspiring and showcased the innovation, creativity, and problem-solving skills of young minds from across the nation.
            </p>
        <div className="flex justify-center">
          <img
            src={sihdec}
            alt="Brain Pool Fellowship - RMK Engineering College"
            className="w-full max-w-2xl h-auto object-contain rounded-2xl shadow-xl"
          />
        </div>
      </div>



      {/* LUT */}
      <div className="rounded-2xl bg-gradient-to-br from-purple-50 via-white to-purple-100 px-6 py-8 shadow-2xl ring-1 ring-purple-200/40 backdrop-blur-lg">
        <h3 className="text-2xl font-extrabold mb-2 text-purple-800">December 2025</h3>
        <p className="text-purple-900 mb-4 text-justify leading-relaxed">
          We had a discussion on 01-12-2025 with Lappeenranta University of Technology (LUT University) -Finland, regarding several key areas of academic collaboration, including student mobility programs, faculty exchange initiatives, collaborative academic programs, and joint research activities.
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8 items-center justify-center">
          {[ltu1, ltu2].map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-yellow-200/40 flex items-center justify-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-yellow-100 hover:shadow-yellow-200/40"
            >
              <img
                src={photo}
                alt={`May Keynote Photo ${idx + 1}`}
                className="w-full h-64 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-95"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-900/80 to-transparent px-4 py-2">
                <span className="text-white font-semibold text-lg">LUT discussion {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* Moscow */}
      <div className="rounded-2xl bg-gradient-to-br from-purple-50 via-white to-purple-100 px-6 py-8 shadow-2xl ring-1 ring-purple-200/40 backdrop-blur-lg">
        <h3 className="text-2xl font-extrabold mb-2 text-purple-800">December 2025</h3>
        <p className="text-purple-900 mb-4 text-justify leading-relaxed">
            💫 Joint research in the field of artificial intelligence with the Center for Advanced AI Research at Plekhanov University – Moscow, Russia 💫 
        </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-10 max-w-6xl mx-auto items-center justify-center">

        {[mosco1, mosco2].map((photo, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-yellow-200/40 flex items-center justify-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-yellow-100 hover:shadow-yellow-200/40"
          >
            <img
              src={photo}
              alt={`May Keynote Photo ${idx + 1}`}
              className="w-full h-80 lg:h-96 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-95"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-900/80 to-transparent px-4 py-2">
              <span className="text-white font-semibold text-lg">
                Plekhanov University {idx + 1}
              </span>
            </div>
          </div>
        ))}

      </div>

        </div>

      {/* ESTIC */}
      <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-8 shadow-2xl ring-1 ring-blue-200/40 backdrop-blur-lg">
        <h2 className="text-xl font-semibold mb-2 text-blue-700">November 2025</h2>
        <p className="text-gray-700 font-medium mb-4 text-justify leading-relaxed" >
          🌟 Honored to Share My Experience at ESTIC 2025! 🌟
I am truly delighted to have attended and interacted with some of the most inspiring and humble leaders during the Emerging Science, Technology and Innovation Conclave (ESTIC-2025) held from 3rd – 5th November 2025 at Bharat Mandapam, Pragati Maidan, New Delhi. 🇮🇳
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
          {[estic1, estic2, estic3].map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-blue-200/40 transition duration-500 bg-white backdrop-blur-lg hover:-translate-y-2 hover:scale-105 hover:bg-blue-50 hover:shadow-blue-200/30"
            >
              <img
                src={photo}
                alt={`Event Photo ${idx + 1}`}
                className="w-full h-64 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-90"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4 flex items-end">
                <span className="text-white font-bold text-lg drop-shadow">ESTIC Photo {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* modi2 */}
      <div className="rounded-2xl bg-gradient-to-br from-purple-50 via-white to-purple-100 px-6 py-8 shadow-2xl ring-1 ring-purple-200/40 backdrop-blur-lg">
        <h3 className="text-2xl font-extrabold mb-2 text-purple-800">November 2025</h3>
        <p className="text-purple-900 mb-4 text-justify leading-relaxed">
            I am honored to share that I participated under the Young Scientist & Technologist Leaders (below 45 years) category in the Emerging Science, Technology and Innovation Conclave (ESTIC-2025), inaugurated by our Hon’ble Prime Minister of India, Shri Narendra Modi, on 3rd November 2025 at Bharat Mandapam, Pragati Maidan, New Delhi.🇮🇳
          </p>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 my-8">

          {[modi21, modi22, modi23, modi24, modi25, modi26, modi27, modi28].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Portrait ${i}`}
              className="w-full rounded-2xl shadow-xl object-contain hover:scale-105 transition duration-300 break-inside-avoid"
            />
          ))}

        </div>

      </div>

      {/* Modi */}
      <div className="rounded-2xl bg-gradient-to-br from-pink-50 via-white to-pink-100 px-6 py-8 shadow-2xl ring-1 ring-pink-200/40 backdrop-blur-lg mt-10">
        <h3 className="text-2xl font-extrabold mb-2 text-pink-900">November 2025</h3>
        <p className="text-pink-900 mb-6 text-justify leading-relaxed">
            I am delighted to share that I have been selected under the Young Scientist & Technologist Leaders (below 45 years)category to participate at the Emerging Science, Technology and Innovation Conclave (ESTIC-2025), which will be inaugurated by our Honorable Prime Minister of India from 3rd to 5th November 2025 at Bharat Mandapam Pragati Maidan, New Delhi. 💫
        </p>
        <div className="space-y-8 my-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <img
            src={modi1}
            alt="Portrait 1"
            className="w-full max-w-md mx-auto h-auto object-contain rounded-2xl shadow-xl"
          />

          <img
            src={modi2}
            alt="Portrait 2"
            className="w-full max-w-md mx-auto h-auto object-contain rounded-2xl shadow-xl"
          />
        </div>

        <div className="flex justify-center">
          <img
            src={modi3}
            alt="Landscape"
            className="w-full max-w-3xl h-auto object-contain rounded-2xl shadow-xl"
          />
        </div>

</div>

      </div>

      {/* prof */}
      <div className="rounded-2xl bg-gradient-to-br from-purple-50 via-white to-purple-100 px-6 py-8 shadow-2xl ring-1 ring-purple-200/40 backdrop-blur-lg">
        <h3 className="text-2xl font-extrabold mb-2 text-purple-800">October 2025</h3>
        <p className="text-purple-900 mb-4 text-justify leading-relaxed">
          💫 Happy to meet Prof. John Woodward, Head of the School of Mathematical and Computer Sciences at Heriot-Watt University, on 08-10-2025 during my visit to the UAE, to discuss potential joint collaborative research in the areas of Artificial Intelligence, Machine Learning, and Autonomous Systems.
        </p>
        <div className="flex justify-center items-center my-8">
          <img
            src={prof1}
            alt="DST-SERB Grant Announcement"
            className="w-full max-w-lg h-auto object-contain rounded-2xl shadow-xl"
          />
          
        </div>
      </div>

      {/* R&D */}
      <div className="rounded-2xl bg-gradient-to-br from-teal-50 via-white to-teal-100 px-6 py-8 shadow-2xl ring-1 ring-teal-200/40 backdrop-blur-lg">
        <h3 className="text-2xl font-extrabold mb-2 text-teal-900">October 2025</h3>
        <p className="text-teal-900 mb-4 text-justify leading-relaxed">
          Greatly honored to participate in the R&D Forum on “RTA Transportation Research and Innovation,” held on 07 October 2025 at the RTA Centre, Birmingham University Dubai.<br/>
          This insightful forum focused on safety, sustainability, and emerging & seamless mobility, fostering discussions on collaborative research and joint projects aimed at advancing transportation innovation in the UAE.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8">
        <img
          src={rd1}
          alt="INTI University Entrance"
          className="w-full h-80 lg:h-96 object-contain bg-white rounded-2xl shadow-xl"
        />
        <img
          src={rd2}
          alt="INTI University Meeting"
          className="w-full h-80 lg:h-96 object-contain bg-white rounded-2xl shadow-xl"
        />
      </div>

      </div>

      {/* BITS */}
      <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-8 shadow-2xl ring-1 ring-blue-200/40 backdrop-blur-lg">
        <h2 className="text-xl font-semibold mb-2 text-blue-700">October 2025</h2>
        <p className="text-gray-700 font-medium mb-4 text-justify leading-relaxed">
          Happy to share that I attended the International Conference on Artificial Intelligence and Networking (ICAIN-2025) at BITS Pilani, Dubai Campus, organized in association with the Indian Institute of Information Technology, Allahabad, where I had the privilege of presenting our collaborative research work with Sunway University, Malaysia. 🇮🇳🤝🇲🇾
This opportunity would not have been possible without the unwavering support and encouragement of R.M.K. Engineering College and its leadership, who continuously inspire and empower faculty members to participate in such prestigious global academic events.
Grateful for this experience and the chance to exchange ideas with researchers and experts in the field of AI and Networking.🌐
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
          {[bits1, bits2, bits3, bits4].map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-blue-200/40 transition duration-500 bg-white backdrop-blur-lg hover:-translate-y-2 hover:scale-105 hover:bg-blue-50 hover:shadow-blue-200/30"
            >
              <img
                src={photo}
                alt={`Event Photo ${idx + 1}`}
                className="w-full h-64 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-90"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4 flex items-end">
                <span className="text-white font-bold text-lg drop-shadow">Event Photo {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keynotelink */}
      <div className="rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-8 shadow-2xl ring-1 ring-gray-200/40 backdrop-blur-lg mt-10">
        <h3 className="text-2xl font-extrabold mb-2 text-gray-900">October 2025</h3>
        <p className="text-gray-900 font-medium mb-6 text-justify leading-relaxed">
          🌍✨ I am delighted to share that I will be joining as a Keynote Speaker at the 2nd International Conference on Artificial Intelligence, Robotics, and Cybersecurity for Emerging Technologies (AIRCET’25), which will take place from October 29–31, 2025, at the Higher School of Technology Essaouira, Cadi Ayyad University, Morocco. 🇲🇦
        </p>
        <div className="flex justify-center">
          <img
            src={keynotelink}
            alt="Presenting Research Paper at Taylors University"
            className="w-full max-w-3xl h-auto object-contain rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Recognization */}
      <div className="rounded-2xl bg-gradient-to-br from-purple-50 via-white to-purple-100 px-6 py-8 shadow-2xl ring-1 ring-purple-200/40 backdrop-blur-lg">
        <h3 className="text-2xl font-extrabold mb-2 text-purple-800">August 2025</h3>
        <p className="text-purple-900 mb-4 text-justify leading-relaxed">
            𝐑𝐞𝐜𝐨𝐠𝐧𝐢𝐳𝐞𝐝 𝐀𝐦𝐨𝐧𝐠 𝐭𝐡𝐞 𝐓𝐨𝐩 2% 𝐒𝐜𝐢𝐞𝐧𝐭𝐢𝐬𝐭𝐬 𝐖𝐨𝐫𝐥𝐝𝐰𝐢𝐝𝐞 (𝐒𝐭𝐚𝐧𝐟𝐨𝐫𝐝 – 𝐄𝐥𝐬𝐞𝐯𝐢𝐞𝐫 2025) 𝐟𝐨𝐫 𝐭𝐡𝐞 Third 𝐜𝐨𝐧𝐬𝐞𝐜𝐮𝐭𝐢𝐯𝐞 𝐲𝐞𝐚𝐫, 𝐛𝐚𝐬𝐞𝐝 𝐨𝐧 𝐄𝐥𝐬𝐞𝐯𝐢𝐞𝐫’𝐬 𝐮𝐩𝐝𝐚𝐭𝐞𝐝 𝐜𝐢𝐭𝐚𝐭𝐢𝐨𝐧 𝐢𝐧𝐝𝐢𝐜𝐚𝐭𝐨𝐫𝐬. <br/>
            I’m delighted to share that I have been recognized as one of the World’s Top 2% Scientists in Artificial Intelligence & Image Processing  for the Third consecutive year (2023,2024 and 2025), published by Elsevier-Scopus and Stanford University
        </p>
        <div className="flex justify-center items-center my-8">
          <img
            src={Recognized}
            alt="DST-SERB Grant Announcement"
            className="w-full max-w-lg h-auto object-contain rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* First Event: Keynote & Gallery */}
      <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-8 shadow-2xl ring-1 ring-blue-200/40 backdrop-blur-lg">
        <h1 className="text-3xl font-extrabold mb-4 bg-gradient-to-tr from-blue-900 to-blue-400 bg-clip-text text-transparent">2025</h1>
        <h2 className="text-xl font-semibold mb-2 text-blue-700">June 2025</h2>
        <p className="text-gray-700 font-medium mb-4 text-justify leading-relaxed">
          Honored to deliver the keynote address on <span className="italic text-blue-900 font-bold">"Advancing Brain-Computer Interfaces with Generative AI for Cognitive State Modeling and Communications"</span> at the Closed Scientific Event to Foresee the Future of AI, AIJ Conference, held on June 16th, 2025, in the cultural heart of Russia — Saint Petersburg. Grateful for the opportunity to exchange ideas with some of the most brilliant minds from the BRICS+ countries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
          {[eventPhoto1, eventPhoto2, eventPhoto3, eventPhoto4].map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-blue-200/40 transition duration-500 bg-white backdrop-blur-lg hover:-translate-y-2 hover:scale-105 hover:bg-blue-50 hover:shadow-blue-200/30"
            >
              <img
                src={photo}
                alt={`Event Photo ${idx + 1}`}
                className="w-full h-64 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-90"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4 flex items-end">
                <span className="text-white font-bold text-lg drop-shadow">Event Photo {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Event: June Panel & Group Gallery */}
      <div className="rounded-2xl bg-gradient-to-br from-cyan-50 via-white to-cyan-100 px-6 py-8 shadow-xl ring-1 ring-cyan-200/40">
        <section>
          <h3 className="text-2xl font-extrabold mb-2 text-cyan-800">June 2025 🌐</h3>
          <p className="mb-2 text-cyan-700 font-medium text-justify leading-relaxed">
            The event, part of the Foresight Session: AI Horizons, brought together esteemed researchers and leaders to discuss and shape the next frontiers of Artificial Intelligence.<br />
            It was a privilege to be among this distinguished panel:
          </p>
          <ul className="list-disc list-inside space-y-1 font-semibold text-cyan-900">
            <li>Belevtsev Andrey – Senior VP, Head of Technological Development, Sber</li>
            <li>Eremenko Maxim – VP, Director of AI & ML Development, Sber</li>
            <li>Dr. Burnaev Evgeny – Director, Applied AI Center, Skoltech; Head of Research, AIRI</li>
            <li>Dr. Visilter Yuri – Director, Department of AI & Technical Vision, GosNIIAS</li>
            <li>Prof. Serestina Viriri – Dean, School of Mathematics, Statistics & Computer Science, UKZN, South Africa</li>
            <li>Prof. Milovanović Vladimir – Associate Professor, University of Kragujevac, Serbia</li>
            <li>Dr. Savchenko Andrey – Head of Advanced AI Technologies, SberAI Lab; Researcher, AIRI</li>
            <li>Prof. Kolyubin Sergey – Head of BE2R Lab, ITMO University</li>
            <li>Yudin Dmitry – Head of Intelligent Transport Lab, AIRI; Associate Professor, MIPT</li>
            <li>Markov Sergey – Director of AI Technologies Development, Sber</li>
            <li>Prof. Alain Abel Garóf – Professor, Havana Technological University; AI Practice Leader, Avangenio SRL</li>
            <li>Moiseev Stanislav – R&D Director, T-Bank.</li>
          </ul>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8">
          {[panelPhoto1, panelPhoto2].map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-cyan-200/40 bg-white backdrop-blur-lg transition duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-cyan-50 hover:shadow-cyan-200/40"
            >
              <img
                src={photo}
                alt={`Panel Group Photo ${idx + 1}`}
                className="w-full h-80 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-90"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-900/70 to-transparent px-4 py-2">
                <span className="text-white font-extrabold text-lg drop-shadow">Panel Group Photo {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Event: May 2025 Section & Gallery */}
      <div className="rounded-2xl bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-6 py-8 shadow-lg ring-1 ring-yellow-200/40">
        <section>
          <h3 className="text-2xl font-extrabold mb-2 text-yellow-800">May 2025</h3>
          <p className="text-yellow-900 text-justify leading-relaxed">
            Honored to have met Prof. Pavlov Yuri Petrovich, Rector of The Sergei Obolensky Russian State University for Geological Prospecting (MGRI)... Grateful to Rector Prof. Pavlov Yuri Petrovich for his warm interaction and hospitality.
          </p>
        </section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-8">
          {[mayPhoto1, mayPhoto2, mayPhoto3, mayPhoto4].map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-yellow-200/40 bg-white backdrop-blur-lg transition duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-yellow-50 hover:shadow-yellow-200/30"
            >
              <img
                src={photo}
                alt={`May Event Photo ${idx + 1}`}
                className="w-full h-48 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-95"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-900/90 to-transparent px-4 py-2">
                <span className="text-white font-bold text-lg drop-shadow">May Photo {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
        <section>
          <h3 className="text-2xl font-extrabold mb-2 text-yellow-700">May 2025</h3>
          <p>
            Honored to Deliver a Keynote Address! Highlights of "AI-Powered Secure Affective Computing Model for Cognitive State Recognition in Humans" at the Colloquium, Pyatigorsk, Russia.
          </p>
        </section>
        {/* Perfectly aligned two-photo gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8 items-center justify-center">
          {[mayPhoto5, mayPhoto6].map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-yellow-200/40 flex items-center justify-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-yellow-100 hover:shadow-yellow-200/40"
            >
              <img
                src={photo}
                alt={`May Keynote Photo ${idx + 1}`}
                className="w-full h-64 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-95"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-900/80 to-transparent px-4 py-2">
                <span className="text-white font-semibold text-lg">May Keynote {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Forum Section & Gallery */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-indigo-100 px-6 py-8 shadow-2xl ring-1 ring-indigo-300/40">
        <section>
          <h3 className="text-2xl font-extrabold mb-2 text-indigo-900">May 2025 | Forum</h3>
          <p className="text-indigo-800 text-justify leading-relaxed">
            International Scientific Forum: Stepping into the Future – Global Foresight, Artificial Intelligence, and Strategic Leadership, Moscow, Russia.<br />
            Honored to be keynote speaker and forum participant; delegates from 60+ countries.
          </p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-8">
          {[mayForumPhoto1, mayForumPhoto2, mayForumPhoto3, mayForumPhoto4].map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-indigo-300 bg-white backdrop-blur-lg transition duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-indigo-50 hover:shadow-indigo-200"
            >
              <img
                src={photo}
                alt={`May Forum Photo ${idx + 1}`}
                className="w-full h-64 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-95"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/80 to-transparent px-4 py-2">
                <span className="text-white font-bold text-lg drop-shadow">May Forum {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Document/screenshot or fifth photo */}
        <div className="flex justify-center items-center my-8">
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl ring-2 ring-indigo-300 flex items-center justify-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-indigo-100 hover:shadow-indigo-300 bg-white">
            <img
              src={mayForumPhoto5}
              alt="Forum Document or Photo"
              className="w-full max-w-2xl h-80 object-contain object-center transition duration-500 group-hover:scale-105 group-hover:brightness-95"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/85 to-transparent px-4 py-2">
              <span className="text-white font-semibold text-lg">Forum Document</span>
            </div>
          </div>
        </div>
      </div>

      {/* RMK IEEE Conference Section */}
      <div className="rounded-2xl bg-gradient-to-br from-red-50 via-white to-red-100 px-6 py-8 shadow-2xl ring-1 ring-red-200/40 backdrop-blur-lg mt-10">
        <section>
          <h3 className="text-2xl font-extrabold mb-2 text-red-800">May 2025 | IEEE Conference</h3>
          <p className="text-red-900 mb-4 text-justify leading-relaxed">
            I have successfully organized 2nd IEEE International Conference on Research Methodologies in Knowledge Management, Artificial Intelligence, and Telecommunication Engineering (RMKAMTE'25), sponsored by DST-SERB, was successfully conducted on May 7th and 8th, 2025 at R.M.K. Engineering College, Chennai, India.
          </p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-8">
          {[rmkEventPhoto1, rmkEventPhoto2, rmkEventPhoto3, rmkEventPhoto4].map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-red-200/40 bg-white backdrop-blur-lg transition duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-red-50 hover:shadow-red-200/30"
            >
              <img
                src={photo}
                alt={`RMK IEEE Event Photo ${idx + 1}`}
                className="w-full h-64 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-95"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-red-900/90 to-transparent px-4 py-2">
                <span className="text-white font-bold text-lg drop-shadow">Conference Photo {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* April 2025: DST-SERB Grant Announcement */}
      <div className="rounded-2xl bg-gradient-to-br from-purple-50 via-white to-purple-100 px-6 py-8 shadow-2xl ring-1 ring-purple-200/40 backdrop-blur-lg">
        <h3 className="text-2xl font-extrabold mb-2 text-purple-800">April 2025</h3>
        <p className="text-purple-900 mb-4 text-justify leading-relaxed">
          📢 Grateful Announcement | Research Grant Awarded 🏅 We are delighted to share that we have received a Grant of ₹1,00,000 from DST-SERB (ANRF), New Delhi for our upcoming IEEE International Conference on RMKAMTE'25, scheduled to be held on May 7th & 8th, 2025.
        </p>
        <div className="flex justify-center items-center my-8">
          <img
            src={aprilGrantPhoto}
            alt="DST-SERB Grant Announcement"
            className="w-full max-w-lg h-auto object-contain rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* December 2024: INTI International University Visit */}
      <div className="rounded-2xl bg-gradient-to-br from-teal-50 via-white to-teal-100 px-6 py-8 shadow-2xl ring-1 ring-teal-200/40 backdrop-blur-lg">
        <h3 className="text-2xl font-extrabold mb-2 text-teal-900">December 2024</h3>
        <p className="text-teal-900 mb-4 text-justify leading-relaxed">
          INTI International University Visit, Malaysia.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8">
          <img
            src={decINTIPhoto1}
            alt="INTI University Entrance"
            className="w-full h-64 object-cover object-center rounded-2xl shadow-xl"
          />
          <img
            src={decINTIPhoto2}
            alt="INTI University Meeting"
            className="w-full h-64 object-cover object-center rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* December 2024: Taylors University Visit - Gallery */}
      <div className="rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-8 shadow-2xl ring-1 ring-gray-200/40 backdrop-blur-lg">
        <h3 className="text-2xl font-extrabold mb-2 text-gray-900">December 2024</h3>
        <p className="text-gray-900 mb-4 text-justify leading-relaxed">
          Taylors University Visit, Malaysia.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-8">
          <img src={decTaylorsPhoto1} alt="Taylors University Event 1" className="w-full h-56 object-cover object-center rounded-xl shadow-lg" />
          <img src={decTaylorsPhoto2} alt="Taylors University Event 2" className="w-full h-56 object-cover object-center rounded-xl shadow-lg" />
          <img src={decTaylorsPhoto3} alt="Taylors University Event 3" className="w-full h-56 object-cover object-center rounded-xl shadow-lg" />
          <img src={decTaylorsPhoto4} alt="Taylors University Event 4" className="w-full h-56 object-cover object-center rounded-xl shadow-lg" />
        </div>
      </div>

      {/* December 2024: Taylors University Research Presentation */}
      <div className="rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-8 shadow-2xl ring-1 ring-gray-200/40 backdrop-blur-lg mt-10">
        <h3 className="text-2xl font-extrabold mb-2 text-gray-900">December 2024</h3>
        <p className="text-gray-900 font-medium mb-6 text-justify leading-relaxed">
          Taylors University Visit, Malaysia. I had the privilege of participating in and presenting our research paper at the international conference hosted by Taylor's University. It was a rewarding experience to engage with experts and peers in a dynamic academic environment.
        </p>
        <div className="flex justify-center">
          <img
            src={decTaylorsPhoto5}
            alt="Presenting Research Paper at Taylors University"
            className="w-full max-w-3xl h-auto object-contain rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* November 2024: UCSI University Visit */}
      <div className="rounded-2xl bg-gradient-to-br from-green-50 via-white to-green-100 px-6 py-8 shadow-2xl ring-1 ring-green-200/40 backdrop-blur-lg mt-10">
        <h3 className="text-2xl font-extrabold mb-2 text-green-900">November 2024</h3>
        <p className="text-green-900 mb-6 text-justify leading-relaxed">
          UCSI University Visit, Malaysia.
        </p>
        <div className="flex justify-center">
          <img
            src={novUCSIPhoto}
            alt="UCSI University Visit - RMK Engineering College Collaboration"
            className="w-full max-w-2xl h-auto object-contain rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* September 2024: New Position Announcement */}
      <div className="px-1 py-8">
        <h3 className="text-2xl font-extrabold mb-2 text-black">September 2024</h3>
        <p className="text-black text-justify leading-relaxed">
          I am happy to share that I have started a new position as Professor at R.M.K. Engineering College.
        </p>
      </div>
      {/* August 2024: International Fellowship Achievement */}
<div className="rounded-2xl bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-6 py-8 shadow-2xl ring-1 ring-yellow-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-yellow-900">August 2024</h3>
  <p className="text-yellow-900 mb-6 text-justify leading-relaxed">
    Successfully Completed Brain Pool Fellowship Funded by National Research Foundation South Korea. This achievement not only highlights Dr. Neelakandan's exceptional research capabilities but also underscores the support and guidance provided by our esteemed leadership at RMK Engineering College. A special thanks to our Vice-Chairman, Principal, and Head of Department for fostering a research-driven environment that encourages global collaborations and academic excellence.
  </p>
  <div className="flex justify-center">
    <img
      src={augAchievementPhoto}
      alt="Brain Pool Fellowship - RMK Engineering College"
      className="w-full max-w-2xl h-auto object-contain rounded-2xl shadow-xl"
    />
  </div>
</div>

{/* July 2024: Top 2% Scientist Recognition */}
<div className="rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-8 shadow-2xl ring-1 ring-gray-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-gray-900">July 2024</h3>
  <p className="text-gray-900 mb-6 text-justify leading-relaxed">
    I'm honored and humbled to be recognized as one of the World's Top 2% Scientists in Artificial Intelligence & Image Processing for the second consecutive year (2023 and 2024), published by Elsevier Scopus and Stanford University. This recognition is a reflection of the hard work, dedication, and collaboration with brilliant colleagues, mentors, and the scientific community.
  </p>
  <div className="flex justify-center">
    <img
      src={aug1}
      alt="World's Top 2% Scientists Table - RMK Engineering College"
      className="w-full max-w-2xl h-auto object-contain rounded-2xl shadow-xl"
    />
  </div>
</div>
{/* July 2024: IEA 2024 Triennial Congress Experience */}
<div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-8 shadow-2xl ring-1 ring-blue-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-blue-900">July 2024</h3>
  <p className="text-blue-900 mb-6 text-justify leading-relaxed">
    I had the incredible opportunity to attend the 22nd Triennial Congress of the International Ergonomics Association (IEA 2024) held at the International Convention Center - JEJU island, where experts from around the world gathered to explore cutting-edge developments in ergonomics, Artificial Intelligence (AI), Electroencephalography (EEG), and emotional aspects.
  </p>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-8">
    <img src={jejuPhoto1} alt="IEA 2024 Selfie" className="w-full h-44 object-cover object-center rounded-xl shadow-lg" />
    <img src={jejuPhoto2} alt="IEA 2024 Group" className="w-full h-44 object-cover object-center rounded-xl shadow-lg" />
    <img src={jejuPhoto3} alt="IEA 2024 Poster 1" className="w-full h-44 object-cover object-center rounded-xl shadow-lg" />
    <img src={jejuPhoto4} alt="IEA 2024 Poster 2" className="w-full h-44 object-cover object-center rounded-xl shadow-lg" />
  </div>
</div>

{/* July 2024: IEA Conference Participation Announcement */}
<div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-8 shadow-2xl ring-1 ring-blue-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-blue-900">July 2024</h3>
  <p className="text-blue-900 mb-6 text-justify leading-relaxed">
    I am happy to share that I will be attending the IEA 2024 International Conference in Jeju Island from August 25 to 29, 2024. This event offers a fantastic opportunity to engage with global experts and discuss the latest advancements and research.
  </p>
  <div className="flex justify-center">
    <img
      src={jejuEventMain}
      alt="IEA 2024 Jeju Event Main"
      className="w-full max-w-2xl h-auto object-contain rounded-2xl shadow-xl"
    />
  </div>
</div>
{/* July 2024: Keynote Address at SRM */}
<div className="rounded-2xl bg-gradient-to-br from-pink-50 via-white to-pink-100 px-6 py-8 shadow-2xl ring-1 ring-pink-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-pink-900">July 2024</h3>
  <p className="text-pink-900 mb-6 text-justify leading-relaxed">
    I delivered the keynote address at the five-day online ISTE-sponsored Short-Term Training Programme on “Exploring AI, Data Science, and Cybersecurity in Modern Computing,” organized by S.R.M. Institute of Science and Technology on 15th July 2024.
  </p>
  <div className="flex justify-center">
    <img
      src={julyKeynotePoster}
      alt="SRM Keynote Address Poster July 2024"
      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-xl"
    />
  </div>
</div>

{/* February 2024: New Research Position */}
<div className="rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-8 shadow-2xl ring-1 ring-gray-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-black">February 2024</h3>
  <p className="text-black mb-6 text-justify leading-relaxed">
    I'm happy to share that I have started a new position as a Research Professor at Hanyang University – ERICA, under the "Brain Pool Fellowship" funded by the National Research Foundation.
  </p>
</div>

{/* December 2023: Autumn Conference Korea */}
<div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-8 shadow-2xl ring-1 ring-blue-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-blue-900">December 2023</h3>
  <p className="text-blue-900 mb-6 text-justify leading-relaxed">
    I am very happy to share my incredible experience at the Autumn Conference organized by the Ergonomics Society of Korea, held at the International Convention Center in Jeju Island.
  </p>
  <div className="flex justify-center">
    <img
      src={dec2023Collage}
      alt="Autumn Conference Korea December 2023"
      className="w-full max-w-2xl h-auto object-contain rounded-2xl shadow-xl"
    />
  </div>
</div>
{/* December 2023: Google Scholar Milestone */}
<div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-8 shadow-2xl ring-1 ring-blue-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-blue-900">December 2023</h3>
  <p className="text-blue-900 mb-6 text-justify leading-relaxed">
    I am delighted to inform you that my scientific publications have recently reached a significant milestone. Every researcher aspires to produce impactful work that is acknowledged by the scientific community through citations. In the year 2023, my research has received notable recognition with <strong>2453 citations</strong>, an h-index of <strong>25</strong>, and an i10-index of <strong>42</strong> on Google Scholar, affirming the impact and contribution of my studies to the academic community.
  </p>
  <div className="flex justify-center">
    <img
      src={dec2023ScholarImg}
      alt="Google Scholar Milestone December 2023"
      className="w-full max-w-xl h-auto object-contain rounded-2xl shadow-xl"
    />
  </div>
</div>

{/* November 2023: Organized First IEEE RMKMATE'23 Conference */}
<div className="rounded-2xl bg-gradient-to-br from-green-50 via-white to-green-100 px-6 py-8 shadow-2xl ring-1 ring-green-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-green-900">November 2023</h3>
  <p className="text-green-900 mb-6 text-justify leading-relaxed">
    I have organized the First IEEE International Conference on Research Methodologies in Knowledge Management, Artificial Intelligence, and Telecommunication Engineering (<strong>RMKMATE'23</strong>), conducted by the Department of Computer Science and Engineering on 01-11-2023 and 02-11-2023 at R.M.K. Engineering College, Chennai, India.
    <br />
    <span className="font-normal">Published Link: <a href="http://rmd.ac.in/ieicf/ICIZ" target="_blank" rel="noopener noreferrer" className="text-green-700 underline">http://rmd.ac.in/ieicf/ICIZ</a></span>
  </p>
  <div className="flex justify-center">
    <img
      src={nov2023CollageImg}
      alt="RMKMATE'23 Event Collage November 2023"
      className="w-full max-w-xl h-auto object-contain rounded-2xl shadow-xl"
    />
  </div>
</div>
{/* October 2023: Top 2% Scientist Recognition */}
<div className="rounded-2xl bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-6 py-8 shadow-2xl ring-1 ring-yellow-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-yellow-900">October 2023</h3>
  <p className="text-yellow-900 mb-6 text-justify leading-relaxed">
    I am happy to share that I have been recognized as one of the world's Top 2% Scientists for the year 2022. This honour was bestowed upon me in the recent rankings released by Elsevier, Scopus, and Stanford University on October 4, 2023.
  </p>
  <div className="flex justify-center">
    <img
      src={oct2023RecognitionImg}
      alt="Top 2% Scientist Recognition Table October 2023"
      className="w-full max-w-xl h-auto object-contain rounded-2xl shadow-xl"
    />
  </div>
</div>

{/* September 2023: Gyeongang National Univ. Research Position */}
<div className="rounded-2xl bg-gradient-to-br from-green-50 via-white to-green-100 px-6 py-8 shadow-2xl ring-1 ring-green-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-green-900">September 2023</h3>
  <p className="text-green-900 mb-6 text-justify leading-relaxed">
    I am delighted to share that I have joined as a Research Professor under the "BP Program," having been invited as a scientist by the National Research Foundation of Korea (NRF) for outstanding international researchers, at Gyeongang National University.
  </p>
  <div className="flex justify-center">
    <img
      src={sep2023ProfPhoto}
      alt="Research Professor at Gyeongang National University September 2023"
      className="w-full max-w-xl h-auto object-contain rounded-2xl shadow-xl"
    />
  </div>
</div>
{/* May 2023: Organized Springer CCIS Conference */}
<div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-8 shadow-2xl ring-1 ring-blue-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-blue-900">May 2023</h3>
  <p className="text-blue-900 mb-6 text-justify leading-relaxed">
    Organized the first Springer CCIS International Conference (ICCISCNT 2023), held on 17th and 18th May 2023 at R.M.K. Engineering College, Chennai, India.<br/>
    <span className="font-normal">Published Link: <a href="https://link.springer.com/book/10.1007/978-3-031-75957-4" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Springer Book Link</a></span>
  </p>
</div>

{/* November 2021: Oracle Cloud Certification */}
<div className="rounded-2xl bg-gradient-to-br from-orange-50 via-white to-orange-100 px-6 py-8 shadow-2xl ring-1 ring-orange-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-orange-900">November 2021</h3>
  <p className="text-orange-900 mb-6 text-justify leading-relaxed">
    Completed Oracle Cloud Infrastructure Foundation 2021 Certified Associate.
  </p>
  <div className="flex justify-center">
    <img
      src={nov2021OracleImg}
      alt="Oracle Cloud Foundations Certificate November 2021"
      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-xl"
    />
  </div>
</div>

{/* May 2021: Ph.D. Viva Voce */}
<div className="rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-8 shadow-2xl ring-1 ring-gray-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-black">May 2021</h3>
  <p className="text-black mb-6 text-justify leading-relaxed">
    I have successfully defended my Anna University Ph.D. Viva Voce examination in online mode on <strong>May 07, 2021</strong>, in the presence of panel members: <strong>Dr. Ramakrishnan</strong> (National Institute of Technology, Trichy), <strong>Dr. Janakiraman</strong> (Pondicherry University), and my supervisor, <strong>Dr. D. Paulraj</strong> (R.M.K. College of Engineering and Technology).
  </p>
</div>

{/* August 2020: National Level Hackathon Win */}
<div className="rounded-2xl bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-6 py-8 shadow-2xl ring-1 ring-yellow-200/40 backdrop-blur-lg mt-10">
  <h3 className="text-2xl font-extrabold mb-2 text-yellow-900">August 2020</h3>
  <p className="text-yellow-900 mb-6 text-justify leading-relaxed">
    The hackathon got completed on August 4th, 2020, where students of Jeppiaar Institute of Technology won the national level RJ229 competition with the prize money of Rs 1 Lakh. The Application Gray Market complaint System, developed by the students for the Ministry of Telecommunication, India, was submitted to the competition panel members.
  </p>
  <div className="flex justify-center">
    <img
      src={aug2020HackathonImg}
      alt="Jeppiaar Hackathon Winner August 2020"
      className="w-full max-w-xl h-auto object-contain rounded-2xl shadow-xl"
    />
  </div>
</div>



{selectedImage && (
  <div 
    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    <div 
      className="relative max-w-6xl w-[95%]"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Close Button */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-110 transition font-bold"
      >
        ✕
      </button>

      {/* Image */}
      <img
        src={selectedImage}
        alt="Preview"
        className="w-full max-h-[90vh] object-contain rounded-xl shadow-2xl bg-white"
      />

    </div>
  </div>
)}


      
    </div>
  );
}
