import React, { useRef } from 'react'
import "../Styles/Aboutme.css"
import "../Styles/Myskills.css"

const Myskills = () => {

  const number1 = useRef();
  const number2 = useRef();
  const number3 = useRef();
  // const number4 = useRef();
  let counter = 0;
  setInterval(() => {
    if(counter == 95){
      clearInterval();
    }else{
      counter += 1;
      number1.current.innerHTML = counter + "%"
      number2.current.innerHTML = counter + "%"
      number3.current.innerHTML = counter + "%"
      // number4.current.innerHTML = counter + "%"
    }
  }, 20);


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
              <div className='col-md text-center'>
                <div className='mscont'>
                  <div className='msback'>
                    <div className='outer'>
                      <div className='inner'>
                        <div id='number' ref={number1}></div>
                      </div>
                    </div>
                    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width="160px" height="160px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor='rgb(13, 252, 172)' />
                          <stop offset="100%" stopColor='rgb(13, 252, 172)' />
                        </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Full-stack Development</p>
                </div>
              </div>
              <div className='col-md text-center'>
                <div className='mscont'>
                  <div className='msback'>
                    <div className='outer'>
                      <div className='inner'>
                        <div id='number' ref={number2}></div>
                      </div>
                    </div>
                    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width="160px" height="160px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor='rgb(13, 252, 172)' />
                          <stop offset="100%" stopColor='rgb(13, 252, 172)' />
                        </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Back-end Development</p>
                </div>
              </div>
              <div className='col-md text-center'>
                <div className='mscont'>
                  <div className='msback'>
                    <div className='outer'>
                      <div className='inner'>
                        <div id='number' ref={number3}></div>
                      </div>
                    </div>
                    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width="160px" height="160px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor='rgb(13, 252, 172)' />
                          <stop offset="100%" stopColor='rgb(13, 252, 172)' />
                        </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Front-end Development</p>
                </div>
              </div>
              {/* <div className='col-md text-center'>
                <div className='mscont'>
                  <div className='msback'>
                    <div className='outer'>
                      <div className='inner'>
                        <div id='number' ref={number4}></div>
                      </div>
                    </div>
                    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width="160px" height="160px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor='rgb(13, 252, 172)' />
                          <stop offset="100%" stopColor='rgb(13, 252, 172)' />
                        </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Front-end Development</p>
                </div> */}
              {/* </div> */}
            </div>
          </div>
          <div className='container-fluid mt-5'>
            <div className='row'>
              <div className='col-md prog1'>
                <p>Javascript - <span>(95%)</span></p>
                <div className='ful'>
                  <div className='se'></div>
                </div>
                <p>React Js - <span>(95%)</span></p>
                <div className='ful'>
                  <div className='se'></div>
                </div>
                <p>Html & Css - <span>(95%)</span></p>
                <div className='ful'>
                  <div className='se'></div>
                </div>
                <p>Express - <span>(95%)</span></p>
                <div className='ful'>
                  <div className='se'></div>
                </div>
              </div>
              <div className='col-md prog1'>
                <p>Node Js - <span>(95%)</span></p>
                <div className='ful'>
                  <div className='se'></div>
                </div>
                {/* <p>React Native - <span>(0%)</span></p>
                <div className='ful'>
                  <div className='zero'></div>
                </div> */}
                {/* <p>Typescript - <span>(0%)</span></p>
                <div className='ful'>
                  <div className='zero'></div>
                </div> */}
                <p>Redux - <span>(95%)</span></p>
                <div className='ful'>
                  <div className='se'></div>
                </div>
                <p>Nosql - <span>(95%)</span></p>
                <div className='ful'>
                  <div className='se'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Myskills