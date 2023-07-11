import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function InnerFooter() {
  return (
    <div className="mt-20 ">
      <Container
        fluid
        className="  bg-zinc-800 text-white  py-5  m-0 flex row  justify-evenly"
      >
        <Row>
          <Col md={4} sm={12} className="p-2 mb-3">
            <p className=" font-bold">Subscribe to receive Moren News</p>
            <hr />
            <input
              type={"email"}
              placeholder="Email"
              className="lg:w-64 lg:h-12  sm:text-[9px] lg:text-base md:w-48 md:h-12 w-44 h-12 p-2 mt-6  bg-zinc-700"
            ></input>
            <button className=" bg-zinc-900 hover:bg-black hover:text-amber-600  sm:text-[9px] lg:text-base lg:w-28 lg:h-12 md:w-20 md:h-12 w-20 h-12">
              SignUp
            </button>
          </Col>

          <Col md={4} className=" p-2 mb-3">
            <p class="font-bold">Help</p>
            <p className="md:w-64">
              <hr />
            </p>
            <p className="text-sm mt-10" class="hover:text-amber-500">
              Shipping<span class="hover:text-amber-700 ml-20">Contact Us</span>
            </p>
            <p className="text-sm " class="hover:text-amber-500">
              Return/Exchange
            </p>
          </Col>

          <Col md={4} className="mb-3 p-2">
            <p class=" font-bold">Explore</p>
            <p className="md:w-64">
              <hr />
            </p>
            <p className="text-sm mt-10" class="hover:text-amber-500">
              About Us
            </p>
            <p className="text-sm " class="hover:text-amber-500">
              Get the look
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default InnerFooter;
