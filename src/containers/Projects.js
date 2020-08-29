import React from 'react'
import projects from '../assets/projects'

import Project from '../components/Project/Project'
import { findByLabelText } from '@testing-library/react'

export default function Projects() {
    return (
        <div id="projects" style={{ padding: 10 }}>
            <h2 style={{ textAlign: 'center' }}>My Projects</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>

                {projects.map(proj => {
                    return <Project
                        key={proj.ID}
                        imgPath={proj.imgPath}
                        title={proj.title}
                        description={proj.description}
                        techUsed={proj.techUsed}
                        buttonContent={proj.buttonContent}
                        hasLink={proj.hasLink}
                        link={proj.linkToProj}
                        demoPath={proj.demoPath}
                        gitHub={proj.gitHubLink}
                        buttonAdditionalInfo={proj.buttonAdditionalInfo}
                    />
                })}
            </div>

        </div>
    )
}


// display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'