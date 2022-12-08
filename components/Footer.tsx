import React from "react";
import Image from "next/image";
import logoImage from '../images/AquaHeating_logo_700_2px-removebg-preview.png'
function Footer() {
  return (
    <footer className="bg-black absolute left-0 h-72 w-screen">
      <div className="flex h-full justify-around items-center text-white text-center font-semibold text-lg">
        <div className="">
<Image src={logoImage} alt="Aqua Heating footer logo" width={210} height={120}></Image>
        </div>
        <div>
          <p>AQUA HEATING</p>
          <p>SUŁÓW 198A</p>
          <p>32-020 Wieliczka</p>
        </div>
        <div>
        <p>www.aquaheating .pl</p>
          <p>biuro @aquaheating</p>
          <p>+48 xxx xxx xxx</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
