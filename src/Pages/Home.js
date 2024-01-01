import React, { useEffect, useRef } from 'react'
import "../Styles/Home.css"
import twitter from "../Assets/Images/twitter.svg"
import github from "../Assets/Images/github.svg"
import facebook from "../Assets/Images/mail.svg"
import Linkedin from "../Assets/Images/linkedin.svg"
import threads from "../Assets/Images/threads-seeklogo.com-2.svg"
import image from "../Assets/Images/malik.jpg"
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Amzat Abdulmalik', 'a Full-stack Developer', 'a Web Designer'],
    loop: 0
  })
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className='container-fluid home'>
        <div className='blur'></div>
        <div className='inde'>
          <div data-aos="fade-up" data-aos-duration="1000" className='dphome'>
            <img src={image} className="homedp"/>
            <div className='spin'></div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className='type text-center'>
            <p>Hi, I am <span>{text}</span></p>
          </div>
          <p data-aos="fade-up" data-aos-duration="2000" className='info'>Welcome to my digital playground where creativity and technology merge! My portfolio is where I showcase my skills and passion for crafting visually stunning and user-friendly web and mobile applications. Dive in and take a look at some of my past projects, and you'll see why I'm passionate about what I do. Thank you for visiting and I hope you enjoy exploring my work!</p>
          <div className='small-icons mt-3'>
            {/* <a href='mailto:ayodejiamzat@gmail.com'><button><img src={facebook}/></button></a> */}
            <a target="_blank" href="https://github.com/Sowetowp"><img src={github}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/abdulmalik-amzat-a0647321b/"><img src={Linkedin}/></a>
            <a target="_blank" href='https://twitter.com/amzat_abdmalik?s=11&t=5RvOaHdVfPfpYh2LQdQnIw'><img src={threads}/></a>
            <a target="_blank" href='https://twitter.com/amzat_abdmalik?s=11&t=5RvOaHdVfPfpYh2LQdQnIw'><img src={twitter}/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home