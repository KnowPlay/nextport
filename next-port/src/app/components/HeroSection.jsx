import React from "react";
import Image from "next/image";


const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg: grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                  Hello, I'm Sarah
                </h1>
                <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                    Insert some text
                </p>
            </div>
            <div className="col-span-5"></div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="square-full bg-[#181818] w-[350px] h-[350px] lg:w-[350px] lg;h=[350px] relative">
            <Image
              src="/images/profile4.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            /> 
          </div>

        </div>
    </section>
  )
}

export default HeroSection