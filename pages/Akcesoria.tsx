import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Link from 'next/link'
import Image from 'next/image'
const mainImg = require('../images/4_AKCESORIA.jpg')
function Akcesoria() {
  return (
    <div>
        <Nav/>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className=' flex justify-start'><Image width={500} className="p-5" src={mainImg} alt="odplywwy"></Image></div>
          <div className='col-span-2 flex flex-col gap-6 justify-center '>

            <Link
            href="/Lista_Akcesoriow"
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

export default Akcesoria