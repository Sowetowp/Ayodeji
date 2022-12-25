import React, { useEffect, useRef } from 'react'
import "../Styles/Home.css"
import twitter from "../Assets/Images/twitter.svg"
import github from "../Assets/Images/github.svg"
import facebook from "../Assets/Images/facebook.svg"
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
          <p className='info'>I am a full-stack web developer. I can provide clean code and pixel perfect design. I also make website more interactive with web animations.</p>
          <nav className='fnav text-center'>
              <a href=''><button><img src={facebook}/></button></a>
              <a href=''><button ><img src={twitter}/></button></a>
              <a href=''><button ><img src={github}/></button></a>
              <a href=''><button><img src={Linkedin}/></button></a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Home