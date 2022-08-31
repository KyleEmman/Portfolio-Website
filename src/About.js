import React from 'react'
import './styles/About.css'
import {Link} from 'react-router-dom'

export default function About() {
  return (
    <div className='about-container'>
      <div>
        <h1>What, When, Why?</h1>
      </div>
      <div>
        <p>
          I am currently learning to be a full stack web developer with the front end as my starting point.
          It has only been since June of 2022 that I started to take programming seriously and also chose web development
          as my primary field in the IT world. <br></br><br></br> The reason why I have chosen web development is because
          it is the field in programming that I have enjoyed the most! I have done several commissions in web development as a 
          freelancer and I am very passionate about learning more concepts and tech stacks in the field of web development.
        </p>
        <Link to='/contact'>Hit me up!</Link>
      </div>
    </div>
  )
}
