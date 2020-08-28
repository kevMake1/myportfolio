import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import './Nav.css'

export default function Nav() {
    return (
        <nav className='Nav'>
            {/* <div className='Logo'>Logo</div> */}
            <ul>
                <Link
                    activeClass="active"
                    to="Bio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                ><a href="#Bio"><li>About Me</li></a></Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                ><a href="#projects"><li>My Projects</li></a></Link>
            </ul>
        </nav>
    )
}


            {/* <Link to='/'><li>Home</li></Link>
<Link to='/social'><li>Social</li></Link>
<Link to='/signup'><li>Signup</li></Link> */}
