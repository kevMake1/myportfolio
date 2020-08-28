import React from 'react'

import './Nav.css'

export default function Nav() {
    return (
        <nav className='Nav'>
            {/* <div className='Logo'>Logo</div> */}
            <ul>
                <a href="#Bio"><li>About Me</li></a>
                <a href="#projects"><li>My Projects</li></a>
            </ul>
        </nav>        
    )
}


{/* <Link to='/'><li>Home</li></Link>
<Link to='/social'><li>Social</li></Link>
<Link to='/signup'><li>Signup</li></Link> */}
