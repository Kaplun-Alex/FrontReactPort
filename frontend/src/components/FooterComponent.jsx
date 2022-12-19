import React from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'

const FooterComponent = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3 text-white'>Copyright &copy; Oleksa</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterComponent;