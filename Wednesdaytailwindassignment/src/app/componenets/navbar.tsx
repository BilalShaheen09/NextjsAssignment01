import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#03a9f4] py-5">
      <div className="container mx-auto px-4 flex justify-between items-center text-2xl">
        <h1 className="text-yellow-300 text-3xl font-bold hover:text-white">
          <b><i>SHAHEEN</i></b>
        </h1>
        <ul className="flex items-center space-x-8 justify-center flex-grow">
          <li className="text-white hover:text-[#CCFF00] transition duration-300">
            <Link href="/"><b>Home</b></Link>
          </li>
          <li className="text-white hover:text-[#CCFF00] transition duration-300">
            <Link href="/about"><b>About</b></Link>
          </li>
          <li className="text-white hover:text-[#CCFF00] transition duration-300">
            <Link href="/service"><b>Services</b></Link>
          </li>
          <li className="text-white hover:text-[#CCFF00] transition duration-300">
            <Link href="/portfolio"><b>Portfolio</b></Link>
          </li>
          
          <li className="text-white hover:text-[#CCFF00] transition duration-300">
            <Link href="/contact"><b>Contact Us</b></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
