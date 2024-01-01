import React from 'react'
import AboutMe from '../Components/AboutMe'
import Blogfooter from '../Components/Blogfooter'
import BlogHeader from '../Components/BlogHeader'
import Myresume from '../Components/Myresume'
import Myservices from '../Components/Myservices'
import Myskills from '../Components/Myskills'
import Myworks from '../Components/Myworks'
import Reviews from '../Components/Reviews'
import Contact from './Contact'
import Home from './Home'

const Blog = () => {
  return (
    <>
      <BlogHeader/>
      {/* <Home/> */}
      <AboutMe/>
      <Myskills/>
      <Myservices/>
      <Myresume/>
      <Myworks/>
      <Reviews/>
      <Contact/>
      <Blogfooter/>
    </>
  )
}

export default Blog