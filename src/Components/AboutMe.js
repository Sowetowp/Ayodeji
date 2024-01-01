import React, { useEffect } from 'react'
import image from "../Assets/Images/malik.jpg"
import "../Styles/Aboutme.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
        <div className='container-fluid p-0 aboutme'>
            <div className='about'><p>ABOUT</p></div>
            <div className='container-fluid above'>
                <p className='am'>ABOUT ME</p>
                <div className='anime'>
                    <div className='move'></div>
                </div>
            </div>
            <div className='container pooo'>
                <div className='row rowww mt-5'>
                    <div className='dd2 col-xl' data-aos="fade-up" data-aos-duration="1000">
                        <div className='dd200 m-3'>
                            <img src={image} className='shift'/>
                            <div className='ana'>
                                <div className='anb'></div>
                                <div className='anc'></div>
                                <div className='and'></div>
                                <div className='ane'></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl py-3 amhiaa' data-aos="fade-up" data-aos-duration="2000">
                        <div className=''>
                            <p className='hia ms-5'>Hi, I am <span>Amzat Abdulmalik</span></p>
                            <table className="table table-borderless ms-5 mt-3">
                                <tbody>
                                    <tr>
                                        <td className='tdd'><li><span>First Name</span></li></td>
                                        <td className='tddd'>: Abdulmalik</td>
                                    </tr>
                                    <tr>
                                        <td className='tdd'><li><span>Last Name</span></li></td>
                                        <td className='tddd'>: Amzat</td>
                                    </tr>
                                    <tr>
                                        <td className='tdd'><li><span>Age</span></li></td>
                                        <td className='tddd'>: 23</td>
                                    </tr>
                                    <tr>
                                        <td className='tdd'><li><span>Nationality</span></li></td>
                                        <td className='tddd'>: Nigerian</td>
                                    </tr>
                                    <tr>
                                        <td className='tdd'><li><span>Languages</span></li></td>
                                        <td className='tddd'>: English, Yoruba</td>
                                    </tr>
                                    <tr>
                                        <td className='tdd'><li><span>Address</span></li></td>
                                        <td className='tddd'>: Lagos ikeja</td>
                                    </tr>
                                    <tr>
                                        <td className='tdd'><li><span>Freelance</span></li></td>
                                        <td className='tddd'>: Available</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a style={{textDecoration:"none"}} href="https://drive.google.com/uc?export=download&id=1VdoYsoU6vuzyXVMafAyzAc8oGzsyjul4" download="cv.png">
                                <button className='dre ms-5 btn'><span>DOWNLOAD RESUME</span></button>
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