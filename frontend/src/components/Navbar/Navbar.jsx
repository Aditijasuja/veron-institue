import React from "react";
import "./Navbar.css";
import myimage from '../../assets/CClogo1.png';
import bgimage from '../../assets/bgimage2.jpg';

function Navbar() {
  return (
    <div>
      <nav className="absolute top-0 left-0 w-full p-5 flex justify-between items-center z-10">
        <div>
          <img
            src={myimage}
            alt="CareConnect Logo"
            className="h-[70px] w-[180px]"
          />
        </div>
        <ul className="flex space-x-6 text-white font-semibold">
          <li>
            <a
              href="#"
              className="inline-block p-[4px] rounded-[8px] hover:backdrop-blur-sm hover:border hover:font-light hover:border-white/30 hover:bg-white/30 hover:text-black transition duration-300 hover:scale-120"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block p-[4px] rounded-[8px] hover:backdrop-blur-sm hover:border hover:font-light hover:border-white/30 hover:bg-white/30 hover:text-black transition duration-300 hover:scale-120"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block p-[4px] rounded-[8px] hover:backdrop-blur-sm hover:border hover:font-light hover:border-white/30 hover:bg-white/30 hover:text-black transition duration-300 hover:scale-120"
            >
              Contact us
            </a>
          </li>
          <li>
            <a
              className="p-[8px] rounded-[8px] border border-white bg-white hover:bg-white/30 text-black transition duration-300 mt-[10px] hover:backdrop-blur-sm "
              href="#"
            >
              Appointment
            </a>
          </li>
        </ul>
      </nav>
      <div className="h-[100%] w-[100%] ">
        <img
          src={bgimage}
          alt="bgimage"
          className="h-screen w-screen object-cover"
        />
        <div className="bg-overlay"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="font-extrabold text-5xl text-white">
          The Best Reliable Health Service
          <span className="block ">In Your Hands</span>
        </h1>
        <p className="mb-[20px] text-xl font-semibold mt-[20px] ml-[3px] text-gray-300 ">
          Reliable Care for a Healthier Tomorrow
        </p>
        <button className="text-lg text-white font-semibold border border-blue-300 rounded-md p-4 animate-bounce mt-[10px] cursor-pointer hover:outline-2 hover:outline-blue-300">
          Make Appointement
        </button>
      </div>
    </div>
  );
}
export default Navbar;
