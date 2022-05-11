import React, { useState, useEffect } from 'react'
import './Skills.scss'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../Wrapper'
import { urlFor, client } from '../../client'


const Skills = () => {
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        setExperiences(data)
      })

      // Skills data
    client.fetch(skillsQuery)
    .then((data) => {
      setSkills(data);
    })
  }, [])

  return (
    <React.Fragment>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        {/* SKILLS */}
        <motion.div
          className='app__skills-list'>
            {
              skills.map((skill) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className='app__skills-item app__flex'
                  key={skill.name}
                >
                  <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                    <img src={urlFor(skill.icon)} alt={skill.name} />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              ))
            }
        </motion.div>

        {/* EXPERIENCE */}
        <motion.div 
          // style={{ border: "1px solid red" }}
          className='app__skills-exp'
        >
            {
              experiences?.map((experience) => (
                 <motion.div
                  className='app__skills-exp-item'
                  key={experience.year}>
                   <div className="app__skills-exp-year">
                     <p className="bold-text">{experience.year}</p>
                   </div>
                   
                   <motion.div
                    className='app__skills-exp-works'
                    // style={{ border: "1px solid green" }}
                   >
                     {
                       experience.works.map((work) => (
                          <>
                            <motion.div
                              whileInView={{ opacity: [0, 1] }}
                              transition={{ duration: 0.5 }}
                              key={work.name}
                              className='app__skills-exp-work'
                            >
                              <h4 className="bold-text">{work.name}</h4>
                              <p className="p-text">{work.company}</p>
                              <p className="p-text">
                                {work.desc}
                              </p>

                              {/* {work.desc} */}
                            </motion.div>
                            {/* while we hover over */}
                            
        
                        </>
                       ))
                     }
                   </motion.div>
                 </motion.div>
              ))
            }
        </motion.div>

      </div>
    </React.Fragment>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills' ),
  'skills',
  'app__whitebg'
  )