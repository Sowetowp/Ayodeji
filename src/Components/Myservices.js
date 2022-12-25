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
                            <p className='lip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam etiam venenatis mi tristique amet cras diam etiam.</p>
                        </div>
                    </div>
                    <div className='col-md fed p-3'>
                        <div className='fedd'>
                            <div className='d-flex justify-content-between'>
                                <div className='log'><img src={back}/></div>
                                <p className='logp'>02</p>
                            </div>
                            <p className='text-white fdev'>Back-End Development</p>
                            <p className='lip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam etiam venenatis mi tristique amet cras diam etiam.</p>
                        </div>
                    </div>
                    <div className='col-md fed p-3'>
                        <div className='fedd'>
                            <div className='d-flex justify-content-between'>
                                <div className='log'><img src={full}/></div>
                                <p className='logp'>03</p>
                            </div>
                            <p className='text-white fdev'>Full-Stack Development</p>
                            <p className='lip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam etiam venenatis mi tristique amet cras diam etiam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Myservices