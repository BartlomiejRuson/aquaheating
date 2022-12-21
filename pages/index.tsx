import type { NextPage } from 'next'
import Head from 'next/head'
import Cookies from '../components/Cookies'
import Footer from '../components/Footer'
import MiniSlider from '../components/MiniSlider'
import Nav from '../components/Nav'
import Slider from '../components/Slider'


const Home: NextPage = () => {

  return (
    <div className="w-screen h-full">
      <Head>
        <title>Aqua Heating</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
    <Nav></Nav>
    <Slider></Slider>
    <MiniSlider></MiniSlider>
    <Footer></Footer>
    <Cookies/>
    </div>
  )
}

export default Home
