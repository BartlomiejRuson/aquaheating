import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function About() {
  return (
    <div className="w-screen">
      <Nav></Nav>
      <div className="pb-10">
        <hr />
        <h1 className="mx-auto my-10 text-center font-semibold text-4xl">O NAS</h1>
        <hr className="mb-10"/>
        <section className="w-4/5 mx-auto mb-10 text-lg">
        Jesteśmy nową, polską marką specjalizującą się w dostarczaniu artykułów wyposażenia sanitarnego oraz  grzewczego od sprawdzonych, doświadczonych światowych producentów. 
Dbamy o to by proponowane przez nas produkty były jak najwyższej jakości, maksymalnie dostosowane do oczekiwań klientów, zgodne z przepisami oraz standardami współczesnego rynku, jednocześnie koncentrując się na nowoczesnym designie, uniwersalności zastosowań, a przy tym aby móc proponować produkty w przystępnych cenach.

        </section>
        <div className="flex w-4/5 mx-auto ">

        <Link href="/Produkty" className="text-center aboutButton bg-aquaBlue text-white font-semibold p-3  transition-all text-xl">SPRAWDŹ NASZĄ OFERTĘ</Link>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default About;
