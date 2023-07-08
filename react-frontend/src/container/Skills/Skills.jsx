import React, { useState, useEffect } from 'react'
import './Skills.scss'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../Wrapper'
import { urlFor, client } from '../../client' 


const Skills = () => {
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])

  const jobYears = [
    {
      id: 1, 
      year: 2023,
      works: 
        {
          name: "Frontend Developer (Jan - Mar 2023)", 
          company: "Digital Product School",
          desc: "Collaborated with a team of 5 as a frontend developer in an Agile environment, working on a 3-month internship program to build a product. Emphasized teamwork and collaboration throughout the project."
        }
      
    },
    {
      id: 2, 
      year: 2022,
      works: 
        {
          name: "Frontend Developer (June - Jan 2023)", 
          company: "Skibble",
          desc: "As the first frontend engineer, I established the foundational infrastructure, designed captivating user-facing pages, integrated them with the backend, and optimized code efficiency using React."
        }
      
    },
    {
      id: 3, 
      year: 2021,
      works: 
      {
        name: "Frontend Developer (Sept - Dec 2021)", 
        company: "Classboard",
        desc: "Designed and implemented the product website's user interface for seamless user access."
      }
    },
    {
      id: 4,
      year: 2020,
      works: 
      {
        name: "Intern Web Developer (Jan - Mar 2020)", 
        company: "Ietech",
        desc: "Developed websites using HTML, CSS, JS, Bootstrap, and web applications with ASP.NET (C#)."
      }
    }
  ]



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

      <div 
        className="app__skills-container"
      >
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
          // style={{ border: "2px solid black" }}
          className='app__skills-exp'
        >
            {
              jobYears?.map((experience) => (
                 <motion.div
                  // style={{ border: "1px solid red" }}
                  className='app__skills-exp-item'
                  key={experience.year}>
                   <div className="app__skills-exp-year">
                     <p className="bold-text">{experience.year}</p>
                   </div>
                   
                   <motion.div
                    className='app__skills-exp-works'
                   >
                          <>
                            <motion.div
                              whileInView={{ opacity: [0, 1] }}
                              transition={{ duration: 0.5 }}
                              // key={}
                              className='app__skills-exp-work'
                            >
                              <h4 className="bold-text">{experience.works?.name}</h4>
                              <p className="p-text">{experience.works?.company}</p>
                              <p className="p-text">
                                {experience.works?.desc}
                              </p>

                            </motion.div>
                        </>
                   </motion.div>

                   {/* <motion.div
                    className='app__skills-exp-works'
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

                            </motion.div>
                        </>
                       ))
                     }
                   </motion.div> */}
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