"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BounceLoader } from "react-spinners";

const About: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-400 p-6 relative overflow-hidden">
      {loading ? (
        <div className="flex flex-col items-center justify-center" aria-live="polite">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-600 opacity-60" />
          <BounceLoader color="#ffffff" size={150} />
          <p className="text-lg text-white  font-bold"><b>Loading</b>.......</p>
          <p className="text-md text-white font-bold"><b>Please hold on while we fetch your content!</b></p>
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <Image
            src="/images/xyz.jpg"
            alt="A picture of me"
            width={500}
            height={300}
            className="border border-gray-800 rounded-xl mb-6 shadow-lg transition-transform transform hover:scale-105"
          />
          <p className="text-lg text-white max-w-2xl text-center">
            <i>
              <b> Hey there! I'm Bilal Shaheen! 🌈

              As a passionate AI Web Developer from the bustling city of Karachi, Pakistan, I live and breathe web development! With every line of code, I embark on a journey filled with creativity and innovation. My curiosity drives me to explore the latest trends and technologies, ensuring I stay at the forefront of the digital world.

              I believe that the web is a canvas for storytelling and connection, and I'm here to craft experiences that inspire and engage. Whether it’s building sleek interfaces or diving into complex algorithms, I'm all about transforming ideas into stunning realities.

              Let’s collaborate and bring your visions to life! Together, we can create something truly extraordinary! </b>🚀✨
            </i>
          </p>
        </>
      )}
    </div>
  );
};

export default About;
