import React, { useState, useEffect } from "react";
import { GrNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "../../styles.css";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useCart } from "../../context/Cart";
import { useAuth } from "../../context/Author";
import Payment from "../Page6/Payment";

function Left(props) {
  const [validated, setValidated] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState({});

  const [cart1, setC] = useState([]);

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  //total
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((p) => {
        total += p.quantity * p.price;
      });
      return total.toLocaleString("PAK", {
        style: "currency",
        currency: "PKR",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // after 200 add
  const totalPrice1 = () => {
    try {
      let total = 0;
      cart?.map((p) => {
        total += p.quantity * p.price + 200;
      });
      return total.toLocaleString("PAK", {
        style: "currency",
        currency: "PKR",
      });
    } catch (error) {
      console.log(error);
    }
  };
  // const [name, setName] = useState("");
  //total
  const name = () => {
    try {
      let n = "";
      cart?.map((p) => {
        n += p.name;
        console.log(n);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //intial product details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //set single product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+`/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const res = await axios.post(
        process.env.REACT_APP_API+`/api/v1/checkForm/post-checkForm`,
        {
          firstname,
          lastname,
          email,
          phone,
          address,
          city,
          postalcode,
        }
      );
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }

      setValidated(true);

      if (res.data.success) {
        toast.success("Infomation store Successfully");

        setCart([]);
        localStorage.removeItem("cart");
      } else {
        toast.error("res.data.message");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while information");
    }
  };

  const iconRemove = "bg-none";

  return (
    <Container >
      <Row>
        <Col xs={12} sm={12} md={12} lg={8} xl={8} className="px-5">
        
          <div className="" iconRemove={iconRemove}>
            <div className="flex justify-between pt-1 mb-4 font-bold mt-12 text-3xl  text-gray-800">
              <p className="text-3xl ">Billing Details</p>
            </div>
            <p className="bg-amber-700 h-0.5 w-100 ">
              <hr />
            </p>

            <div className="">
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                iconRemove={iconRemove}
              >
                <Row className="m-0 px-0 py-2 ">
                  <Col className="p-0 my-0 ">
                    <label className="py-2 text-gray-900">First name</label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setFirstname(e.target.value)}
                      value={firstname}
                      className="rounded-[0px] focus:rounded-[0px] py-2  "
                      required
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="pt-2 px-0 m-0"
                    >
                      Enter a first name
                    </Form.Control.Feedback>
                  </Col>
                  <Col className="p-0 my-0 ml-1">
                    <label className="py-2 text-gray-900">Last name</label>

                    <Form.Control
                      type="text"
                      onChange={(e) => setLastname(e.target.value)}
                      value={lastname}
                      className="rounded-[0px] focus:rounded-[0px] py-2  "
                      required
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="pt-2 px-0 m-0"
                    >
                      Enter a last name
                    </Form.Control.Feedback>
                  </Col>
                </Row>

                <Row className="m-0 px-0 py-2">
                  <label className="py-2 text-gray-900">Street Address</label>

                  <Form.Control
                    type="address"
                    placeholder="House Number and Street Name"
                    className="rounded-[0px] text-[12px] focus:rounded-[0px] py-2  "
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="pt-2 px-0 m-0"
                  >
                    Enter an address
                  </Form.Control.Feedback>
                </Row>
                <Row className="m-0 py-2 px-0">
                  <Form.Control
                    type="text"
                    placeholder="Apartment, suite, unit etc. (optional) "
                    className="rounded-[0px] text-[12px] focus:rounded-[0px] py-2 focus:outline-0 "
                  />
                </Row>

                <Row className="m-0 px-0 py-2">
                  <label className="py-2 text-gray-900">Town / City</label>

                  <Form.Control
                    type="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="rounded-[0px] focus:rounded-[0px] py-2  "
                    required
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="pt-2 px-0 m-0"
                  >
                    Enter a city
                  </Form.Control.Feedback>
                </Row>

                <Row className="m-0 px-0 py-2">
                  <label className="py-2 text-gray-900">Postal / Zip</label>

                  <Form.Control
                    type="number"
                    onChange={(e) => setPostalcode(e.target.value)}
                    value={postalcode}
                    className="rounded-[0px] focus:rounded-[0px] py-2  "
                  />
                </Row>

                <Row className="m-0 px-0 py-2">
                  <label className="py-2 text-gray-900">Phone</label>

                  <Form.Control
                    type="phone"
                    className="rounded-[0px] focus:rounded-[0px] py-2 outline-2 transition-none "
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="pt-2 px-0 m-0"
                  >
                    Enter a phone number to use this delivery method
                  </Form.Control.Feedback>
                </Row>
                <Row className="m-0 py-2">
                  <label className="py-2 text-gray-900">Email Address</label>

                  <Form.Control
                    type="email"
                    className="rounded-[0px] focus:rounded-[0px] py-2 bg-none"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="pt-2 px-0 m-0 bg-none"
                  >
                    Enter a valid email
                  </Form.Control.Feedback>
                </Row>

                <div className="my-5  sm:my-2 flex justify-between item-center cursor-pointer">
                  <Button
                    type="submit"
                    className="bg-zinc-800 hover:bg-yellow-700 w-96  h-14  text-base "
                    style={{ borderRadius: "0", border: "none" }}
                  >
                    Place Order
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
          <h1 className="ml-2 mt-24 text-2xl font-bold">Your Order</h1>
          <p className="bg-amber-700 h-0.5 w-100 mr-16 ml-2">
            <hr />
          </p>

          <p className="mt-8 text-sm flex justify-between">
            Product <span className="md:ml-64">Subtotal</span>
          </p>

          <p className="border-b-2 mt-2"></p>

          {cart?.map((p) => (
            <p className="mt-8 text-sm flex justify-between">
              {p.name}
              <span className="">{p.price}</span>
            </p>
          ))}
          <p className="border-b-2 mt-2"></p>
          <p className="mt-8 text-sm flex  justify-between">
            Subtotal<span className="md:ml-64">{totalPrice()}</span>
          </p>
          <p className="border-b-2 mt-2"></p>
          <p className="mt-8 text-sm flex justify-between">
            Shipping<span className="md:ml-64 sm:ml-20">Flat rate 200Rs</span>
          </p>
          <p className="border-b-2 mt-2"></p>
          <p className="mt-8 text-sm flex justify-between ">
            Total
            <span className="md:ml-64  font-bold text-xl">{totalPrice1()}</span>
          </p>
          <p className="border-b-2 mt-2"></p>
          <p>{name()}</p>

          <Payment />
        </Col>
      </Row>
    </Container>
  );
}

export default Left;
