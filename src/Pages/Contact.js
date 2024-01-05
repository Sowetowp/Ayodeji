import React, { useEffect, useState } from 'react'
import Mycontact from '../Components/Mycontact'
import Nav from '../Components/Nav'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const [col1, setCol1] = useState("")
  const [col2, setCol2] = useState("")
  const colsetter = (e, f)=>{
    setCol1(e)
    setCol2(f)
  }
  const navigate = useNavigate()
  useEffect(()=>{
    const parentWindow = window.parent;
    const parentURL = parentWindow.location.href;
    if(window.innerWidth > 576 && parentURL.includes('/contact')){
      navigate("/")
      console.log(parentURL)
    }
  },[])
  return (
    <>
        {window.innerWidth <= 576 &&<Nav colsetter={colsetter}/>}
        <Mycontact prop1={col1} prop2={col2}/>
    </>
  )
}

export default Contact