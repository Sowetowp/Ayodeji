import React, { useState } from 'react'
import menu from "../Assets/Images/menu.svg"
import "../Styles/Menu.css"
import close from "../Assets/Images/close.svg"
import dp from "../Assets/Images/kk.jpg"
import arro from "../Assets/Images/arro.svg"
import "../Styles/Main.css"
import "../Styles/Demo.css"



const Main = () => {
    const [counter, setCounter] = useState(0)
    const [image, setImage] = useState([
        menu, close
    ])
    const add = ()=> {
        setCounter(e=> e + 1)
    }
    const [change, setChange] = useState(false)
    const switc = () => {
        setChange(!change)
    }
    const malik = () => {
        add()
        switc()
    }


    const Menu = () => {
    return (
        <>
            <div className='mmd'>
                <div className='container-fluid sa'>
                    <div className='row text-center mrow p-0'>
                        <div className='col-2 borde'><a href='/home' target="frame" onClick={malik}><p className='menu'><i>0.1 </i>HOME</p></a></div>
                        <div className='col-2'><a href='/about' target="frame" onClick={malik}><p className='menu'><i>0.2 </i>ABOUT</p></a></div>
                        <div className='col-2 borde'><a href='/resume' target="frame" onClick={malik}><p className='menu'><i>0.3 </i>RESUME</p></a></div>
                        <div className='col-2'><a href='/work' target="frame" onClick={malik}><p className='menu'><i>0.4 </i>WORKS</p></a></div>
                        <div className='col-2 borde'><a href='/blog' target="frame" onClick={malik}><p className='menu'><i>0.5 </i>BLOGS</p></a></div>
                        <div className='col-2'><a href='/contact' target="frame" onClick={malik}><p className='menu'><i>0.6 </i>CONTACT</p></a></div>
                    </div>
                </div>
            </div>
        </>
    )
    }

    const Demo = () => {
        return (
          <>
              <div className='container-fluid demo'>
                  <div className='d-flex justify-content-between'>
                      <p className='dep1'><span>AMZAT</span>.</p>
                      <button onClick={switc}><img src={close}/></button>
                  </div>
                  <div className='deas'>
                      <a href='/home' target="frame" onClick={malik}><p className=''><span>0.1 </span>HOME</p></a>
                      <a href='/about' target="frame" onClick={malik}><p className=''><span>0.2 </span>ABOUT</p></a>
                      <a href='/resume' target="frame" onClick={malik}><p className=''><span>0.3 </span>RESUME</p></a>
                      <a href='/work' target="frame" onClick={malik}><p className=''><span>0.4 </span>WORKS</p></a>
                      <a href='/blog' target="frame" onClick={malik}><p className=''><span>0.5 </span>BLOGS</p></a>
                      <a href='/contact' target="frame" onClick={malik}><p className=''><span>0.6 </span>CONTACT</p></a>
                  </div>
                  <p className='thir'>~201035~</p>
              </div>
          </>
        )
      }

  return (
    <>  
        <div className='d-flex container-fluid mmain p-0'>
            <div className='sidebar text-center'>
                <a href='/home' target="frame"><img src={dp} className="sidedp"/></a>
                <br></br>
                <button className='toggle' onClick={malik}><img src={image[counter % image.length]}/></button>
                <p className='brand'>~201035~</p>
            </div>
            <div className='ifram'> 
                <button className='mbut' onClick={switc}><img src={arro}/></button>
                {change && <Menu/>}
                {change && <Demo/>}
                <iframe src='/home' name='frame' title='myiframe' className='frame'></iframe>
            </div>
        </div>
    </>
  )
}

export default Main