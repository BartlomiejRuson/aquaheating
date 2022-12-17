import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Contact() {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-2 text-center text-2xl font-semibold ">
        <div className="flex justify-around items-center flex-col">
          <div>
            <p className="pb-1">AQUA HEATING</p>
            <p className="py-1">SUŁÓW 198A</p>
            <p className="py-1">xxx xxx xxx</p>
            <p className="py-1">32-020 Wieliczka</p>
          </div>
        </div>

        <div className="">
          <div className="p-5 space-y-5 ">
            <h4 className="text-center text-3xl">Formularz kontaktowy</h4>
          <form>
            <div className="flex gap-5 flex-col justify-around items-center">
              <input placeholder="email" type="email" className="w-full border border-gray-500 px-4 py-2 focus:outline-none focus:border-aquaBlue"/>
              <textarea className="w-full border border-gray-500 px-4 py-2 focus:outline-none focus:border-aquaBlue" cols={10} rows={5}></textarea>
              <input type="submit" value="Wyślij" className="cursor-pointer focus:outline-none bg-aquaBlue px-4 py-2 text-white w-fit"/>
            </div>
          </form>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
