import React, {useEffect} from 'react'
import './styles/Home.css'

export default function Home() {
  const intro = "Hi, I'm Kyle Emmanuel, an aspiring web developer"
  const introArray = [...intro]
  const spans = document.getElementsByClassName('span')

  function classAdder(span) {
    span.classList.add("animated")
    setTimeout(() => {
      span.classList.remove("animated")
    }, 1000);
  }

  useEffect(() => {
    setTimeout(() => {
      Array.from(spans).forEach(span => {
        span.classList.remove("pre-animation")
      })
    }, 1000);
    Array.from(spans).forEach(span => {
      span.addEventListener("mouseover", () => {
        classAdder(span)
      })
    })

    return (
      Array.from(spans).forEach(span => {
        span.removeEventListener("mouseover", () => {
          classAdder(span)
        })
      })
    )
  }, [])

 

  return (
    <div className='home-container'>
        <section className='intro-section'>
            <div>
              {introArray.map((char, index) => {
                if (index === 3 || index === 22) return <br key={index}/>
                if (index === 38) return <span className='break-here' key={index}>{char}</span>
                return <span className='span pre-animation' key={index}>{char}</span>
              })}
            </div>
        </section>
        <section className='button-section'>
            <a className='pre-animation' target='_blank' href='https://github.com/KyleEmman' rel="noopener noreferrer">Visit my Github</a>
            <a className='pre-animation' href='#res'>View my resume</a>
        </section>
    </div>
  )
}
