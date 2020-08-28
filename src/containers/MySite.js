import React from 'react'
import Header from '../components/Header/Header'
import Projects from './Projects'
import Bio from '../components/Bio/Bio'
import Skills from '../components/Skills/Skills'


export default function MySite() {
    return (
        <div>
            <Header />
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                <Bio />
                <Skills />
            </div>
            
            <Projects />
        </div>
    )
}
