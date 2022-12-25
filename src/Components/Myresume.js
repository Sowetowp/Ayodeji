import React from 'react'
import "../Styles/Aboutme.css"
import "../Styles/Myresume.css"
import education from "../Assets/Images/education.svg"
import circle from "../Assets/Images/circle.svg"
import bag from "../Assets/Images/bag.svg"

const Myresume = () => {
  return (
    <>
      <div className='container-fluid p-0 aboutme'>
        <div className='about'><p>RESUME</p></div>
        <div className='container-fluid above'>
          <p className='am'>MY RESUME</p>
          <div className='anime'>
            <div className='move'></div>
          </div>
        </div>
        <div className='container-fluid mt-5 mrcon mb-5'>
          <div className='row'>
            <div className='col-md'>
              <div className='d-flex justify-content-start'>
                <img src={education}/>
                <p className='text-white mreq'>Educational Qualification</p>
              </div>
              <div className='d-flex justify-content-start mrmov'>
                <div className='mrdur'><p>2006 - 2010</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1'>Primary School Education</p>
                  <p className='mrp2'>Air Force Primary School Ibadan</p>
                  <p className='mrp3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo'>
                <div className='mrdur'><p>2011 - 2017</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1'>Secondary School Education</p>
                  <p className='mrp2'>Air Force Comprehensive School Ibadan</p>
                  <p className='mrp3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo'>
                <div className='mrdur'><p>2018 - 2023</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1'>Bachelor Of Technology</p>
                  <p className='mrp2'>Olusegun Agagu University Of Science And Technology</p>
                  <p className='mrp3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.</p>
                </div>
              </div>
            </div>
            <div className='col-md mrrrrr'>
              <div className='d-flex justify-content-start'>
                <img src={bag}/>
                <p className='text-white mreq'>Working Experience</p>
              </div>
              <div className='d-flex justify-content-start mrmov'>
                <div className='mrdur'><p>2022 - present</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1'>Full-Stack Developer</p>
                  <p className='mrp2'>SOAIRAfrica</p>
                  <p className='mrp3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo'>
                <div className='mrdur'><p>2022 - present</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1'>Back-end Developer</p>
                  <p className='mrp2'>SOAIRAfrica</p>
                  <p className='mrp3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo'>
                <div className='mrdur'><p>2022 - present</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1'>Front-end Developer</p>
                  <p className='mrp2'>SOAIRAfrica</p>
                  <p className='mrp3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Myresume