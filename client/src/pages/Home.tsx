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
    <motion.section
      className="py-16 lg:py-24 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-blue-50/70 to-purple-50/60"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start glass-card p-8 lg:p-12 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/90 border border-white/60">
          
          {/* TEXT CONTENT FIRST - LEFT SIDE */}
          <motion.div 
            className="space-y-5 order-2 lg:order-1"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-slate-900 via-indigo-900 to-blue-900 bg-clip-text text-transparent leading-tight tracking-tight">
                {name}
              </h1>
              <motion.div 
                className="absolute -bottom-1.5 left-0 w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
            
            <div className="space-y-2.5">
              <p className="text-lg lg:text-xl text-purple-700 font-bold bg-purple-100/60 px-4 py-1.5 rounded-full inline-block shadow-sm">
                {title}
              </p>
              <p className="text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">{department}</p>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{institution}</p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-3 pt-2"
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl px-7 py-5 text-base lg:text-lg font-semibold transform hover:-translate-y-1 transition-all duration-300 rounded-xl">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 mr-2 group-hover:animate-pulse" />
                <a href={`mailto:${email}`} className="flex items-center">
                  Email
                </a>
              </Button>
              <Button variant="outline" className="border-2 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 px-7 py-5 text-base lg:text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 rounded-xl" asChild>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <FaLinkedin className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* 🚀 INNOVATIVE 3D FLOATING PHOTO BOX */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end pt-8 lg:pt-0"
            initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            <div className="relative group">
              
              {/* ✨ Multi-layered dynamic glow */}
              <motion.div
                className="absolute -inset-6 lg:-inset-8 bg-gradient-to-r from-blue-300/40 via-indigo-300/30 to-purple-300/40 rounded-3xl blur-3xl opacity-60 group-hover:opacity-90 transition-all duration-1000"
                animate={{ 
                  scale: [1, 1.05, 1.02, 1], 
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* 🎨 Secondary glow ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-200/50 to-purple-200/50 blur-xl opacity-50 group-hover:opacity-80"
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* 🖼️ 3D PHOTO FRAME WITH GLASS EFFECT */}
              <motion.div 
                className="relative bg-gradient-to-br from-white/95 via-white/90 to-slate-50/80 rounded-2xl shadow-2xl lg:shadow-3xl border-4 border-white/90 backdrop-blur-xl group-hover:shadow-[0_35px_60px_-15px_rgba(59,130,246,0.3)] group-hover:border-blue-200/80 transition-all duration-700 hover:-translate-y-3 hover:rotate-1 z-20 overflow-hidden perspective-1000"
                style={{ perspective: '1000px' }}
                whileHover={{ 
                  rotateX: 5, 
                  rotateY: 5, 
                  scale: 1.02,
                  transition: { duration: 0.4, type: "spring" }
                }}
              >
                {/* Inner glass container */}
                <div className="relative w-60 h-72 lg:w-80 lg:h-96 p-6 lg:p-8 bg-gradient-to-br from-white/80 to-slate-50/40 backdrop-blur-md border border-white/60 rounded-2xl overflow-hidden">
                  
                  {/* Animated photo frame border */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-700"
                    animate={{ pathLength: [0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* ✨ Floating particles */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 lg:w-1.5 lg:h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40"
                      style={{
                        left: `${10 + i * 12}%`,
                        top: `${15 + (i % 3) * 20}%`,
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        y: [0, -8, 0],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{
                        duration: 2 + i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                  
                  {/* 📸 MAIN PHOTO */}
                  <motion.img 
                    src={photoUrl} 
                    alt={name}
                    className="w-full h-[90%] object-cover rounded-xl border-4 border-white/95 shadow-2xl absolute inset-0 mx-auto my-auto hover:scale-105 transition-transform duration-700"
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 1,
                      y: -4
                    }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                  />
                  
                  {/* Photo corner fold effect */}
                  <motion.div 
                    className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-tl from-white/90 to-slate-200/70 border border-white/80 rounded-lg shadow-lg rotate-[-15deg] opacity-80"
                    animate={{ rotate: [-15, -20, -15] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                </div>
              </motion.div>
              
              {/* 💎 Diamond accent */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-emerald-400/80 via-yellow-400/70 to-orange-400/80 shadow-2xl rotate-45 opacity-70"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [45, 50, 45]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
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

      <footer className="mt-24 lg:mt-32 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-indigo-900/95 text-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.2),transparent_60%)]"></div>
        <Footer
          professorName="Dr. S. Neelakandan"
          institution="R.M.K. Engineering College"
          email="drsnk730@gmail.com"
          linkedin="https://linkedin.com"
          youtube="https://youtube.com"
        />
        {/* <p className="text-center text-sm text-gray-300 py-8 border-t border-white/20 relative z-10">
          © {new Date().getFullYear()} R.M.K. Engineering College | 
          <span className="font-semibold text-indigo-300 ml-1">Crafted with 💙 by MOHAMED RIYAZ I</span>
        </p> */}
      </footer>
    </div>
  );
}
