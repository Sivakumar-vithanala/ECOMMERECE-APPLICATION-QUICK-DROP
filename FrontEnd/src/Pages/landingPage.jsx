import React from 'react'
import CarouselAnimation from '../Components/Carousel'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Category from '../Components/Category'
import Grocery from '../Components/Grocery'

export const LandingPage = () => {
  return (
    <>
    <Header/>
    <CarouselAnimation/>
    <Category/>
    <Grocery />
    <Footer/>

    </>
  )
}
