import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Project.css'

export default function Project(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            Technologies used:<br></br> {props.techUsed.map(t => t)}
                        </p>

                    </Card.Text>

                    {props.hasLink ? 
                        <a style={{ marginRight: 10 }} href={props.link} target="_blank"><Button variant="primary">{props.buttonContent}</Button></a>
                        :
                        <Button style={{ marginRight: 10 }} onClick={handleShow}>{props.buttonContent}</Button>
                    }

                <a href={props.gitHub} target="_blank"><Button variant="secondary">GitHub{props.buttonAdditionalInfo ? props.buttonAdditionalInfo : null}</Button></a>
                </Card.Body>
            </Card>

            <Modal size='xl' show={show} onHide={handleClose}>
                <iframe height="800px" src={props.demoPath} title="DTR Software Demo"></iframe>
            </Modal>
        </div>
    )
}
