import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
// import { images } from '../../constants'
import { urlFor, client } from '../../client'
import { AppWrap, MotionWrap } from '../../Wrapper'

// const abouts = [
//   {
//     title: "Frontend Engineer",
//     description: "I am a good Frontend Engineer",
//     imageUrl: images.about01
//   },
//   {
  // I have experience working with HTML CSS SCSS and other design libraries and frameworks
//     title: "React JS Developer",
//     description: "Building the web component by component",
//     imageUrl: images.about02
//   },
//   {
//     title: "UI/UX",
//     description: "I build reuseable UI components",
//     imageUrl: images.about03
//   },
//   {
//     title: "Backend Developer",
//     description: "I build the logic of the web",
//     imageUrl: images.about04
//   }
// ]

// https://

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then((data) => {
        setAbouts(data)
      })
  }, [])

  return (
    <React.Fragment>
      <h2 className="head-text">
        I Know that 
        <span>&nbsp;Good Apps </span>means<span> Good Business</span>
      </h2>

      <div className="yoma__about">
        <p>Hello, I'm Yoma a <span className="yoma__about-highlight">frontend Developer</span> with a lot to learn. I am at the moment exploring the awesomeness of <span className="yoma__about-highlight">JAVASCRIPT 🚀</span>, it frameworks and libraries <span className="yoma__about-highlight">(React JS especially)</span>, and so much more.</p>
        <p>I am a frontend developer with more than a year of coding frontend applications.</p>
        <p>I would love to get on projects with positive people to boost my potentials and skills.</p>
      </div>

      <div className="app__profiles">
          {
            abouts.map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
                className='app__profile-item'
                key={about.title + index}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title} />
                <h2 className="bold-text" style={{ marginTop: "20px" }}>{about.title}</h2>
                <p className="p-text" style={{ marginTop: "10px" }}>{about.description}</p>
              </motion.div>
            ))
          }
      </div>
    </React.Fragment>
  )
}

// export default AppWrap(About, 'about')
export default AppWrap(
  MotionWrap(About, 'app__about' ),
  'about',
  'app__whitebg'
  )