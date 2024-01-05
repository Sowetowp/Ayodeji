import React, { useEffect, useState } from 'react'
import Myworks from '../Components/Myworks'
import Nav from '../Components/Nav'
import { useNavigate } from 'react-router-dom'

const Works = () => {
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
    if(window.innerWidth > 576 && parentURL.includes('/work')){
      navigate("/")
      console.log(parentURL)
    }
  },[])
  return (
    <>
        {window.innerWidth <= 576 &&<Nav colsetter={colsetter}/>}
        <Myworks prop1={col1} prop2={col2}/>
    </>
  )
}

export default Works