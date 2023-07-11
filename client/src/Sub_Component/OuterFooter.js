import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";


function OuterFooter() {
  return (
    <div >

        <Container fluid className='bg-black text-white '>
            <Row className="flex p-4 " >
              <Col className="flex flex-row justify-center">
                <span className="mx-4 my-2 text-base">
                <FaFacebookF/>
                </span>
                <span className="mx-4 my-2 text-lg">
                <AiOutlineInstagram/>
                </span>
              
              </Col>
            </Row>
          </Container>
          
  
    </div>
  )
}

export default OuterFooter
