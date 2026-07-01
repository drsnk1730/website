import React from "react";
import AchievementsSection from "@/components/AchievementsSection";
import AffiliationsSection from "@/components/AffiliationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import professorPhoto from "@assets/imagep.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import intiLogo from "@assets/inti-logo.png";
import ucsiLogo from "@assets/ucsi-logo.png";
import VideoSection from "@/components/VideoSection";
import rmkLogo from "@assets/rmk-logo.png";
import { Brain, LineChart, MousePointer } from "lucide-react";
/* ---------------- Refined Animation Variants ---------------- */

const sectionVariants = {
  hidden: { opacity: 0, y: 64, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, type: "spring", bounce: 0.35 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      type: "spring",
      bounce: 0.35,
      duration: 0.75,
    },
  }),
};

const expertiseAreas = [
  { name: "Artificial Intelligence", icon: "Brain" },
  { name: "Data Science", icon: "BarChart3" },
  { name: "Human Computer Interaction", icon: "Mouse" }
];

<ExpertiseCards expertiseAreas={expertiseAreas} />

const iconMap = {
  ai: Brain,
  data: LineChart,
  hci: MousePointer,
};


/* ---------------- Hero Section - Reduced Font Sizes ---------------- */

/* ---------------- Hero Section - CORRECTED CORNER IMAGE LAYOUT ---------------- */

/* ---------------- Hero Section - SQUARE PHOTO BOX (CORRECTED) ---------------- */

/* ---------------- Hero Section - INNOVATIVE 3D PHOTO BOX ---------------- */

