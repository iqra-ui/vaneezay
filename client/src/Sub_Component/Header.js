import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div className='hover:text-amber-800'>
        
        <Container fluid className="bg-dark text-center  text-light py-2">
      <Row >
        <Col class="cursor-pointer " >FREE STANDARD DELIVERY WITH WIN.SPEND OF $60</Col>
      </Row>
    </Container>
      
    </div>
  )
}

export default Header
