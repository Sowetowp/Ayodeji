import React from 'react'
import "../Styles/Myworks.css"
import "../Styles/Aboutme.css"
import All from './All'

const Myworks = () => {
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
            
        </div>
    </>
  )
}

export default Myworks