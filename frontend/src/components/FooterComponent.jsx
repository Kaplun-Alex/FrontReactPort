import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

export default function FooterComponent() {
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