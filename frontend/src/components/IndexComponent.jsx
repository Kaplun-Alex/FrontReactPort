import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import "../App.css";

export default function IndexComponent() {
  return (
    <>
      <br/>
      <Container>
        <Row>
            <Col>
            <div className='row align-items-center justify-content-center'>
                <Button  href="/home" variant="light" className=" position-relative btn btn-outline-dark mybtn btn-block vikingfont">This is index, do to "/home"</Button>
            
            </div>
            </Col>
        </Row>
      </Container>
      <br/>
    </>
  )
}