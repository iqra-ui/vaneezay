import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useCart } from "../../context/Cart";
import { useAuth } from "../../context/Author";
import { GrFormClose } from "react-icons/gr";

import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import { toast } from "react-toastify";

import { RiDeleteBinLine } from "react-icons/ri";
import { Outlet, Link } from "react-router-dom";
// import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Layout from "../../Main_Component/Layout";
import { Container, Row, Col } from "react-bootstrap";

function ViewCart() {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const [cart1, setC] = useState([]);

  const values = [true];
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

  //chnge hndle
  const handleChange = (p, d) => {
    // console.log(p,d)
    const ind = cart.indexOf(p);
    const arr = cart;
    arr[ind].quantity += d;
    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setC([...arr]);
  };

  //delete item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
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

  return (
    <Layout title={"CART | VANEEZAY"}>
      <Container fluid className=" container">
        <Row className="mt-24">
          <Col xs={12} sm={12} md={9} lg={9} xl={9}>
            <div>
              <div className="flex justify-between items-baseline px-4 py-6 "></div>
              <div className="flex px-4  items-baseline ">
                <p className="text-black font-bold text-sm flex grow-[4] hidden md:block ">
                  Product
                </p>
                <p className="text-black font-bold text-sm  grow-[1] text-center justify-self-center hidden md:block ">
                  Price
                </p>
                <p className="text-black font-bold text-sm  grow-[1] text-center justify-self-center hidden md:block ">
                  Quantity
                </p>
                <p className="text-black font-bold text-sm  grow-[1] text-right justify-self-end hidden md:block ">
                  Subtotals
                </p>
              </div>
              <hr />
              {cart?.map((p) => (
                <div className="flex flex-row justify-between px-4 py-4">
                  <div className="flex flex-row items-center grow-[6]">
                    <button
                      onClick={() => removeCartItem(p._id)}
                      className="text-[20px] mt-1 cursor-pointer "
                    >
                      x
                    </button>{" "}
                    <div className="w-[100px] ">
                      <img
                        src={process.env.REACT_APP_API+`/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top "
                        alt={p.name}
                      />
                    </div>
                    <div>
                      <p>{p.name}</p>

                      <div className="flex items-center grow-[2] block md:hidden">
                        <button className="">
                          Quantity: <span className="ml-24">{p.quantity}</span>
                        </button>
                      </div>
                      <div className="flex items-center grow-[0] mt-2 font-bold block md:hidden">
                        <p>Subtotals: {p.price * p.quantity}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10  items-center grow-[2] hidden md:block">
                    <p>{p.price}Rs</p>
                  </div>
                  <div className="mt-10  items-center grow-[3] hidden md:block">
                    <button className="m-1" onClick={() => handleChange(p, -1)}>
                      -
                    </button>
                    <button className="m-1">{p.quantity}</button>
                    <button className="m-1" onClick={() => handleChange(p, +1)}>
                      +
                    </button>
                  </div>
                  <div className="mt-10  items-center grow-[0] hidden md:block ">
                    <p>{p.price * p.quantity}</p>
                  </div>
                </div>
              ))}

              <hr />
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
            className="mt-10 ml-0 mr-0 p-0 bg-gray-100"
          >
            <div className=" xs:text-center fixed sm:text-center md:text-right relative  pt-6">
              <p className="font-bold  text-sm absolute left-7 pt-2 pb-5">
                Cart totals
              </p>

              <p className=" pt-5 px-4 text-black underline-offset-2 my-2 font-medium text-sm tracking-wider flex justify-between">
                SUBTOTAL
                <span className="text-gray-600 text-sm ml-3">
                  {totalPrice()}
                </span>
              </p>

              <p className="pt-2 px-4 text-black underline-offset-2 my-2 font-medium text-sm tracking-wider flex justify-between">
                Shipping
                <span className="text-gray-600 text-sm ml-3">
                  Flat rate: 200.00Rs
                </span>
              </p>

              <p className="pt-2 px-4 text-black underline-offset-2 my-2 font-medium text-sm tracking-wider flex justify-end">
                Shipping to <span className="font-bold"> Punjab</span>
              </p>

              <p className="pt-2 px-4 text-black underline-offset-2 my-2 font-medium text-sm tracking-wider flex justify-end">
                Change address
              </p>

              <hr className="pt-1 px-4 text-black underline-offset-2 my-2 font-medium text-sm tracking-wider flex justify-end" />

              <p className=" pt-2 px-4 text-black underline-offset-2 my-2 font-medium text-sm tracking-wider flex justify-between ">
                Total
                <span className="text-gray-600 text-sm ml-3">
                  {totalPrice1()}
                </span>
              </p>
              <Link to="/contactUs">
                <button className=" w-100 h-14 p-2 mt-4 bg-zinc-900 text-white hover:bg-amber-700 grow-[1] rounded-[0px]">
                  Checkout
                </button>
              </Link>
            </div>
          </Col>
          <Outlet />
        </Row>
      </Container>
    </Layout>
  );
}

export default ViewCart;
