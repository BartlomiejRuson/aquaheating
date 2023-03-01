import React from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Link from 'next/link'
import Image from 'next/image'
const mainImg = require('../../images/2_ZLEWY.jpg')
function Zlewy() {
  return (
    <div>
        <Nav/>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className=' flex justify-start'><Image width={600} className="p-5" src={mainImg} alt="odplywwy"></Image></div>
          <div className='col-span-2 flex flex-col gap-6 justify-center '>
            <h1 className='text-lg'>Zlewy / komory gospodarcze <b>AQUA HEATING</b></h1>
            <p>  Nasze komory gospodarcze wykonane są z wysokiej jakościowo stali nierdzewnej SS304 
oraz z grubością blachy 1 mm. Gwarantuje to wysoką jakość wyrobu co przekłada się na długotrwałe, bezawaryjne użytkowanie.</p>
            <p>Komory  gospodarcze znajdują zastosowanie w pomieszczeniach gospodarczych, garażach, pralniach, warsztatach, halach produkcyjnych, punktach handlowych, restauracjach, kawiarniach i wiele innych.</p>
            <p>Komory gospodarcze dostępne są w różnych rozmiarach oraz z różnym wykończeniem powłoki zewnętrznej.</p>
            <Link
            href="/Armatura_sanitarna/Lista_zlewow"
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

export default Zlewy