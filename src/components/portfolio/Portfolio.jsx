import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.PNG"
import IMG2 from "../../assets/portfolio2.PNG"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"


// ARRAY SECTİON

const data = [
  {
    id: 1,
    image:  IMG1,
    title:  'Spotify Website Design',
    github: 'https://github.com/Cinar00/spotify-clone',
    demo:   'https://spotify-clone-react-tailwind-cinar.netlify.app/'
  },
  {
    id: 2,
    image:  IMG2,
    title:  'Getir Website Design',
    github: 'https://github.com/Cinar00/getir.com-clone',
    demo:   'https://getir-clone-react-tailwind-cinar.netlify.app/'
  },
  {
    id: 3,
    image:  IMG3,
    title:  'Website Design 3',
    github: 'https://github.com',
    demo:   'https://spotify-clone-react-tailwind-cinar.netlify.app/'
  },
  {
    id: 4,
    image:  IMG4,
    title:  'Website Design 4',
    github: 'https://github.com',
    demo:   'https://spotify-clone-react-tailwind-cinar.netlify.app/'
  },
  {
    id: 5,
    image:  IMG5,
    title:  'Website Design 5',
    github: 'https://github.com',
    demo:   'https://spotify-clone-react-tailwind-cinar.netlify.app/'
  },
  {
    id: 6,
    image:  IMG6,
    title:  'Website Design 6',
    github: 'https://github.com',
    demo:   'https://spotify-clone-react-tailwind-cinar.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='__blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
                  </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio






