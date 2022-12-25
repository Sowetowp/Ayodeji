import React from 'react'
import twitter from "../Assets/Images/twitter.svg"
import github from "../Assets/Images/github.svg"
import facebook from "../Assets/Images/facebook.svg"
import Linkedin from "../Assets/Images/linkedin.svg"
import "../Styles/Blogf.css"

const Blogfooter = () => {
  return (
    <>
        <div className='bfoot d-flex justify-content-between border-top'>
            <nav className='fnavv'>
                <a href=''><button><img src={facebook}/></button></a>
                <a href=''><button ><img src={twitter}/></button></a>
                <a href=''><button ><img src={github}/></button></a>
                <a href=''><button><img src={Linkedin}/></button></a>
            </nav>
            <p>201035</p>
        </div>
    </>
  )
}

export default Blogfooter