import React from 'react'

import Project from '../components/Project/Project'
import { findByLabelText } from '@testing-library/react'

export default function Projects() {
    return (
        <div style={{padding: 10}}>
            <h2 style={{textAlign: 'center'}}>My Projects</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
            
        </div>
    )
}


// display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'