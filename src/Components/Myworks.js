import React, { useCallback, useEffect, useState } from 'react'
import "../Styles/AWorks.css"
import "../Styles/Aboutme.css"
import canv from "../Assets/Images/portfolio-image-2.jpg"
import canv2 from "../Assets/Images/portfolio-image-3.jpg"
import canv3 from "../Assets/Images/portfolio-image-6.jpg"

const Myworks = () => {
  const availableArray = [
    {
      img: canv3,
      title: "Candle",
      body: "Creative Candle Light",
      preview: "",
      github: "",
      stack: "node"
    },
    {
      img: canv2,
      title: "Candle",
      body: "Creative Candle Light",
      preview: "",
      github: "",
      stack: "flask"
    },
    {
      img: canv,
      title: "Candle",
      body: "Creative Candle Light",
      preview: "",
      github: "",
      stack: "anativenodereact"
    },
    {
      img: canv2,
      title: "Candle",
      body: "Creative Candle Light",
      preview: "",
      github: "",
      stack: "ahtml"
    },
    {
      img: canv,
      title: "Candle",
      body: "Creative Candle Light",
      preview: "",
      github: "",
      stack: "a"
    },
    {
      img: canv3,
      title: "Candle",
      body: "Creative Candle Light",
      preview: "",
      github: "",
      stack: "a"
    }
  ]
  const [works, setWorks] = useState(availableArray)
  const [bg, setBg] = useState("")
  const filterer = useCallback((e) => {
    const filteredArray = availableArray.filter(item => item.stack && item.stack.includes(e));
    setWorks(filteredArray);
    setBg(e)
  }, [availableArray]);
  const filterer2 = useCallback(() => {
    setWorks(availableArray);
    setBg("all")
  }, [availableArray]);
  return (
    <>
        <div className='container-fluid p-0 aboutme mw'>
            <div className='about'><p>WORKS</p></div>
            <div className='container-fluid above'>
                <p className='am'>MY WORKS</p>
                <div className='anime'>
                    <div className='move'></div>
                </div>
            </div>
            <div className='workType'>
              <button style={{backgroundColor: `${bg === "all" ? "rgb(20, 223, 166)" : "rgba(20, 223, 166, 0.171)"}`}} className='drewo' onClick={() => filterer2()}><span style={{color: `${bg === "all" ? "white" : "rgb(20, 223, 166)"}`}}>ALL</span></button>
              <button style={{backgroundColor: `${bg === "html" ? "rgb(20, 223, 166)" : "rgba(20, 223, 166, 0.171)"}`}} className='drewo' onClick={() => filterer("html")}><span style={{color: `${bg === "html" ? "white" : "rgb(20, 223, 166)"}`}}>HTML/CSS</span></button>
              <button style={{backgroundColor: `${bg === "react" ? "rgb(20, 223, 166)" : "rgba(20, 223, 166, 0.171)"}`}} className='drewo' onClick={() => filterer("react")}><span style={{color: `${bg === "react" ? "white" : "rgb(20, 223, 166)"}`}}>REACT JS</span></button>
              <button style={{backgroundColor: `${bg === "flask" ? "rgb(20, 223, 166)" : "rgba(20, 223, 166, 0.171)"}`}} className='drewo' onClick={() => filterer("flask")}><span style={{color: `${bg === "flask" ? "white" : "rgb(20, 223, 166)"}`}}>FLASK</span></button>
              <button style={{backgroundColor: `${bg === "node" ? "rgb(20, 223, 166)" : "rgba(20, 223, 166, 0.171)"}`}} className='drewo' onClick={() => filterer("node")}><span style={{color: `${bg === "node" ? "white" : "rgb(20, 223, 166)"}`}}>NODE JS</span></button>
              <button style={{backgroundColor: `${bg === "native" ? "rgb(20, 223, 166)" : "rgba(20, 223, 166, 0.171)"}`}} className='drewo' onClick={() => filterer("native")}><span style={{color: `${bg === "native" ? "white" : "rgb(20, 223, 166)"}`}}>REACT NATIVE</span></button>
            </div>
            <div className='row workCanvas pt-3'>
              {works.map((e)=>
              <div className='col-xl-4 col-md-6'>
                <div className='bgCanvas p-3'>
                  <div className='canvasImgContainer'>
                    <div className='canvasImgCover'>
                      <button class="btngit">
                        <svg id="github" viewBox="0 0 24 24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="black" height="40" width="40">
                          <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                        </svg>
                      </button>
                      <button class="btngit">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 11L21.2 2.80005" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 6.8V2H17.2" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                      </button>
                    </div>
                    <img className='canvasImg' src={e.img}/>
                  </div>
                  <h4>{e.title}</h4>
                  <h6>{e.body}</h6>
                </div>
              </div>)}
            </div>
            <div className='loadWrapper pb-5'><button className='drewo mb-5'><span>LOAD MORE</span></button></div>
        </div>
    </>
  )
}

export default Myworks