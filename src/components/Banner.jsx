import React from "react";
import Container from "./Container";
import { ShinyText } from "./lightswind/shiny-text";
import { SlidingLogoMarquee } from "./lightswind/sliding-logo-marquee";
import bannerImage from "../assets/erasebg-transformed (1).png";

// React Icons
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

// Logo items for marquee
const techIcons = [
  { id: "html", icon: <FaHtml5 className="text-orange-600 text-3xl" title="HTML5" /> },
  { id: "css", icon: <FaCss3Alt className="text-blue-600 text-3xl" title="CSS3" /> },
  { id: "tailwind", icon: <SiTailwindcss className="text-cyan-500 text-3xl" title="Tailwind CSS" /> },
  { id: "bootstrap", icon: <FaBootstrap className="text-purple-600 text-3xl" title="Bootstrap" /> },
  { id: "react", icon: <FaReact className="text-blue-400 text-3xl" title="React" /> },
  { id: "node", icon: <FaNodeJs className="text-green-600 text-3xl" title="Node.js" /> },
  { id: "express", icon: <SiExpress className="text-black text-3xl" title="Express.js" /> },
  { id: "mongodb", icon: <SiMongodb className="text-green-500 text-3xl" title="MongoDB" /> },
];

export default function Banner() {
  return (
    <section className="py-14 pt-[130px]">
      <Container>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left Side Text */}
          <div className="flex-1 -mt-[40px] ">
            <ShinyText className="text-[50px] font-bold mb-4">
              Md. Sharowar Hossain 
            </ShinyText>

            <p className="text-white text-[18px] max-w-xl w-full leading-relaxed mb-6">
              A Full Stack Web Developer who builds fast, modern websites and web apps
              that actually work. From eye-catching frontends to solid backend systems,
              I bring ideas to life with clean code and creative thinking.
              Let’s build something amazing together!
              <br />
              <span className="text-[16px]  text-white pt-10 block">
                CERTIFIED BY CREATIVE IT, <br /> South Asia's Best Institute.
              </span>
            </p>

            <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-250 shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
              Let’s Get Started
            </button>
          </div>

          {/* Right Side Image + Icons */}
          <div className="flex-1 flex flex-col items-centerc -mt-14 justify-center relative">
            {/* Blurred Background Glow */}
            <div className="absolute top-0 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 blur-2xl opacity-50 z-0 "></div>

            {/* Image */}
            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden shadow-xl z-10 -mt-12">
              <img
                src={bannerImage}
                alt="Developer Illustration"
                className="w-[470px] h-[470px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Sliding Icons */}
            <div className="w-full max-w-[500px] mt-8 px-2 overflow-hidden z-10">
              <SlidingLogoMarquee
                items={techIcons.map(icon => ({
                  id: icon.id,
                  content: <div className="hover:scale-110 transition">{icon.icon}</div>,
                }))}
                speed={30}
                height="80px"
                enableBlur={true}
                blurIntensity={2}
                pauseOnHover={true}
                showGridBackground={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
