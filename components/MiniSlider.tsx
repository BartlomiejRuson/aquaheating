import React from "react";
import Image from "next/image";
import Link from "next/link";
import image1 from "../images/Dol_1.jpg";
import image2 from "../images/Dol_2.jpg";
import image3 from "../images/Dol_3.jpg";
import image4 from "../images/Dol_4.jpg";
function MiniSlider() {
  return (
    <div className="w-4/5 grid grid-cols-2 md:flex md:items-center md:justify-around mx-auto max-w-4/5 py-10">
      <div className="px-1 opacity-90 hover:opacity-100 hover:scale-105 transition-all relative">
      <div className="miniSliderText text-sm md:text-lg opacity-80 hover:opacity-100 text-center bg-white text-black  rounded-md flex items-center justify-center hover:bg-aquaBlue hover:text-white transition-all">
            <Link href="/Armatura_sanitarna/Odplywy" className=" text-md font-semibold p-2  ">ODPŁYWY</Link>
          </div>
        <Image src={image1} width={2000} alt="Odplywy"></Image>
      </div>
      <div className="px-1 opacity-90  hover:opacity-100 hover:scale-105 transition-all relative">
      <div className="miniSliderText text-sm md:text-lg opacity-80 hover:opacity-100 text-center bg-white text-black  rounded-md flex items-center justify-center hover:bg-aquaBlue hover:text-white transition-all">
            <Link href="/Armatura_sanitarna/Zlewy" className=" text-md font-semibold p-2  ">ZLEWY <br /> KOMORY</Link>
          </div>
        <Image src={image2} width={2000} alt="Zlewy"></Image>
      </div>
      <div className="px-1 opacity-90 hover:opacity-100 hover:scale-105 transition-all relative">
      <div className="miniSliderText text-sm md:text-lg opacity-80 hover:opacity-100 text-center bg-white text-black  rounded-md flex items-center justify-center hover:bg-aquaBlue hover:text-white transition-all">
            <Link href="/Technika_grzewcza_sanitarna" className=" text-md font-semibold p-2  ">TECHNIKA <br /> GRZEWCZA <br /> SANITARNA</Link>
          </div>
        <Image src={image3} width={2000} alt="Armatura"></Image>
      </div>
      <div className="px-1 opacity-90 hover:opacity-100 hover:scale-105 transition-all relative">
      <div className="miniSliderText text-sm md:text-lg opacity-80 hover:opacity-100 text-center bg-white text-black  rounded-md flex items-center justify-center hover:bg-aquaBlue hover:text-white transition-all">
            <Link href="/Akcesoria" className=" text-md font-semibold p-2  ">AKCESORIA</Link>
          </div>
        <Image src={image4} width={2000} alt="Akcesoria"></Image>
      </div>
    </div>
  );
}

export default MiniSlider;
