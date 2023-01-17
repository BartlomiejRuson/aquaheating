import React,{useRef} from "react";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";
import Image from "next/image";
import phoneLogo from "../images/AH_logo.jpg";
function Nav() {
  const myRef = useRef();
  const handleClick = () =>{

      myRef.current.classList.toggle('hidden');


  }





  return (
    <nav className="min-h-fit font-semibold p-10 sticky top-0 left-0 bg-white z-20 text-base shadow-lg">

      <Link href="/" className="absolute logo left-2 md:left-6  mt-[10px]">
        <Image
          src={phoneLogo}
          alt="Aqua Heating logo"
          width={100}
          height={100}
        ></Image>
      </Link>
      <div className="hidden md:flex max-w-2xl mx-auto justify-around pl-3 relative">
        <Link className="hover:text-aquaBlue transition-all" href="/">
          STRONA GŁÓWNA
        </Link>
        <Link className="hover:text-aquaBlue transition-all" href="/O_nas">
          O NAS
        </Link>
        <div className="   cursor-pointer group/dropdown text-center">
          <span className="hover:text-aquaBlue relative transition-all block ">
            <Link href='/Produkty'>PRODUKTY</Link> {" "}
            <span className="dropdownArrow mx-auto">
              <AiOutlineDown className="m-auto" />
            </span>
          </span>

          <div className="hidden absolute dropDownMenu bg-white z-50 top-10 h-30 group-hover/dropdown:block w-2/5">
            <ul className="grid grid-cols-1 pb-3 text-left">
            <li className="py-2 px-10 min-w-fit  text-left">
                <Link
                  href="/Armatura_sanitarna/Odplywy"
                  className="hover:text-aquaBlue transition-all"
                >
                  ODPLYWY
                </Link>
              </li>
              <li className="py-2 px-10 min-w-fit  text-left">
                <Link
                  href="/Armatura_sanitarna/Zlewy"
                  className="hover:text-aquaBlue transition-all"
                >
                  ZLEWY / KOMORY
                </Link>
              </li>

              <li className="py-2 px-10 min-w-fit text-left">
                <Link
                  href="/Technika_grzewcza_sanitarna"
                  className="hover:text-aquaBlue transition-all"
                >
                  TECHNIKA GRZEWCZA SANITARNA
                </Link>{" "}
              </li>
              <li className="py-2 px-10 min-w-fit text-left">
                <Link
                  href="/Lista_Akcesoriow"
                  className="hover:text-aquaBlue transition-all"
                >
                  AKCESORIA
                </Link>{" "}
              </li>
              
            </ul>
          </div>
        </div>
        <Link className="hover:text-aquaBlue transition-all" href="/Galeria">
          GALERIA
        </Link>
        <Link className="hover:text-aquaBlue transition-all" href="/Do_Pobrania">
          DO POBRANIA
        </Link>
        <Link className="hover:text-aquaBlue transition-all" href="/Kontakt">
          KONTAKT
        </Link>
      </div>
      <button onClick={handleClick} className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none absolute right-0">
        <div className="w-5 h-1 bg-gray-600 mb-1"></div>
        <div className="w-5 h-1 bg-gray-600 mb-1"></div>
        <div className="w-5 h-1 bg-gray-600 mb-1"></div>
       
      </button>
      <div className="hidden md:hidden" ref={myRef}>
        <ul className="text-center">
          <li  className="p-2"><Link  className="p-2" href="/">STRONA GŁOWNA</Link></li>
          <li  className="p-2"><Link  className="p-2" href="/O_nas">O NAS</Link></li>
          <li  className="p-2"><Link  className="p-2" href="/Produkty">PRODUKTY</Link></li>
          <li  className="p-2"><Link  className="p-2" href="/Galeria">GALERIA</Link></li>
          <li  className="p-2"><Link  className="p-2" href="/Do_Pobrania">DO POBRANIA</Link></li>
          <li  className="p-2"><Link  className="p-2" href="/Kontakt">KONTAKT</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
