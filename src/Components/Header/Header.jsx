
import "./Header.css"
import Logo from "../../assets/logo.png"
import React from 'react'

const  Header = () =>{
  return (
    <div className="header">
        <img src= {Logo} alt="" className="logo"/>
        <ul className="header_menu">
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header