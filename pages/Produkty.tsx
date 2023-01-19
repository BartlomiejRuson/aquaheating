import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Image from "next/image";
import Link from "next/link";
const image1 = require("../images/Dol_1.jpg");
const image2 = require("../images/Dol_2.jpg");
const image3 = require("../images/Dol_3.jpg");
const image4 = require("../images/Dol_4.jpg");
function Products() {
  return (
    <div>
      <Nav></Nav>
      <div className="flex flex-col items-center md:flex-row justify-around text-center">
      <div className="md:w-1/5 my-10 pb-5 border rounded-sm">
          <h2 className="text-xl p-5 font-semibold">
            ODPŁYWY
          </h2>
          <Image
            width={1500}
            src={image1}
            alt="Odpływy"
            className="mb-12"
          />
          <Link
            href="/Armatura_sanitarna/Odplywy"
            className="text-center aboutButton bg-aquaBlue text-white font-semibold p-3 mx-auto transition-all text-xl"
          >
            SPRAWDŹ
          </Link>
        </div>
        <div className="md:w-1/5 my-10 pb-5 border rounded-sm">
          <h2 className="text-xl p-5 font-semibold">
            ZLEWY / KOMORY
          </h2>
          <Image
            width={1500}
            src={image2}
            alt="Zlewy komory"
            className="mb-12"
          />
          <Link
            href="/Armatura_sanitarna/Zlewy"
            className="text-center aboutButton bg-aquaBlue text-white font-semibold p-3 mx-auto transition-all text-xl"
          >
            SPRAWDŹ
          </Link>
        </div>
        <div className="md:w-1/5 my-10 pb-5 border rounded-sm">
          <h2 className="text-xl p-5 uppercase font-semibold">
            TECHNIKA GRZEWCZA SANITARNA
          </h2>
          <Image
            width={1500}
            src={image3}
            alt="Technika grzewcza sanitarna"
            className="mb-12"
          />
          <Link
            href="/Technika_grzewcza_sanitarna"
            className="text-center aboutButton bg-aquaBlue text-white font-semibold p-3 mx-auto transition-all text-xl"
          >
            SPRAWDŹ
          </Link>
        </div>

        <div className="md:w-1/5 my-10 pb-5 border rounded-sm">
          <h2 className="text-xl p-5 font-semibold">
            AKCESORIA
          </h2>
          <Image width={1500} src={image4} alt="Akcesoria" className="mb-12"/>
          <div className="flex text-center justify-around items-center">
            <div className="">
              <Link
                href="/Lista_Akcesoriow"
                className="text-center aboutButton bg-aquaBlue text-white font-semibold p-3 mx-auto transition-all text-xl"
              >
                SPRAWDŹ
              </Link>
            </div>
          </div>
        </div>




      </div>
      <Footer />
    </div>
  );
}

export default Products;
