import React from 'react'
import './styles/Home.css'

export default function Home() {
  return (
    <div className='home-container'>
        <section className='intro-section'>
            <p>
                Hi, <br/> I'm Kyle Emmanuel, <br/> an aspiring web developer
            </p>
        </section>
        <section className='button-section'>
            <a target='_blank' href='https://github.com/KyleEmman' rel="noopener noreferrer">Visit my Github</a>
            <a href='#res'>View my resume</a>
        </section>
    </div>
  )
}
