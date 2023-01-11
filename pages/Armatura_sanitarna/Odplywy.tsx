import React from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Image from 'next/image'
import Link from 'next/link'
const mainImg = require("../../images/1_ODPLYWY.jpg")
function Odplywy() {
  return (
    <div>
        <Nav/>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className=' flex justify-start'><Image width={500} className="p-5" src={mainImg} alt="odplywwy"></Image></div>
          <div className='col-span-2 flex flex-col gap-6 justify-center '>
            <h1 className='text-lg'>Prysznic bez brodzika - z odpływami <b>AQUA HEATING</b></h1>
            <p>Odpływy prysznicowe podłogowe lub ścienne to rozwiązanie, które umożliwia stworzyć nowoczesny, wygodny w użytkowaniu, niepowtarzalny, piękny wygląd prysznica.</p>
            <p>ODPŁYWY PODŁOGOWE - to praktyczne rozwiązanie w przestrzeni prysznica z płaską podłogą na całej powierzchni łazienki co eliminuje przeszkodę w postaci progu. To rozwiązanie bezpieczniejsze oraz wygodniejsze w użytkowaniu dla osób niepełnosprawnych.</p>
            <p>ODPŁYWY ŚCIENNE - najczęściej wykorzystywane są kiedy w przestrzeni prysznica zastosowano lub jeżeli planuje się zastosowanie ogrzewania podłogowego. Jednak niepowtarzalny efekt działanie odpływu ściennego często skłania użytkowników do jego montażu tylko ze względu na walory estetyczne.</p>
            <p>Odpływy prysznicowe AQUA HEATING dostępne są w wielu kolorach, wzorach oraz długościach.</p>
            <Link
            href="/Armatura_sanitarna/Lista_odplywow"
            className="text-center aboutButton bg-aquaBlue text-white font-semibold p-3 mx-auto transition-all text-xl"
          >
            SPRAWDŹ
          </Link>
          </div>
        </div>
        <Footer/>
        </div>
  )
}

export default Odplywy