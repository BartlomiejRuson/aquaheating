import React,{useRef} from "react";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/Ai";
import Image from "next/image";
import logoImage from "../images/logo.jpg";
import phoneLogo from "../images/AH_logo.jpg";
function Nav() {
  const myRef = useRef();
  const handleClick = () =>{
    myRef.current.classList.toggle('hidden');
  }





  return (
    <nav className="min-h-fit font-semibold p-10 sticky top-0 left-0 bg-white z-20 text-base shadow-lg">
      <Link href="/" className="absolute logo left-5 hidden lg:block">
        <Image
          src={logoImage}
          alt="Aqua Heating logo"
          width={210}
          height={120}
        ></Image>
      </Link>
      <Link href="/" className="absolute logo left-6 lg:hidden mt-[10px]">
        <Image
          src={phoneLogo}
          alt="Aqua Heating logo"
          width={100}
          height={100}
        ></Image>
      </Link>
      <div className="hidden md:flex max-w-xl mx-auto justify-around pl-3 relative">
        <Link className="hover:text-aquaBlue transition-all" href="/">
          STRONA GŁÓWNA
        </Link>
        <Link className="hover:text-aquaBlue transition-all" href="/About">
          O NAS
        </Link>
        <div className="   cursor-pointer group/dropdown text-center">
          <span className="hover:text-aquaBlue relative transition-all block ">
            PRODUKTY{" "}
            <span className="dropdownArrow mx-auto">
              <AiOutlineDown className="m-auto" />
            </span>
          </span>

          <div className="hidden absolute dropDownMenu bg-white z-50 top-10 h-30 group-hover/dropdown:block w-4/5">
            <ul className="grid grid-cols-2 pb-3 text-center">
              <li className="py-2 px-10 min-w-fit  text-center">
                <a
                  href="/Products"
                  className="hover:text-aquaBlue transition-all"
                >
                  Kategoria 1
                </a>{" "}
              </li>
              <li className="py-2 px-10 min-w-fit text-center">
                <a
                  href="/Products"
                  className="hover:text-aquaBlue transition-all"
                >
                  Kategoria 2
                </a>{" "}
              </li>
              <li className="py-2 px-10 min-w-fit   text-center">
                <a
                  href="/Products"
                  className="hover:text-aquaBlue transition-all"
                >
                  Kategoria 3
                </a>{" "}
              </li>
              <li className="py-2 px-10 min-w-fit   text-center">
                <a
                  href="/Products"
                  className="hover:text-aquaBlue transition-all"
                >
                  Kategoria 4
                </a>{" "}
              </li>
              <li className="py-2 px-10 min-w-fit   text-center">
                <a
                  href="/Products"
                  className="hover:text-aquaBlue transition-all"
                >
                  Kategoria 5
                </a>{" "}
              </li>
              <li className="py-2 px-10 min-w-fit   text-center">
                <a
                  href="/Products"
                  className="hover:text-aquaBlue transition-all"
                >
                  Kategoria 6
                </a>{" "}
              </li>
              <li className="py-2 px-10 min-w-fit   text-center">
                <a
                  href="/Products"
                  className="hover:text-aquaBlue transition-all"
                >
                  Kategoria 7
                </a>{" "}
              </li>
              <li className="py-2 px-10 min-w-fit   text-center">
                <a
                  href="/Products"
                  className="hover:text-aquaBlue transition-all"
                >
                  Kategoria 8
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <Link className="hover:text-aquaBlue transition-all" href="/Gallery">
          GALERIA
        </Link>
        <Link className="hover:text-aquaBlue transition-all" href="/Contact">
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
          <li  className="p-2"><Link  className="p-2" href="/About">O NAS</Link></li>
          <li  className="p-2"><Link  className="p-2" href="/Products">PRODUKTY</Link></li>
          <li  className="p-2"><Link  className="p-2" href="/Gallery">GALERIA</Link></li>
          <li  className="p-2"><Link  className="p-2" href="/Contact">KONTAKT</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
