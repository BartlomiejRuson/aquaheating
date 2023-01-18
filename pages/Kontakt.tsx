import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Contact() {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-2 text-center text-2xl font-semibold ">
        <div className="flex my-10 justify-around items-center flex-col">
          <div className="flex gap-1 flex-col items-center justify-center">
            <p className="pb-1">AQUA HEATING</p>
            <p className="py-1">SUŁÓW 198A</p>
            <p className="py-1">502 229 739</p>
            <p className="py-1">32-020 Wieliczka</p>
            <a
              href="#"
              className="cursor-pointer md:hidden focus:outline-none bg-aquaBlue px-4 py-2 text-white w-fit"
            >
              ZADZWOŃ
            </a>
          </div>
        </div>

        <div>
          <div className="p-5 space-y-5 ">
            <form>
              <div className="flex gap-5 flex-col justify-around">
                <div className="flex">
                  <h4 className="text-left text-3xl">Formularz kontaktowy</h4>
                  <div className="justify-self-end flex-grow">
                  <input
                    type="submit"
                    value="Wyślij"
                    className="cursor-pointer focus:outline-none bg-aquaBlue px-4 py-2 text-white w-fit"
                  />
                  </div>
                  
                </div>
                <div className="flex justify-center items-center">
                  <input
                    placeholder="Twój email"
                    name="email"
                    type="email"
                    className="w-full border border-gray-500 px-4 py-2 focus:outline-none focus:border-aquaBlue"
                  />
                </div>
                <textarea
                  placeholder="Treść wiadomości"
                  name="message"
                  className="w-full border border-gray-500 px-4 py-2 focus:outline-none focus:border-aquaBlue"
                  cols={10}
                  rows={5}
                ></textarea>
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