function HeroSection({
  name,
  title,
  department,
  institution,
  photoUrl,
  email,
  linkedin,
  youtube,
}) {
  return (
    <section className="relative bg-[#f8f5f0] py-20 lg:py-28 overflow-hidden">
      {/* Subtle warm texture overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[#1a1a2e]/[0.03] clip-hero" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8b1a1a]/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center max-w-5xl mx-auto">

          {/* TEXT */}
          <motion.div
            className="space-y-7"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow label */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#8b1a1a] rounded-full" />
              <span className="text-[0.72rem] font-['DM_Sans',sans-serif] font-semibold tracking-[0.18em] uppercase text-[#8b1a1a]">
                Professor &amp; Researcher
              </span>
            </div>

            {/* Name */}
            <div>
              <h1
                className="font-['Lora',Georgia,serif] text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-[#1a1a2e] leading-[1.15] tracking-[-0.02em]"
                data-testid="text-professor-name"
              >
                {name}
              </h1>
              <motion.div
                className="mt-3 w-14 h-[3px] bg-[#8b1a1a] rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>

            {/* Title & Info */}
            <div className="space-y-1.5">
              <p
                className="font-['DM_Sans',sans-serif] text-lg font-semibold text-[#1a1a2e]/80"
                data-testid="text-professor-title"
              >
                {title}
              </p>
              <p
                className="font-['DM_Sans',sans-serif] text-base text-[#5a5248]"
                data-testid="text-professor-department"
              >
                {department}
              </p>
              <p
                className="font-['DM_Sans',sans-serif] text-base text-[#7a7060]"
                data-testid="text-professor-institution"
              >
                {institution}
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {email && (
                <a
                  href={`mailto:${email}`}
                  data-testid="button-email"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#8b1a1a] text-white text-sm font-['DM_Sans',sans-serif] font-medium rounded-md hover:bg-[#a01e1e] transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-linkedin"
                  className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#1a1a2e]/20 text-[#1a1a2e] text-sm font-['DM_Sans',sans-serif] font-medium rounded-md hover:border-[#8b1a1a] hover:text-[#8b1a1a] transition-colors duration-200 bg-white shadow-sm"
                >
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
              {youtube && (
                <a
                  href={youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-youtube"
                  className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#1a1a2e]/20 text-[#1a1a2e] text-sm font-['DM_Sans',sans-serif] font-medium rounded-md hover:border-[#8b1a1a] hover:text-[#8b1a1a] transition-colors duration-200 bg-white shadow-sm"
                >
                  <FaYoutube className="w-4 h-4" />
                  YouTube
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* PHOTO */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative frame offset */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#8b1a1a]/20 rounded-2xl" />
              {/* Photo */}
              <div className="relative w-64 h-80 lg:w-72 lg:h-[340px] rounded-2xl overflow-hidden border-4 border-white shadow-[0_20px_60px_-10px_rgba(26,26,46,0.18)] bg-[#e8e2d9]">
                <img
                  src={photoUrl}
                  alt={name}
                  className="w-full h-full object-cover object-top"
                  data-testid="img-professor"
                />
              </div>
              {/* Accent dot grid */}
              <div className="absolute -top-5 -left-5 grid grid-cols-3 gap-1.5 opacity-30">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#8b1a1a]" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




/* ---------------- Expertise Cards - Refined ---------------- */

function ExpertiseCards({ expertiseAreas }) {
  return (
    <motion.section
      className="py-16 lg:py-24 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-blue-50/30 to-indigo-50/20"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.h2 
          className="text-2xl lg:text-3xl xl:text-4xl font-black text-center mb-4 bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent tracking-tight"
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Areas of Expertise
        </motion.h2>
        <p className="text-lg lg:text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
          Specialized domains of research and professional practice
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">

          {expertiseAreas.map((area, index) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.div
                key={area.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className="h-full p-8 lg:p-10 border-0 shadow-lg hover:shadow-2xl bg-gradient-to-br from-white to-slate-50/70 backdrop-blur-sm border border-slate-100/60 hover:border-blue-200/70 transition-all duration-500 rounded-2xl lg:rounded-3xl overflow-hidden">
                  <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8 h-full justify-between">
                    
                    <motion.div
                      className="relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/50 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-500"
                      whileHover={{ rotate: 3 }}
                      transition={{ type: "spring", stiffness: 350 }}
                    >
                      <Icon className="h-12 w-12 lg:h-14 lg:w-14 text-blue-600 drop-shadow-md group-hover:text-blue-700 transition-all duration-300 mx-auto" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                    </motion.div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                        {area.name}
                      </div>
                      <div className="h-0.5 w-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

/* ---------------- Main Home Page with EXTRAORDINARY Hero Card ---------------- */

export default function Home() {
  const expertiseAreas = [
  { name: "Artificial Intelligence", icon: "ai" },
  { name: "Data Science", icon: "data" },
  { name: "Human Computer Interaction", icon: "hci" },
];


  const achievements = [
    { value: "2", label: "World's Top Scientist", icon: "trophy" },
    { label: "Post Doc with Fellowship", icon: "education" },
    { value: "7", label: "Professional Society Membership", icon: "users" },
  ];

    const contactInfo = {
    homeAddress: "No 14 A, Kanchipadi,",
    city: "Thiruvalur - 631704 , Tamil Nadu, India",

    workAddress:
      "R.M.K. Engineering College, Kavaraipettai, Gummidipoondi Taluk, Tiruvallur District, Tamil Nadu - 601206",

    email: "drsnk730@gmail.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-900">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/80">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-indigo-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
      <main className="relative z-10 space-y-20 lg:space-y-28 pt-8">
        <HeroSection
          name="Dr.Neelakandan Subramani"
          title="Professor, Post Doc(Brain Pool Research Fellowship)"
          department="Department of Computer Science and Engineering"
          institution="R.M.K. Engineering College Chennai India"
          photoUrl={professorPhoto}
          email="drsnk730@gmail.com"
          linkedin="https://www.linkedin.com/in/drsneelakandan "
          youtube="https://youtube.com"
        />
        <VideoSection />
        {/* 🚀 EXTRAORDINARY Current Appointments Section */}
        <motion.section
          className="py-16 lg:py-24 relative"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Floating geometric background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-100/40 to-indigo-100/20 rounded-3xl blur-xl rotate-12"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-tr from-purple-100/30 to-pink-100/20 rounded-2xl blur-xl -rotate-6"></div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.h2 
              className="text-2xl lg:text-3xl xl:text-4xl font-black text-center mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent tracking-tight"
              initial={{ y: 25 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Current Appointments
            </motion.h2>
            <p className="text-lg text-gray-600 text-center mb-16 max-w-xl mx-auto leading-relaxed">
              Distinguished academic and research positions held currently
            </p>

            <div className="max-w-5xl mx-auto space-y-8 lg:space-y-12">
              
              
              {/* 🌟 INTI - ULTIMATE CARD DESIGN */}
              <motion.div
                className="group relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-indigo-500/2 to-blue-500/3 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <Card className="relative p-8 lg:p-12 border-0 shadow-2xl lg:shadow-3xl hover:shadow-blue-500/20 bg-white/80 backdrop-blur-xl border border-blue-100/60 hover:border-blue-200/80 transition-all duration-700 rounded-3xl overflow-hidden hover:bg-gradient-to-br hover:from-blue-50/60 hover:to-indigo-50/60">
                  
                  {/* Animated border glow */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 opacity-0 group-hover:opacity-30 blur-xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <div className="relative z-10 flex gap-6 lg:gap-8 items-start h-full">
                    
                    {/* 🚀 LOGO CONTAINER - 3D PERSPECTIVE */}
                    <motion.div
                      className="relative flex-shrink-0 pt-4"
                      whileHover={{ scale: 1.08, rotateY: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <div className="relative">
                        <div className="absolute -inset-3 lg:-inset-4 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="w-28 h-28 lg:w-36 lg:h-36 p-5 lg:p-6 bg-white/90 shadow-2xl rounded-3xl border-2 border-blue-100/70 hover:border-blue-300/80 backdrop-blur-xl group-hover:shadow-blue-300/50 transition-all duration-700 transform hover:-rotate-3">
                          <img
                            src={rmkLogo}
                            alt="INTI International University"
                            className="w-full h-full object-contain rounded-2xl shadow-lg group-hover:scale-105 transition-all duration-500"
                          />
                        </div>
                      </div>
                    </motion.div>


                    {/* ✨ CONTENT - ELEGANT TYPOGRAPHY */}
                    <div className="flex-1 min-w-0 py-2">
                      <motion.h3 
                        className="text-xl lg:text-2xl xl:text-3xl font-black text-gray-900 group-hover:text-blue-700 transition-all duration-500 mb-3 leading-tight"
                        whileHover={{ scale: 1.02 }}
                      >
                        Professor - Research
                      </motion.h3>
                      
                      <div className="space-y-2">
                        <p className="text-base lg:text-lg font-semibold text-gray-700 mb-3 leading-relaxed">
                          R.M.K Engineering College
                          <span className="text-blue-600 font-bold block text-sm lg:text-base">· Full-time</span>
                        </p>
                        
                        {/* 🏆 STATUS BARS */}
                        <div className="flex flex-wrap gap-3 mb-4">
                          <motion.div 
                            className="px-4 py-2 bg-gradient-to-r from-indigo-100/80 to-green-100/80 text-indigo-700 font-bold text-sm lg:text-base rounded-xl shadow-md backdrop-blur-sm border border-indigo-200/60 hover:shadow-lg transition-all duration-300 cursor-default"
                            whileHover={{ scale: 1.05 }}
                          >
                            Sep 2021 - Till Date
                            {/* <span className="block font-normal text-indigo-600 text-xs">1yrs 6mo</span> */}
                          </motion.div>
                          
                          {/* <motion.div 
                            className="px-4 py-2 bg-gradient-to-r from-emerald-100/80 to-green-100/80 text-emerald-700 font-bold text-sm lg:text-base rounded-xl shadow-md backdrop-blur-sm border border-emerald-200/60 flex items-center hover:shadow-lg transition-all duration-300 cursor-default"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2 shadow-lg"></div>
                            Hybrid · Kuala Lumpur, Malaysia
                          </motion.div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* 🌟 INTI - ULTIMATE CARD DESIGN */}
              <motion.div
                className="group relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-indigo-500/2 to-blue-500/3 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <Card className="relative p-8 lg:p-12 border-0 shadow-2xl lg:shadow-3xl hover:shadow-blue-500/20 bg-white/80 backdrop-blur-xl border border-blue-100/60 hover:border-blue-200/80 transition-all duration-700 rounded-3xl overflow-hidden hover:bg-gradient-to-br hover:from-blue-50/60 hover:to-indigo-50/60">
                  
                  {/* Animated border glow */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 opacity-0 group-hover:opacity-30 blur-xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <div className="relative z-10 flex gap-6 lg:gap-8 items-start h-full">
                    
                    {/* 🚀 LOGO CONTAINER - 3D PERSPECTIVE */}
                    <motion.div
                      className="relative flex-shrink-0 pt-4"
                      whileHover={{ scale: 1.08, rotateY: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <div className="relative">
                        <div className="absolute -inset-3 lg:-inset-4 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="w-28 h-28 lg:w-36 lg:h-36 p-5 lg:p-6 bg-white/90 shadow-2xl rounded-3xl border-2 border-blue-100/70 hover:border-blue-300/80 backdrop-blur-xl group-hover:shadow-blue-300/50 transition-all duration-700 transform hover:-rotate-3">
                          <img
                            src={intiLogo}
                            alt="INTI International University"
                            className="w-full h-full object-contain rounded-2xl shadow-lg group-hover:scale-105 transition-all duration-500"
                          />
                        </div>
                      </div>
                    </motion.div>


                    {/* ✨ CONTENT - ELEGANT TYPOGRAPHY */}
                    <div className="flex-1 min-w-0 py-2">
                      <motion.h3 
                        className="text-xl lg:text-2xl xl:text-3xl font-black text-gray-900 group-hover:text-blue-700 transition-all duration-500 mb-3 leading-tight"
                        whileHover={{ scale: 1.02 }}
                      >
                        Visiting Research Fellow
                      </motion.h3>
                      
                      <div className="space-y-2">
                        <p className="text-base lg:text-lg font-semibold text-gray-700 mb-3 leading-relaxed">
                          INTI International University-Malaysia
                          <span className="text-blue-600 font-bold block text-sm lg:text-base">· Part-time</span>
                        </p>
                        
                        {/* 🏆 STATUS BARS */}
                        <div className="flex flex-wrap gap-3 mb-4">
                          <motion.div 
                            className="px-4 py-2 bg-gradient-to-r from-indigo-100/80 to-blue-100/80 text-indigo-700 font-bold text-sm lg:text-base rounded-xl shadow-md backdrop-blur-sm border border-indigo-200/60 hover:shadow-lg transition-all duration-300 cursor-default"
                            whileHover={{ scale: 1.05 }}
                          >
                            Apr 2025 – Present
                            <span className="block font-normal text-indigo-600 text-xs">10 mos</span>
                          </motion.div>
                          
                          {/* <motion.div 
                            className="px-4 py-2 bg-gradient-to-r from-emerald-100/80 to-green-100/80 text-emerald-700 font-bold text-sm lg:text-base rounded-xl shadow-md backdrop-blur-sm border border-emerald-200/60 flex items-center hover:shadow-lg transition-all duration-300 cursor-default"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2 shadow-lg"></div>
                            Hybrid · Kuala Lumpur, Malaysia
                          </motion.div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* 🔥 UCSI - MATCHING MASTERPIECE */}
              <motion.div
                className="group relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-pink-500/2 to-purple-500/3 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <Card className="relative p-8 lg:p-12 border-0 shadow-2xl lg:shadow-3xl hover:shadow-purple-500/20 bg-white/80 backdrop-blur-xl border border-purple-100/60 hover:border-purple-200/80 transition-all duration-700 rounded-3xl overflow-hidden hover:bg-gradient-to-br hover:from-purple-50/60 hover:to-pink-50/60">
                  
                  <motion.div 
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <div className="relative z-10 flex gap-6 lg:gap-8 items-start h-full">
                    
                    <motion.div
                      className="relative flex-shrink-0 pt-4"
                      whileHover={{ scale: 1.08, rotateY: -10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <div className="relative">
                        <div className="absolute -inset-3 lg:-inset-4 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="w-28 h-28 lg:w-36 lg:h-36 p-5 lg:p-6 bg-white/90 shadow-2xl rounded-3xl border-2 border-purple-100/70 hover:border-purple-300/80 backdrop-blur-xl group-hover:shadow-purple-300/50 transition-all duration-700 transform hover:-rotate-3">
                          <img
                            src={ucsiLogo}
                            alt="UCSI University"
                            className="w-full h-full object-contain rounded-2xl shadow-lg group-hover:scale-105 transition-all duration-500"
                          />
                        </div>
                      </div>
                    </motion.div>


                    <div className="flex-1 min-w-0 py-2">
                      <motion.h3 
                        className="text-xl lg:text-2xl xl:text-3xl font-black text-gray-900 group-hover:text-purple-700 transition-all duration-500 mb-3 leading-tight"
                        whileHover={{ scale: 1.02 }}
                      >
                        Visiting Professor
                      </motion.h3>
                      
                      <div className="space-y-2">
                        <p className="text-base lg:text-lg font-semibold text-gray-700 mb-3 leading-relaxed">
                          UCSI University
                          <span className="text-purple-600 font-bold block text-sm lg:text-base">· Full-time Equivalent</span>
                        </p>
                        
                        <div className="flex flex-wrap gap-3 mb-4">
                          <motion.div 
                            className="px-4 py-2 bg-gradient-to-r from-purple-100/80 to-pink-100/80 text-purple-700 font-bold text-sm lg:text-base rounded-xl shadow-md backdrop-blur-sm border border-purple-200/60 hover:shadow-lg transition-all duration-300 cursor-default"
                            whileHover={{ scale: 1.05 }}
                          >
                            Jan 2024 – Present
                            <span className="block font-normal text-purple-600 text-xs">2 yrs 1 mo</span>
                          </motion.div>
                          
                          {/* <motion.div 
                            className="px-4 py-2 bg-gradient-to-r from-emerald-100/80 to-green-100/80 text-emerald-700 font-bold text-sm lg:text-base rounded-xl shadow-md backdrop-blur-sm border border-emerald-200/60 flex items-center hover:shadow-lg transition-all duration-300 cursor-default"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2 shadow-lg"></div>
                            Hybrid · Malaysia
                          </motion.div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <ExpertiseCards expertiseAreas={expertiseAreas} />

        <motion.section
          className="relative bg-gradient-to-r from-blue-700/95 via-indigo-700/90 to-purple-700/95 py-20 lg:py-28 rounded-3xl shadow-2xl w-[92%] mx-auto text-white text-center overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.4),transparent_60%)]"></div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black mb-12 relative z-10 leading-tight">
            Achievements & Recognition
          </h2>
          <AchievementsSection achievements={achievements} />
        </motion.section>

        <motion.section
          className="container mx-auto px-6 lg:px-20 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
        >
          <h2 className="text-3xl lg:text-4xl font-black text-blue-700 mb-10 tracking-tight">
            Professional Affiliations
          </h2>
          <AffiliationsSection />
        </motion.section>

        <motion.section
          className="bg-gradient-to-br from-slate-50/90 to-indigo-50/70 rounded-3xl shadow-2xl w-[92%] mx-auto py-20 px-8 lg:px-20 border border-white/70 backdrop-blur-sm"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
        >
          <h2 className="text-3xl lg:text-4xl font-black text-center text-blue-700 mb-16 tracking-tight">
            Get in Touch
          </h2>
          <ContactSection contactInfo={contactInfo} />
        </motion.section>
      </main>

      <Footer
          professorName="Dr. S. Neelakandan"
          institution="R.M.K. Engineering College"
          email="drsnk730@gmail.com"
          linkedin="https://linkedin.com"
          youtube="https://youtube.com"
        />
    </div>
  );
}
