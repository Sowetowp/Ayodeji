import React from 'react'
import AboutMe from '../Components/AboutMe'
import Myservices from '../Components/Myservices'
import Reviews from '../Components/Reviews'
import Nav from '../Components/Nav'

const About = () => {
  return (
    <>
        <Nav/>
        <AboutMe/>
        <Myservices/>
        <Reviews/>
    </>
  )
}

export default About