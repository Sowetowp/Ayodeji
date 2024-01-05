import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import ComingSoon from './ComingSoon'
import { useNavigate } from 'react-router-dom'


const Blog = () => {
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
    if(window.innerWidth > 576 && parentURL.includes('/blog')){
      navigate("/")
      console.log(parentURL)
    }
  },[])
  return (
    <>
      {window.innerWidth <= 576 &&<Nav colsetter={colsetter}/>}
      <ComingSoon/>
    </>
  )
}

export default Blog