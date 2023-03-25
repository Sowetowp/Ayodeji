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
            <div className='container text-center mt-5 gob'>
                <button className='workb btn btn-primar' type='button'>ALL</button>
                <button className='btn btn-primar' type='button'>REACT JS</button>
                <button className='btn btn-primar' type='button'>NODEJS</button>
                <button className='btn btn-primar' type='button'>DESIGN</button>
                <button className='btn btn-primar' type='button'>HTML/CSS</button>
            </div>
            <All/>
            <div className='text-center my-5'>
                <button  className='mwlm'>LOAD MORE</button>
            </div>
        </div>
    </>
  )
}

export default Myworks