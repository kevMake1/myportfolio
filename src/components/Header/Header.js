import React from 'react'

import Nav from '../Nav/Nav'

import './Header.css'

export default function Header() {
    return (
        <header className="Header">
            <Nav />
            <div className='mobile'>
                <img src= {require("../../assets/imgs/myName.png")}/>
            </div>
            
        </header>
    )
}
