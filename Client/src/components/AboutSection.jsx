import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id='about'>
      <div className=" bg-gray-50 py-10 px-4 md:py-20 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div className="flex justify-center order-1 lg:order-1">
              <div className="relative w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[450px]">
                <div className="clipped-rectangle w-full h-[350px] sm:h-[450px] lg:h-[550px] flex items-center justify-center text-center px-8">
                  <div>
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-red-500 mb-2 sm:mb-4">7</div>
                    <div className="text-red-500 text-lg sm:text-xl font-medium">Years of Experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8 order-2 lg:order-2 text-center lg:text-left">
              <div className="flex items-center space-x-3 sm:space-x-4 justify-center lg:justify-start">
                <div className="w-8 sm:w-12 h-1 bg-yellow-600"></div>
                <span className="text-gray-600 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-wide">QUI NOUS SOMMES ?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Lorem ipsum dolor sit :
              </h2>

              <p className="text-gray-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delenti illo cupiditate tempora minus animi.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-4 sm:pt-8">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-yellow-600 mb-1 sm:mb-2">+75</div>
                  <div className="text-gray-600 text-base sm:text-lg">Project Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-yellow-600 mb-1 sm:mb-2">99%</div>
                  <div className="text-gray-600 text-base sm:text-lg">Satisfied Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}