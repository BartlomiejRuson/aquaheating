import React, { useState } from "react";
import Image from "next/image";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";
const image0 = require("../images/slider2.jpg");
const image1 = require("../images/slider3.jpg");
const image2 = require("../images/Baner_3A.jpg");
const image3 = require("../images/Baner_4A.JPG");

function Slider() {
  const slides = [image1, image0,image2,image3];
  const titles = ["ODPŁYWY","ODPŁYWY","ZLEWY / KOMORY","ARMATURA"];
  const links = ["/Armatura_sanitarna/Odplywy","/Armatura_sanitarna/Odplywy","/Armatura_sanitarna/Zlewy","/Products"];
  const slidesLength = slides.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slidesLength - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    setCurrentIndex(currentIndex === slidesLength - 1 ? 0 : currentIndex + 1);
  };
  return (
    <div className="w-full flex justify-center items-center relative select-none">
      <FaArrowAltCircleLeft
        className="leftArrow z-10 absolute md:hover:text-aquaBlue transition-all"
        onClick={prevSlide}
      />
      {slides.map((slide, index) => (
        <div
          className={index === currentIndex ? "slide active " : "slide"}
          key={index}
        >
          <div className={index===currentIndex?'sliderTextActive':'sliderTextUnactive'}>
            <h2 className="bg-black text-white p-3 md:p-5 mb-5 font-semibold text-lg md:text-3xl overflow-hidden">{titles[index]}</h2>
            <Link href={links[index]} className="text-center bg-white font-semibold p-2 md:p-3 hover:text-aquaBlue  transition-all text-sm md:text-xl ">SPRAWDŹ</Link>
          </div>

          {index === currentIndex && <Image priority className="sliderImg" alt={titles[index]} src={slide}></Image>}
        </div>
      ))}
      <FaArrowAltCircleRight
        className="rightArrow z-10 absolute md:hover:text-aquaBlue transition-all"
        onClick={nextSlide}
      />
    </div>
  );
}

export default Slider;
