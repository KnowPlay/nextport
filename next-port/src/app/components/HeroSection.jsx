"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            {/* gradient text */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "} 
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                  // Same substring at the start will only be typed out once, initially
                'Sarah',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'a Data Analyst and Consultant',
                800,
                'a Web Developer',
                800,
                'a DevOps Engineer',
                800
                ]}
                wrapper="span"
                speed={5}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
          </h1>
          <div className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-lg">
            <p>🌟 Versatile in applied analytics, computer science, business administration</p>
            <p>📊 Expert in data analysis, consulting, and software integration for client success.</p>
            <p>💻 Seamlessly blending software development with data for enhanced outcomes.</p>
            <p>🚀 Creating tools to optimize operations and empower decision-making.</p>
            <p>🔍 Extracting insights from complex data to guide strategic decisions.</p>
            <p>🔥 Committed to excellence, adaptability, and continuous learning.</p>
            <p>🌍 Passionate about leveraging data insights to driving change and innovation.</p>
          </div>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire Me</button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/profile3.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={260}
              height={260}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
