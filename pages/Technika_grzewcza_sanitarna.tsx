import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Link from 'next/link'
import Image from 'next/image'
const mainImg = require('../images/3_GRZEWKA.jpg')
function Technika_grzewcza_sanitarna() {
  return (
    
    <div>
        <Nav/>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className=' flex justify-start'><Image width={500} className="p-5" src={mainImg} alt="odplywwy"></Image></div>
          <div className='col-span-2 flex flex-col gap-6 justify-center '>
            <h1 className='text-lg'>Technika grzewcza sanitarna <b>AQUA HEATING</b></h1>
            <p>Dział techniki grzewczej i sanitarnej obejmuje szeroki wybór produktów niezbędnych do 
prawidłowego działania instalacji w domu, jak również w obiektach przemysłowych lub użyteczności publicznej.</p>
            <p>Biorąc pod uwagę wiele możliwości konfiguracji instalacji grzewczych oraz sanitarnych oferujemy różnego rodzaju produkty, a w szczególnoci  - reduktory ciśnienia, podtynkowe ograniczniki temperatury powrotu (zawory RTL), zawory grzejnikowe jednootworowe, zawory schładzające, miarkowniki ciągu i inne.</p>
            <Link
            href="/Lista_technika_grzewcza"
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

export default Technika_grzewcza_sanitarna