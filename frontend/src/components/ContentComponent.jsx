import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "../App.css";
import TextComponent from './TextComponent';
import React from 'react';

import fetchQuotes from './ApiLoader';
import { GET_DESCRIPTION } from '../constants/apiConstants';

export default function  ContentComponent () {

  return (
    <>
    <Container>
        <Row>
            <Col className="col-sm-2">
                <div className="row align-items-center justify-content-center">
                    <Button onClick={() => fetchQuotes(GET_DESCRIPTION)} variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">About</Button>
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
                    <p>Value</p> 
                </div>
                <TextComponent/>
            </Col>

        </Row>

      </Container>
    </>
  )
}