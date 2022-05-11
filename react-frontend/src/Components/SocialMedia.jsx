import React from 'react'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
  return (
      <div className="app__social">
          <div
            onClick={() => window.location.href="https://twitter.com/devyoma"}
          >
              <BsTwitter />
          </div>

          <div
            onClick={() => window.location.href="https://www.linkedin.com/in/ogheneyoma-emore-87a8341b3/"}
          >
              <FaLinkedin />
          </div>

          <div
            onClick={() => window.location.href="https://github.com/devyoma"}
          >
              <BsGithub />
          </div>
      </div>
  )
}

export default SocialMedia