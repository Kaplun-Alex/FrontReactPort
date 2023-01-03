import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "../App.css";
import TextComponent from './TextComponent';
import React, { useState, useEffect } from 'react';

export default function ContentComponent() {

    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `Ви натиснули ${count} разів`;
    });

  return (
    <>
    <Container>
        <Row>
            <Col class="col-sm-2">
                <div className="row align-items-center justify-content-center">
                    <Button onClick={() => setCount(count + 1)} variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">About</Button>
                </div>    
                <div className="row align-items-center justify-content-center">
                    <Button variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">Education</Button>
                </div> 
                <div className="row align-items-center justify-content-center">
                    <Button variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">Experience</Button>
                </div> 
                <div className="row align-items-center justify-content-center">
                    <Button variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">Skills</Button>
                </div> 
                <div className="row align-items-center justify-content-center">
                    <Button variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">Certificates</Button>
                </div> 
                <div className="row align-items-center justify-content-center">
                    <Button variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">Background</Button>
                </div> 
                <div className="row align-items-center justify-content-center">
                    <Button variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">Lang</Button>
                </div> 
                <div className="row align-items-center justify-content-center">
                    <Button variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">Contact</Button>
                </div> 
                <div className="row align-items-center justify-content-center">
                    <Button href='/' variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">Return</Button>
                </div>

            </Col>

            <Col className="col-sm-10">
                <div>
                    <p>{count}</p> 
                </div>
                <TextComponent/>
            </Col>

        </Row>

      </Container>
    </>
  )
}