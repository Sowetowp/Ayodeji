import React from 'react'
import "../Styles/Services.css"
import "../Styles/Aboutme.css"
import front from "../Assets/Images/front.svg"
import back from "../Assets/Images/back.svg"
import full from "../Assets/Images/full.svg"

const Myservices = () => {
  return (
    <>
        <div className='container-fluid p-0 aboutme borderless'>
            <div className='about'><p>SERVICES</p></div>
            <div className='container-fluid above'>
                <p className='am'>MY SERVICES</p>
                <div className='anime'>
                    <div className='move'></div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row mt-5'>
                    <div className='col-md fed p-3'>
                        <div className='fedd'>
                            <div className='d-flex justify-content-between'>
                                <div className='log'><img src={front}/></div>
                                <p className='logp'>01</p>
                            </div>
                            <p className='text-white fdev'>Front-End Development</p>
                            <p className='lip'>Unlock the true potential of your website with my front-end development mastery. From visually stunning design to intuitive user-experience, I'll craft a website that engages, impresses and converts. Let's bring your vision to life and create something truly remarkable.</p>
                        </div>
                    </div>
                    <div className='col-md fed p-3'>
                        <div className='fedd'>
                            <div className='d-flex justify-content-between'>
                                <div className='log'><img src={back}/></div>
                                <p className='logp'>02</p>
                            </div>
                            <p className='text-white fdev'>Back-End Development</p>
                            <p className='lip'>Unlock the full potential of your website or application with my expert back-end services. From server-side scripting to database management and API development, I have the skills and experience to ensure seamless integration and optimal performance.</p>
                        </div>
                    </div>
                    <div className='col-md fed p-3'>
                        <div className='fedd'>
                            <div className='d-flex justify-content-between'>
                                <div className='log'><img src={full}/></div>
                                <p className='logp'>03</p>
                            </div>
                            <p className='text-white fdev'>Full-Stack Development</p>
                            <p className='lip'>Are you ready to take your project to the next level? Look no further! I offer top-notch full stack services that will elevate your vision to new heights. From sleek and responsive front-end design to robust and reliable back-end development, I've got you covered. Let's make it happen!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Myservices