import React from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Image from 'next/image'
import Link from 'next/link'
const image1 = require('../../images/Dol_1.jpg')
const image2 = require('../../images/Dol_2.jpg')
function Armatura_sanitarna() {
  return (
    <div>
        <Nav/>
        <div className="flex flex-col md:flex-row justify-around items-center text-center ">
            <div className='md:w-2/5 border rounded-sm my-10 pb-10'>
                <h2 className="text-lg font-semibold">ODPŁYWY</h2>
                <Image priority src={image1} alt='odplywy' />
                <Link href="/Armatura_sanitarna/Odplywy" className="text-center aboutButton bg-aquaBlue text-white font-semibold p-3 mx-auto transition-all text-xl">SPRAWDŹ</Link>

            </div>
            <div className='md:w-2/5 border rounded-sm my-10 pb-10'>
                <h2 className="text-lg font-semibold">ZLEWY</h2>
                <Image priority src={image2} alt='zlewy' />
                <Link href="/Armatura_sanitarna/Zlewy" className="text-center aboutButton bg-aquaBlue text-white font-semibold p-3 mx-auto transition-all text-xl">SPRAWDŹ</Link>
            </div>
        </div>
        <Footer/>
        </div>
  )
}

export default Armatura_sanitarna