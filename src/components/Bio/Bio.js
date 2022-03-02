import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


import './Bio.css'



export default function Bio() {
    return (
        <div id='Bio' className='Bio'>
            <h2 className='about-me'>About Me</h2>
            <p className='about-me-content'>
                I'm a software engineer specializing in building responsive websites, and IOS applications.
                I am passionate about implementing ideas into reality. As a developer I enjoy taking on challenges,
                solving problems, using my obsessive attention to detail, and my mission-driven
                work ethic to have an impact on everyone around me whether it's from customers or small businesses
                to large companies.
                <br></br>
                <br></br>
                <br></br>
                
                <a id="linkedIn" href="https://www.linkedin.com/in/kevaughn-clarke" target="_blank"><FontAwesomeIcon style={{margin: '0 10px'}} size="3x" icon={faLinkedin} /></a>
                <a id="github" href="https://www.github.com/kevMake1" target="_blank"><FontAwesomeIcon style={{margin: '0 10px'}} size="3x" icon={faGithub} /></a>
                
            </p>
            

        </div>
    )
}
