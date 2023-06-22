import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import { Home } from '../components/home/Home'
// import Footer from '../components/footer/Footer'
import AboutUs from '../components/about/AboutUs'
import Footer from '../components/footer/Footer'
import Service from '../components/service/Service'
import Covid from '../components/covid/Covid'
import Articles from '../components/articles/Articles'
import Contact from '../components/contactUs/ContactUs'

const homePage = () => {
  return (
    <Fragment >
      <Header/>
      <Home/>
      <main>
        <AboutUs/>
        <Service/>
        <Covid/>
        <Articles/>
        <Contact/>
      </main>
      <Footer/>
    </Fragment>
  )
}

export default homePage