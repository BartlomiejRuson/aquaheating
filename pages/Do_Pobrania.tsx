import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
function Do_Pobrania() {
  return (
    <div>
      <Nav />
      <div className="flex gap-2 p-3">
        <a
          className="transition-all font-semibold text-lg hover:text-aquaBlue"
          href="/AQUAHEATING_Katalog_AH-7OL21_flat.pdf"
          target="_blank"
        >
          KATALOG - <span className="italic">Odpływy prysznicowe</span>
        </a>
      </div>
      <h1 className="p-3 text-lg font-semibold">KARTY KATALOGOWE:</h1>
      <div>
        <ul className="list-disc pl-10">
          <li className="p-1 italic">
            {" "}
            <a
              className="transition-all font-semibold text-lg hover:text-aquaBlue"
              href="ODPLYWY_2w1.pdf"
              target="_blank"
            >
              ODPŁYWY Podłogowe - 2w1
            </a>
          </li>
          <li className="p-1 italic">
            {" "}
            <a
              className="transition-all font-semibold text-lg hover:text-aquaBlue"
              href="ODPLYWY_Wzory.pdf"
              target="_blank"
            >
              ODPŁYWY Podłogowe - WZORY
            </a>
          </li>
          <li className="p-1 italic">
            {" "}
            <a
              className="transition-all font-semibold text-lg hover:text-aquaBlue"
              href="ODPLYWY_Szklane.pdf"
              target="_blank"
            >
              ODPŁYWY Podłogowe - SZKLANE
            </a>
          </li>
          <li className="p-1 italic">
            {" "}
            <a
              className="transition-all font-semibold text-lg hover:text-aquaBlue"
              href="ODPLYWY_Slim_Waskie.pdf"
              target="_blank"
            >
              ODPŁYWY Podłogowe - SLIM / WĄSKIE
            </a>
          </li>
          <li className="p-1 italic">
            {" "}
            <a
              className="transition-all font-semibold text-lg hover:text-aquaBlue"
              href="ODPLYWY_Kwadratowe.pdf"
              target="_blank"
            >
              ODPŁYWY Podłogowe - KWADRATOWE
            </a>
          </li>
          <li className="p-1 italic">
            {" "}
            <a
              className="transition-all font-semibold text-lg hover:text-aquaBlue"
              href="ODPLYWY_Obrotowe_360.pdf"
              target="_blank"
            >
              ODPŁYWY Podłogowe - OBROTOWE 360
            </a>
          </li>
          <li className="p-1 italic">
            {" "}
            <a
              className="transition-all font-semibold text-lg hover:text-aquaBlue"
              href="ODPLYWY_Scienne_2w1.pdf"
              target="_blank"
            >
              ODPŁYWY Ścienne - 2w1
            </a>
          </li>
          <li className="my-5 italic">
            {" "}
            <a
              className="transition-all font-semibold text-lg hover:text-aquaBlue"
              href="/KOMORY_Razem.pdf"
              target="_blank"
            >
              ZLEWY / KOMORY GOSPODARCZE
            </a>
          </li>
          <li className="my-5 italic">
            {" "}
            <a
              className="transition-all font-semibold text-lg hover:text-aquaBlue"
              href="/GRZEWKA_Razem.pdf"
              target="_blank"
            >
              TECHNIKA Grzewcza / Sanitarna
            </a>
          </li>
          <li className="mt-5 pb-5 italic">
            {" "}
            <a
              className="transition-all font-semibold text-lg hover:text-aquaBlue"
              href="/AKCESORIA_Razem.pdf"
              target="_blank"
            >
              AKCESORIA
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Do_Pobrania;
