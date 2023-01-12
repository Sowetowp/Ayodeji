import React, { useEffect, useRef } from 'react'
import "../Styles/Home.css"
import twitter from "../Assets/Images/twitter.svg"
import github from "../Assets/Images/github.svg"
import facebook from "../Assets/Images/mail.svg"
import Linkedin from "../Assets/Images/linkedin.svg"
import image from "../Assets/Images/malik.jpg"
import { Typewriter, useTypewriter } from 'react-simple-typewriter'


const Home = () => {
  const [text] = useTypewriter({
    words: ['Amzat Abdulmalik', 'a Full-stack Developer', 'a Web Designer'],
    loop: 0
  })

  return (
    <>
      <div className='container-fluid home'>
        <div className='blur'></div>
        <div className='inde'>
          <div className='dphome'>
            <img src={image} className="homedp"/>
            <div className='spin'></div>
          </div>
          <div className='type text-center'>
            <p>Hi, I am <span>{text}</span></p>
          </div>
          <p className='info'>Welcome to my digital playground where creativity and technology merge! My web development portfolio is where I showcase my skills and passion for crafting visually stunning and user-friendly websites and web applications. Dive in and take a look at some of my past projects, and you'll see why I'm passionate about what I do. Thank you for visiting and I hope you enjoy exploring my work!</p>
          <nav className='fnav text-center'>
            <a href='mailto:ayodejiamzat@gmail.com'><button><img src={facebook}/></button></a>
            <a target="_blank" href='https://twitter.com/amzat_abdmalik?s=11&t=5RvOaHdVfPfpYh2LQdQnIw'><button ><img src={twitter}/></button></a>
            <a target="_blank" href="https://github.com/Sowetowp"><button ><img src={github}/></button></a>
            <a target="_blank" href="https://www.linkedin.com/in/amzat-ayodeji-a0647321b/"><button><img src={Linkedin}/></button></a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Home