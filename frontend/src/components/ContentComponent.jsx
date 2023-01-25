import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "../App.css";
import TextComponent from './TextComponent';
import React from 'react';

import fetchQuotes from './ApiLoader';
import { GET_DESCRIPTION } from '../constants/apiConstants';
import fetchButtons from './ApiButtonLoader';
import { useState, useEffect } from 'react';



export default function  ContentComponent () {

   const [data, setData] = useState({data: []});

   useEffect(() => {
    const fetchData = async () => {
        const data = await fetchButtons();
        setData(data)
      }
    
    fetchData()

    console.log(data)
    },[])


   const handleClick = async () => {
    const result = await fetchButtons()
    console.log('!!!', result)
    setData(result)
   }


   return (
    <>
    <Container>
        <Row>
            <Col className="col-sm-2">
                <div className="row align-items-center justify-content-center">
                    <Button onClick={() => fetchQuotes(GET_DESCRIPTION)} variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">About</Button>
                </div>    
                <div className="row align-items-center justify-content-center">
                    <Button onClick={() => handleClick()}variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">{data[1]?.name_of_category}</Button>
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
                <br/>

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