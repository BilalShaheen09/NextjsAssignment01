"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div className="relative bg-[#A6B37D] h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/error-bg.jpg')] bg-cover bg-center opacity-30"></div>

      <h1 className="text-6xl font-extrabold text-white mb-4 animate-bounce">
       36 errors  ⚠️
      </h1>
      <p className="text-xl text-white mb-8 max-w-md transition-opacity duration-500 ease-in-out opacity-90 hover:opacity-100">
        This page is currently exploring the universe... and got lost! 🌌✨
      </p>

      <img
        src="https://media.giphy.com/media/xT9Igp1C7EsKj9Qw0I/giphy.gif"
        alt="Lost Astronaut"
        className="w-64 h-64 mb-4"
      />

      <button className="bg-[#DE3163] hover:bg-[#DE3163] text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <Link href="/">Send Me Back to Earth! 🌍</Link>
      </button>

    
    </div>
  );
}
