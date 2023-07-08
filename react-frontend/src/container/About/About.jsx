import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
// import { images } from '../../constants'
import { urlFor, client } from '../../client'
import { AppWrap, MotionWrap } from '../../Wrapper'

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
        About <span>Me</span>
      </h2>

      <div className="yoma__about">
        <p>Hello, I'm Yoma, <span className="yoma__about-highlight">a Frontend Developer</span> with a strong passion for exploring the awesomeness of <span className="yoma__about-highlight">JAVASCRIPT </span>, it frameworks and libraries<span className="yoma__about-highlight"> especially React JS</span></p>
        <p>Seeking collaborative projects to boost skills and potential.</p>
        <p>Let's work together to create amazing experiences and push the boundaries of what we can achieve! </p>
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