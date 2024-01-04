import React, { useEffect, useState } from 'react'
import image from "../Assets/Images/malik.jpg"
import "../Styles/Aboutme.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    useEffect(() => {
        AOS.init();
      }, [])
      const linearGradient = 'linear-gradient(to right, #ff7e5f, #feb47b)';
      const [hcolor, hsetColor] = useState("")
      const [hcolor2, hsetColor2] = useState("")
      
      useEffect(() => {
        const handleStorageChange = () => {
          const savedState = JSON.parse(localStorage.getItem('myColorState'));
          const savedState2 = JSON.parse(localStorage.getItem('myColorState2'));
          if(typeof savedState === "string"){
              hsetColor(savedState)
          }
          if(typeof savedState2 === "string"){
              hsetColor2(savedState2)
          }
        };
    
        window.addEventListener('storage', handleStorageChange);
    
        return () => {
          window.removeEventListener('storage', handleStorageChange);
        };
      }, []);
      useEffect(()=>{
        const savedState = JSON.parse(localStorage.getItem('myColorState'));
        const savedState2 = JSON.parse(localStorage.getItem('myColorState2'));
        if(typeof savedState === "string"){
            hsetColor(savedState)
        }
        if(typeof savedState2 === "string"){
            hsetColor2(savedState2)
        }
      },[])
    
  return (
    <>
        <div className='container-fluid p-0 aboutme'>
            <div className='about'><p>ABOUT</p></div>
            <div className='container-fluid above'>
                <p className='am'>ABOUT ME</p>
                <div className='anime' style={{backgroundColor:`${hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`}}>
                    <div className='move' style={{backgroundColor:`${hcolor ? hcolor : "rgb(20, 223, 166)"}`}}></div>
                </div>
            </div>
            <div className='container pooo'>
                <div className='row rowww mt-5'>
                    <div className='dd2 col-xl' data-aos="fade-up" data-aos-duration="1000">
                        <div className='dd200 m-3'>
                            <img src={image} className='shift'/>
                            <div className='ana' style={{backgroundColor:`${hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`}}>
                                <div className='anb' style={{background: `${hcolor ? `linear-gradient(transparent, 10%, ${hcolor})` : "linear-gradient(transparent, 10%, rgb(20, 223, 166))"}`}}></div>
                                <div className='anc' style={{background: `${hcolor ? `linear-gradient(transparent, 10%, ${hcolor})` : "linear-gradient(transparent, 10%, rgb(20, 223, 166))"}`}}></div>
                                <div className='and' style={{background: `${hcolor ? `linear-gradient(transparent, 10%, ${hcolor})` : "linear-gradient(transparent, 10%, rgb(20, 223, 166))"}`}}></div>
                                <div className='ane' style={{background: `${hcolor ? `linear-gradient(transparent, 10%, ${hcolor})` : "linear-gradient(transparent, 10%, rgb(20, 223, 166))"}`}}></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl py-3 amhiaa' data-aos="fade-up" data-aos-duration="2000">
                        <div className=''>
                            <p className='hia ms-5'>Hi, I am <span style={{color:`${hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>Amzat Abdulmalik</span></p>
                            <table className="table table-borderless ms-5 mt-3">
                                <tbody>
                                    <tr>
                                        <td className='tdd' style={{color:`${hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><li><span>First Name</span></li></td>
                                        <td className='tddd'>: Abdulmalik</td>
                                    </tr>
                                    <tr>
                                        <td className='tdd' style={{color:`${hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><li><span>Last Name</span></li></td>
                                        <td className='tddd'>: Amzat</td>
                                    </tr>
                                    <tr>
                                        <td className='tdd' style={{color:`${hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><li><span>Age</span></li></td>
                                        <td className='tddd'>: 23</td>
                                    </tr>
                                    <tr>
                                        <td className='tdd' style={{color:`${hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><li><span>Nationality</span></li></td>
                                        <td className='tddd'>: Nigerian</td>
                                    </tr>
                                    <tr>
                                        <td className='tdd' style={{color:`${hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><li><span>Languages</span></li></td>
                                        <td className='tddd'>: English, Yoruba</td>
                                    </tr>
                                    <tr>
                                        <td className='tdd' style={{color:`${hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><li><span>Address</span></li></td>
                                        <td className='tddd'>: Lagos ikeja</td>
                                    </tr>
                                    <tr>
                                        <td className='tdd' style={{color:`${hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><li><span>Freelance</span></li></td>
                                        <td className='tddd'>: Available</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a style={{textDecoration:"none"}} href="https://drive.google.com/uc?export=download&id=1VdoYsoU6vuzyXVMafAyzAc8oGzsyjul4" download="cv.png">
                                <button className='dre ms-5 btn' style={{background:`${hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><span>DOWNLOAD RESUME</span></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutMe