import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Allorder() {

    let Navigate = useNavigate()
    
    function redirection() {
        Navigate(`/`)
    }
   
    useEffect(()=>{redirection()},[])
  return (
    <div><h1>Allorder</h1></div>
  )
}
