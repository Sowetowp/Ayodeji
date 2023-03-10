import React, { useState } from 'react'
import "../Styles/Reviews.css"
import imag from "../Assets/Images/kk.jpg"
import mrsam from "../Assets/Images/mrsam.jpg"
import profile from "../Assets/Images/profile.svg"
import "../Styles/Aboutme.css"
import prev from "../Assets/Images/prev.svg"
import next from "../Assets/Images/next.svg"
import tola from "../Assets/Images/tola.jpeg"


const Reviews = () => {

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [counter3, setCounter3] = useState(0)
    
    const [quote1, setQuote1] = useState([
        'Excellent guy', "I'm a web developer myself so it was particularly nice working with Malik. Quality quality stuffs always.", "Hell yeah!, this guy's great. I've tried other developers and he's the only one that nailed exactly what I wanted perfectly.", "My search for developers ended when I met Malik. Top top guy."
    ])

    const [quote2, setQuote2] = useState([
        "I'm a web developer myself so it was particularly nice working with Malik. Quality quality stuffs always.", "Hell yeah!, this guy's great. I've tried other developers and he's the only one that nailed exactly what I wanted perfectly.", "My search for developers ended when I met Malik. Top top guy.", 'Excellent guy'
    ])

    const [quote3, setQuote3] = useState([
        "Hell yeah!, this guy's great. I've tried other developers and he's the only one that nailed exactly what I wanted perfectly.", "My search for developers ended when I met Malik. Top top guy.", 'Excellent guy', "I'm a web developer myself so it was particularly nice working with Malik. Quality quality stuffs always."
    ])

    const [name1, setName1] = useState([
        "MR SAM", "ADETOLA", "CARL JOHNSON", "DANIEL BAKER"
    ])

    const [name2, setName2] = useState([
        "ADETOLA", "CARL JOHNSON", "DANIEL BAKER", "MR SAM"
    ])

    const [name3, setName3] = useState([
        "CARL JOHNSON", "DANIEL BAKER","MR SAM",  "ADETOLA"
    ])

    const [rel1, setRel1] = useState([
        "Boss - soairafrica", "Boss - soairafrica", "Client", "Client"
    ])

    const [rel2, setRel2] = useState([
        "Boss - soairafrica", "Client", "Client", "Boss - soairafrica"
    ])

    const [rel3, setRel3] = useState([
        "Client", "Client", "Boss - soairafrica", "Boss - soairafrica"
    ])

    const [image1, setImage1] = useState([
        mrsam, tola, profile, profile
    ])
    const [image2, setImage2] = useState([
        tola, profile, profile, mrsam
    ])
    const [image3, setImage3] = useState([
        profile, profile, mrsam, tola
    ])
    const add1 = ()=> {
        setCounter1(e=> e + 1)
    }
    const add2 = ()=> {
        setCounter2(e=> e + 1)
    }
    const add3 = ()=> {
        setCounter3(e=> e + 1)
    }
    const sub1 = ()=> {
        if(counter1 === 0){
            setCounter1(image1.length -1)
        }else{
           setCounter1(e=> e - 1) 
        }
        
    }
    const sub2 = ()=> {
        if(counter2 === 0){
            setCounter2(image2.length -1)
        }else{
           setCounter2(e=> e - 1) 
        }
        
    }
    const sub3 = ()=> {
        if(counter3 === 0){
            setCounter3(image3.length -1)
        }else{
           setCounter3(e=> e - 1) 
        }
        
    }
    const sub = ()=> {
        sub1()
        sub2()
        sub3()
    }
    const add = ()=> {
        add1()
        add2()
        add3()
    }


  return (
    <>
        <div className='container-fluid p-0 aboutme'>
            <div className='about'><p>REVIEWS</p></div>
            <div className='container-fluid above'>
                <p className='am'>REVIEWS</p>
                <div className='anime'>
                    <div className='move'></div>
                </div>
            </div>
            <div className='container'>
                <div className='row crrow'>
                    <div className='col-md'>
                        <fieldset className='crfs'>
                            <legend><img src={image1[counter1 % image1.length]} className="crimg"/></legend>
                            <p className='reviewp1'>{name1[counter1 % name1.length]}</p>
                            <p className='reviewp2'>{rel1[counter1 % rel1.length]}</p>
                            <div className='star d-flex'>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                            </div>
                            <p className='reviewp3'>{quote1[counter1 % quote1.length]}</p>
                        </fieldset>
                    </div>
                    <div className='col-md hide'>
                        <fieldset className='crfs'>
                            <legend><img src={image2[counter2 % image2.length]} className="crimg"/></legend>
                            <p className='reviewp1'>{name2[counter2 % name2.length]}</p>
                            <p className='reviewp2'>{rel2[counter2 % rel2.length]}</p>
                            <div className='star d-flex'>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                            </div>
                            <p className='reviewp3'>{quote2[counter2 % quote2.length]}</p>
                        </fieldset>
                    </div>
                    <div className='col-md crcol hide'>
                        <fieldset className='crfs'>
                            <legend><img src={image3[counter3 % image3.length]} className="crimg"/></legend>
                            <p className='reviewp1'>{name3[counter3 % name3.length]}</p>
                            <p className='reviewp2'>{rel3[counter3 % rel3.length]}</p>
                            <div className='star d-flex'>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                            </div>
                            <p className='reviewp3'>{quote3[counter3 % quote3.length]}</p>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div className='crbd d-flex justify-content-center'>
                <button onClick={sub} className='crbdbb'><img src={prev}/></button>
                <button onClick={add} className='crbdbb'><img src={next}/></button>
            </div>
        </div>
    </>
  )
}

export default Reviews