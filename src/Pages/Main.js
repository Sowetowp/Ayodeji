import React, { useCallback, useEffect, useState } from 'react'
import menu from "../Assets/Images/menu.svg"
import "../Styles/Menu.css"
import close from "../Assets/Images/close.svg"
import dp from "../Assets/Images/malik.jpg"
import arro from "../Assets/Images/arro.svg"
import "../Styles/Main.css"
import "../Styles/Demo.css"
import { useNavigate } from 'react-router-dom'



const Main = () => {
    const [route, setRoute] = useState("/home")
    const routesetter = useCallback((e)=>{
        setRoute(e)
        localStorage.setItem('myAppState', JSON.stringify(e));
    },[])
    useEffect(()=>{
        const savedState = JSON.parse(localStorage.getItem('myAppState'));
        setRoute(savedState)
    },[])
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
    const malik = (e) => {
        add()
        switc()
        routesetter(e)
    }
    const navigate = useNavigate()
    useEffect(()=>{
        if(window.innerWidth <= 576){
            navigate("/home")
        }
    },[])
    const Menu = () => {
    return (
        <>
            <div className='mmd'>
                <div className='container-fluid sa'>
                    <div className='row text-center mrow p-0'>
                        <a  href='/home' target="frame" onClick={()=>malik("/home")} className='col-2 borde'><p className='menu'><i>0.1 </i>HOME</p></a>
                        <a href='/about' target="frame" onClick={()=>malik("/about")} className='col-2'><p className='menu'><i>0.2 </i>ABOUT</p></a>
                        <a href='/resume' target="frame" onClick={()=>malik("/resume")} className='col-2 borde'><p className='menu'><i>0.3 </i>RESUME</p></a>
                        <a href='/work' target="frame" onClick={()=>malik("/work")} className='col-2'><p className='menu'><i>0.4 </i>WORKS</p></a>
                        <a href='/blog' target="frame" onClick={()=>malik("/blog")} className='col-2 borde'><p className='menu'><i>0.5 </i>BLOGS</p></a>
                        <a href='/contact' target="frame" onClick={()=>malik("/contact")} className='col-2'><p className='menu'><i>0.6 </i>CONTACT</p></a>
                    </div>
                </div>
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
                <iframe src={route == null ? "/home" : route} name='frame' title='myiframe' className='frame'></iframe>
            </div>
        </div>
    </>
  )
}

export default Main