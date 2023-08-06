import React from 'react'
import image from "../Assets/Images/malik.jpg"
import "../Styles/Aboutme.css"

const AboutMe = () => {
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
            <div className='container'>
                <div className='row rowww mt-5'>
                    <div className='dd2 col-xl'>
                        <div className='m-3'>
                            <img src={image} className='shift'/>
                            <div className='ana'>
                                <div className='anb'></div>
                                <div className='anc'></div>
                                <div className='and'></div>
                                <div className='ane'></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl py-3 amhiaa'>
                        <div className=''>
                            <p className='hia ms-5'>Hi, I am <span>Amzat Abdulmalik</span></p>
                            <table className="table table-borderless ms-5">
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
                                        <td className='tddd'>: 22</td>
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
                            <a href="https://drive.google.com/uc?export=download&id=1w3366gjVImRsBeQAtDhDTokbn7plHL66" download="cv.png">
                                <button className='dre ms-5'>DOWNLOAD RESUME</button>
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