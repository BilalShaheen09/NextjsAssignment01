"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div className="relative bg-[#FF7F50] h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/error-bg.jpg')] bg-cover bg-center opacity-30"></div>

      <h1 className="text-6xl font-extrabold text-white mb-4">
        Oops! Something went wrong! ⚠️
      </h1>
      <p className="text-xl text-white mb-8 max-w-md transition-opacity duration-500 ease-in-out opacity-90 hover:opacity-100">
        This page is currently exploring the universe... and got lost! 🌌✨
      </p>

      <img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWxpNmtxaTM4Mm1idHJ0Z2wzd2Z2aWVvdDZsYXUzMXQ5ODFnem01ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LBPi9kAlVrYkf4bmPs/giphy.webp"
        alt="Lost Astronaut"
        className="w-64 h-64 mb-4"
      />

      <button className="bg-[#DE3163] hover:bg-[#03a9f4] text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <Link href="/">Send Me Back to Earth! 🌍</Link>
      </button>
    </div>
  );
}
