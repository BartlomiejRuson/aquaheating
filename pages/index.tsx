import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import MiniSlider from '../components/MiniSlider'
import Nav from '../components/Nav'
import Slider from '../components/Slider'


const Home: NextPage = () => {

  return (
    <div className="w-screen h-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Nav></Nav>
    <Slider></Slider>
    <MiniSlider></MiniSlider>
    <Footer></Footer>
    </div>
  )
}

export default Home
