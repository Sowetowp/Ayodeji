import React, { useEffect } from 'react'
import "../Styles/Aboutme.css"
import "../Styles/Myresume.css"
import education from "../Assets/Images/education.svg"
import circle from "../Assets/Images/circle.svg"
import bag from "../Assets/Images/bag.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Myresume = () => {
  useEffect(() => {
      AOS.init();
  }, [])
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
              <div className='d-flex justify-content-start' data-aos="fade-up" data-aos-duration="1000">
                <img src={education}/>
                <p className='text-white mreq'>Educational Qualification</p>
              </div>
              <div className='d-flex justify-content-start mrmov' data-aos="fade-up" data-aos-duration="1000">
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
                  <p className='mrp3'>Received standard primary education and developed strong foundation in academics and personal development.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
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
                  <p className='mrp3'>Received comprehensive education with focus on academics and extracurriculars, developed strong critical thinking and problem-solving skills</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
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
                  <p className='mrp3'>Successfully completed a rigorous Bachelor of Technology in Civil Engineering program, gaining a strong foundation in the principles, theories, and practical applications of civil engineering.</p>
                </div>
              </div>
            </div>
            <div className='col-md mrrrrr'>
              <div className='d-flex justify-content-start' data-aos="fade-up" data-aos-duration="1000">
                <img src={bag}/>
                <p className='text-white mreq'>Working Experience</p>
              </div>
              <div className='d-flex justify-content-start mrmov' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur'><p>2021 - present</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1'>Frontend and Backend Instructor</p>
                  <p className='mrp2'>SOAIRAfrica</p>
                  <p className='mrp3'>Since 2021, I have been actively engaged in instructing both frontend and backend technologies as part of the Soair Africa Bootcamp. In this role, I conduct comprehensive sessions within the six-month program, facilitating learning for cohorts ranging from 50 to 300 students per session. I provide hands-on guidance to ensure that students not only acquire but also master the skills necessary for success in the dynamic field of web development.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur'><p>2021 - present</p></div>
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
                  <p className='mrp3'>Accomplished Back-end Developer at Soair Africa, where I leveraged my expertise in Node.js to design and develop high-performance, scalable and secure server-side systems. Collaborated with cross-functional teams to deliver innovative solutions, and ensured seamless data integration for clients resulting in outstanding results.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur'><p>2021 - present</p></div>
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
                  <p className='mrp3'>Expert Front-end Developer at Soair Africa, where I brought designs to life with my proficiency in HTML, CSS, JavaScript and React.js. Collaborated with cross-functional teams to develop and maintain user-friendly websites, and delivered visually stunning and high-performing web experiences for clients.</p>
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