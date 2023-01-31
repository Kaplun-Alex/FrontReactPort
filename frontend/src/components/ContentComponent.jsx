import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "../App.css";
import React from 'react';
import fetchButtons from './ApiButtonLoader';
import { useState, useEffect } from 'react';
import descriptionLoader from './DescriptionLoader';




export default function  ContentComponent () {
    
   const [buttonData, setButtonData] = useState({buttonData:''});
   const [descriptionData, setDescriptionData] = useState({descriptionData:''});
   const [textComponentState, setStateTextComponent] = useState('');

    useEffect(() => {
    const fetchButtonData = async () => {
        const buttData = await fetchButtons();
        setButtonData(buttData)
    }
    const fetchDescriptionData = async () => {
        const desData = await descriptionLoader();
        setDescriptionData(desData)

    }   
        
    fetchButtonData()
    fetchDescriptionData()

    console.log(buttonData, descriptionData)
    },[])


    const setText  = async (val) => {
        const textValue = await val
        setStateTextComponent(textValue)
    }


    /*
    const handleClick = async () => {
    const result = await fetchButtons()
    console.log('!!!', result)
    setButtonData(result)
   }
    */

   return (
    <>
    <Container>
        <Row>
            <Col className="col-sm-2">
                <div className="row align-items-center justify-content-center">
                    <Button onClick={() => setText(descriptionData[0]?.about_field)} variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">{buttonData[7]?.name_of_category}</Button>
                </div>    
                <div className="row align-items-center justify-content-center">
                    <Button onClick={() => setText(descriptionData[1]?.about_field)}variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">{buttonData[6]?.name_of_category}</Button>
                </div> 
                <div className="row align-items-center justify-content-center">
                    <Button onClick={() => setText(descriptionData[2]?.about_field)} variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">{buttonData[5]?.name_of_category}</Button>
                </div>    
                <div className="row align-items-center justify-content-center">
                    <Button onClick={() => setText(descriptionData[3]?.about_field)}variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">{buttonData[4]?.name_of_category}</Button>
                </div> 
                <div className="row align-items-center justify-content-center">
                    <Button onClick={() => setText(descriptionData[4]?.about_field)} variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">{buttonData[3]?.name_of_category}</Button>
                </div>    
                <div className="row align-items-center justify-content-center">
                    <Button onClick={() => setText(descriptionData[5]?.about_field)}variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">{buttonData[2]?.name_of_category}</Button>
                </div> 
                <div className="row align-items-center justify-content-center">
                    <Button onClick={() => setText(descriptionData[6]?.about_field)} variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">{buttonData[1]?.name_of_category}</Button>
                </div>    
                <div className="row align-items-center justify-content-center">
                    <Button onClick={() => setText(descriptionData[7]?.about_field)}variant="light" className="btn btn-outline-dark mybtn btn-block vikingfont">{buttonData[0]?.name_of_category}</Button>
                </div> 

            </Col>

            <Col className="col-sm-10">
                <div>
                    <p>{textComponentState}</p> 
                </div>
            </Col>

        </Row>

      </Container>
    </>
  )
}