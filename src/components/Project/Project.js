import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Project.css'

export default function Project(props) {

    const test = ["HTML, ", "CSS, ", "JavaScript, " , "BootStrap, ", "MongoDB"]
    return (
        <div className='Project'>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={props.imgPath} />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>{props.title}</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                        <p>
                            {props.description}
                        </p>
                        <p>
                            Technologies used:<br></br> {props.techUsed.map(t => t )}
                        </p>

                    </Card.Text>
                    <a href={props.link} target="_blank"><Button variant="primary">{props.buttonContent}</Button></a>
                    <a href={props.gitHub} target="_blank"><Button variant="secondary">GitHub</Button></a>
                </Card.Body>
            </Card>
        </div>
    )
}
