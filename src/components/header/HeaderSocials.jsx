import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="linkedin.com/in/beytullah-cinar"><BsLinkedin /></a>
        <a href="https://github.com" target="https://github.com/Cinar00"><FaGithub /></a>
        <a href="https://twitter.com" target="https://twitter.com/bytllhcinar"><FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials