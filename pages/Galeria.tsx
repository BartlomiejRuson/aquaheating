import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Img1 from '../images/galeriaImg/A01BK_7.jpg'
import Img2 from '../images/galeriaImg/A04_10.jpg'
import Img3 from '../images/galeriaImg/A04GL_8.jpg'
import Img4 from '../images/galeriaImg/W04GL_8.jpg'
import Img5 from '../images/galeriaImg/FSK01_8.jpg'
import Img6 from '../images/galeriaImg/FSK01BK_7.jpg'
import Img7 from '../images/galeriaImg/FSK01GL_10.jpg'
import Img8 from '../images/galeriaImg/G10BK_9.jpg'
import Img9 from '../images/galeriaImg/P04_10_N.jpg'
import Img10 from '../images/galeriaImg/P04BK_8.jpg'
import Img12 from '../images/galeriaImg/W04BK_N_8.jpg'
import Img13 from '../images/galeriaImg/AH_Ekspozytor.jpg'
import Img14 from '../images/galeriaImg/ZD_2.jpg'
import Image from 'next/image'
function Gallery() {
  let data = [
    {
      id:1,
      imgSrc:Img1
    },    {
      id:2,
      imgSrc:Img2
    },
    {
      id:3,
      imgSrc:Img3
    },
    {
      id:4,
      imgSrc:Img4
    },
    {
      id:5,
      imgSrc:Img5
    },
    {
      id:6,
      imgSrc:Img6
    },
    {
      id:7,
      imgSrc:Img7
    },
    {
      id:8,
      imgSrc:Img8
    },
    {
      id:9,
      imgSrc:Img9
    },
    {
      id:10,
      imgSrc:Img10
    },
    {
      id:12,
      imgSrc:Img12
    },
    {
      id:13,
      imgSrc:Img13
    },
    {
      id:14,
      imgSrc:Img14
    },
  ]
  console.log(data)
  return (
    
    <div>
        <Nav/>
        <div className='md:flex justify-around my-3 hidden'>
          <h1 className="text-3xl uppercase">Produkty</h1>
          <h1 className="text-3xl uppercase">Ekspozycja</h1>
        </div>
        <div className="md:columns-3 text-center">
          {data.map((item)=>(
            <div key={item.id} className="mx-auto flex justify-center items-center p-3 md:hover:scale-105 md:transition-all">
<Image src={item.imgSrc} alt="aranżacja" className='w-full'/>
            </div>
          ))}
        </div>
        <Footer/>
        </div>
  )
}

export default Gallery