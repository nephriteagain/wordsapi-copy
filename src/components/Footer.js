import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer pt-4 pb-3'>
        <div className='footer-bg'></div>
        <div className='footer-left'>
        <p><b>words</b>api<b>.com</b></p>
        <div className='policy'>
            <p id='first'><a>Terms of Service</a></p>
            <p id='middle'><a>Privacy Policy</a></p>
            <p><a>About</a></p>
        </div>
        </div>
        <div className='footer-right'>
        <div className='socials mb-2'>
            <div className='icon'><BsGithub /></div>
            <div className='icon'><BsTwitter /></div>
            
            
        </div>
        <p className='copyright'>Copyright © 2015-2019 wordsapi.com.</p>
        </div>
    </div>
  )
}

export default Footer