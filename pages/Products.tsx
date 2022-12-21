import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Image from "next/image";
import Link from "next/link";
const image1 = require("../images/Dol_1.jpg");
const image2 = require("../images/Dol_3.jpg");
const image3 = require("../images/Dol_3.jpg");
function Products() {
  return (
    <div>
      <Nav></Nav>
      <div className="flex flex-col items-center md:flex-row justify-around text-center">
        <div className="md:w-1/4 my-10 pb-5 border rounded-sm">
          <h2 className="text-xl p-5 uppercase font-semibold">Armatura sanitarna</h2>
          <Image width={1500} src={image1} alt="Armatura sanitarna" />
          <div className="flex text-center justify-around items-center">
          <div className="">
            <h2 className="text-lg font-semibold mb-5">ODPŁYWY</h2>
            <Link href="/Armatura_sanitarna/Odplywy" className="text-center aboutButton bg-aquaBlue text-white font-semibold p-3 mx-auto transition-all text-xl">SPRAWDŹ</Link>
          </div>
          <div className="">
            <h2 className="text-lg font-semibold mb-5">ZLEWY</h2>
            <Link href="/Armatura_sanitarna/Zlewy" className="text-center aboutButton bg-aquaBlue text-white font-semibold p-3 mx-auto transition-all text-xl">SPRAWDŹ</Link>
          </div>

          </div>
        </div>
        <div className="md:w-1/4 my-10 pb-5 border rounded-sm">
          <h2 className="text-xl p-5 uppercase font-semibold">Armatura grzewcza</h2>
          <Image width={1500} src={image2} alt="Armatura grzewcza"  className="mb-12"/>
        <Link href="/kategorie/Armatura_grzewcza" className="text-center aboutButton bg-aquaBlue text-white font-semibold p-3 mx-auto transition-all text-xl">SPRAWDŹ</Link>
        </div>
        <div className="md:w-1/4 my-10 pb-5 border rounded-sm">
          <h2 className="text-xl p-5 uppercase font-semibold">Armatura hydrauliczna</h2>
          <Image width={1500} src={image3} alt="Armatura hydrauliczna"  className="mb-12"/>
        <Link href="/kategorie/Armatura_hydrauliczna" className="text-center aboutButton bg-aquaBlue text-white font-semibold p-3 mx-auto transition-all text-xl">SPRAWDŹ</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
