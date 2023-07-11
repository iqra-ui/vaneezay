import React from "react";
import Left from "./Left";
import Layout from "../../Main_Component/Layout";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function ContactUs() {
  return (
    <div className="mt-32 truncate">
      <Layout title={"Information - VANEEZAY - Contact us"}>
        <div className="md:mx-[150px] sm:[20px] my-4 p-3 bg-gray-100 ">
          <Link to="/login">Returning customer? Click here to login</Link>
        </div>
        <Row className=" flex justify-center">
          <Col>
            <Left />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default ContactUs;
