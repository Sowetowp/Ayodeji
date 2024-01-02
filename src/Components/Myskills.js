import React, { useEffect, useRef, useState } from 'react'
import "../Styles/Aboutme.css"
import "../Styles/Myskills.css"
import node from "../Assets/Images/node.fc4d4b87.svg"
import js from "../Assets/Images/javascript.b472cbc1.svg"
import ts from "../Assets/Images/typescript.97711300.svg"
import react from "../Assets/Images/react.512a3a7e.svg"
import git from "../Assets/Images/git.21d80414.svg"
import md from "../Assets/Images/mongoDB.d8d2b67f.svg"
import redux from "../Assets/Images/redux.2fdafc8e.svg"
import postman from "../Assets/Images/icons8-postman-api.svg"
import py from "../Assets/Images/icons8-python.svg"
import html from "../Assets/Images/html.ed6aaa50.svg"
import css from "../Assets/Images/css.e5e99f36.svg"
import flask from "../Assets/Images/icons8-flask.svg"
import bs from "../Assets/Images/icons8-bootstrap.svg"
import express from "../Assets/Images/icons8-express-js.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Myskills = () => {
  useEffect(() => {
      AOS.init();
  }, [])

  const number1 = useRef();
  const number2 = useRef();
  const number3 = useRef();
  const number4 = useRef();
  let counter = 0;
  setInterval(() => {
    if(counter == 95){
      clearInterval();
    }else{
      counter += 1;
      number1.current.innerHTML = counter + "%"
      number2.current.innerHTML = counter + "%"
      number3.current.innerHTML = counter + "%"
      number4.current.innerHTML = counter + "%"
    }
  }, 50);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(95);
  }, []);

  return (
    <>
        <div className='container-fluid p-0 aboutme'>
          <div className='about'><p>SKILLS</p></div>
          <div className='container-fluid above'>
              <p className='am'>MY SKILLS</p>
              <div className='anime'>
                  <div className='move'></div>
              </div>
          </div>
          <div className='container-fluid mt-5'>
            <div className='row'>
              <div className='col-md text-center' data-aos="fade-up" data-aos-duration="1000">
                <div className='mscont py-4'>
                  <div className='msback'>
                    <div className='outer'>
                      <div className='inner'>
                        <div id='number' ref={number1}></div>
                      </div>
                    </div>
                    <svg className='mysvg' xmlns='http://www.w3.org/2000/svg' version='1.1' width="133px" height="133px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor='rgb(13, 252, 172)' />
                          <stop offset="100%" stopColor='rgb(13, 252, 172)' />
                        </linearGradient>
                      </defs>
                      <circle cx="66" cy="66" r="60" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Front-end Development</p>
                </div>
              </div>
              <div className='col-md text-center' data-aos="fade-up" data-aos-duration="1500">
                <div className='mscont py-4'>
                  <div className='msback'>
                    <div className='outer'>
                      <div className='inner'>
                        <div id='number' ref={number2}></div>
                      </div>
                    </div>
                    <svg className='mysvg' xmlns='http://www.w3.org/2000/svg' version='1.1' width="133px" height="133px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor='rgb(13, 252, 172)' />
                          <stop offset="100%" stopColor='rgb(13, 252, 172)' />
                        </linearGradient>
                      </defs>
                      <circle cx="66" cy="66" r="60" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Back-end Development</p>
                </div>
              </div>
              <div className='col-md text-center' data-aos="fade-up" data-aos-duration="2000">
                <div className='mscont py-4'>
                  <div className='msback'>
                    <div className='outer'>
                      <div className='inner'>
                        <div id='number' ref={number3}></div>
                      </div>
                    </div>
                    <svg className='mysvg' xmlns='http://www.w3.org/2000/svg' version='1.1' width="133px" height="133px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor='rgb(13, 252, 172)' />
                          <stop offset="100%" stopColor='rgb(13, 252, 172)' />
                        </linearGradient>
                      </defs>
                      <circle cx="66" cy="66" r="60" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Hosting And Management</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="2500" className='col-md text-center'>
                <div className='mscont py-4'>
                  <div className='msback'>
                    <div className='outer'>
                      <div className='inner'>
                        <div id='number' ref={number4}></div>
                      </div>
                    </div>
                    <svg className='mysvg' xmlns='http://www.w3.org/2000/svg' version='1.1' width="133px" height="133px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor='rgb(13, 252, 172)' />
                          <stop offset="100%" stopColor='rgb(13, 252, 172)' />
                        </linearGradient>
                      </defs>
                      <circle cx="66" cy="66" r="60" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Front-end Development</p>
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid mt-5'>
            <div className='row'>
              <div className='col-md prog1'>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={js}/> Javascript - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={react}/> React Js - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={html}/> Html - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={css}/> CSS - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
                {/* <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={ts}/> Typescript - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div> */}
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={express}/> Express - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={bs}/> Bootstrap - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={node}/> Node Js - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={flask}/> Flask - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
              </div>
              <div className='col-md prog1'>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p><img style={{width:"15px",height:"15px"}} src={react}/> React Native - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p><img style={{width:"15px",height:"15px"}} src={py}/> Python - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p><img style={{width:"15px",height:"15px"}} src={ts}/> Typescript - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p><img style={{width:"15px",height:"15px"}} src={redux}/> Redux - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p><img style={{width:"15px",height:"15px"}} src={md}/> Nosql(MongoDB) - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p><img style={{width:"15px",height:"15px"}} src={git}/> Git & GitHub - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p><img style={{width:"15px",height:"15px"}} src={postman}/> Postman - <span>(95%)</span></p>
                  <div className='ful'>
                    <div className='se' style={{ width: `${width}%`}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Myskills