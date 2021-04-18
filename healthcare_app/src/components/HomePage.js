import React from 'react'
import '../css/homepage.css'
import Typed from 'react-typed';
import {motion} from 'framer-motion'
import Particles from 'react-particles-js';

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      loop: Infinity,
      ease: "easeInOut"
    }
  }
}



export default function HomePage() {
  return (
    <>
     

     

     <div className="header">
         <h1>Health Care Monitoring System</h1>
    </div>

    <div className="introduction">
      <h2>  <Typed
                strings={[
                    'Check your Heart Rate',
                    'Check your Body Temperature',
                    'Check your 02 level']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed></h2>
    </div>

    <div className = "icon">
    <svg width="723" height="178" viewBox="0 0 723 178" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path d="M0.5 130H29C33.3333 123.833 42.2 111.7 43 112.5C43.8 113.3 51.3333 124.5 55 130L67 143.5L77 1L91 177L96.5 143.5L104.5 130H121C125.167 118 135.1 94.2 141.5 95C147.9 95.8 158.167 118.667 162.5 130H181L193 118L202 130H273L284 112.5L297 130L310 143.5L318 1L333 177C336 159.5 343.1 125.6 347.5 130C351.9 134.4 360.333 131.833 364 130C367.833 118.333 377.6 95 386 95C390.333 106.667 401.4 130 411 130C420.6 130 430.333 122 434 118L444 130H515L529 112.5L539 130L552 143.5L562 1L575 177C576.5 161.333 581.9 130 591.5 130C601.1 130 608.833 130 611.5 130C614.5 118.333 622 95 628 95C635.5 95 642 130 653 130C661.8 130 673.333 118.333 678 112.5L692.5 130H723" stroke="#fcf1f1" strokeWidth="4" variants = {pathVariants} initial = "hidden" animate = "visible"/>
    </svg>
    </div> 

    <div className="links">
      <a href="/register">Sign Up</a>
      <a href="/login">Login</a>
    </div>

    <div className="icon">

    <svg width="337" height="263" viewBox="0 0 337 263" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path d="M305.279 15.0079C397.609 79.6212 252.925 205.258 169.041 260C-41.9972 115.159 -9.13812 36.3214 33.6712 15.0079C105.174 -19.4525 153.711 22.6359 169.041 47.9876C222.495 -14.4719 282.139 -0.0236216 305.279 15.0079Z" stroke="#f05454" strokeWidth="4" variants = {pathVariants} initial = "hidden" animate = "visible"/>
      </svg>

    </div>

   
    </>
  )
}
