import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "../styles.css";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, Outlet } from "react-router-dom";

function Menu() {
  const [status, setStatus] = useState(false);
  const [icon, setIcon] = useState("+");

  const changeIcon = () => {
    setIcon(icon === "+" ? "-" : "+");
    setStatus(!status);
  };

  return (
    <div className="text-light font-normal tracking-wide p-0 m-0 ">


      <h1 className=" pt-1 pb-1 pl-6 ">
        <Link to="/">
          <p className="hover:text-amber-500 text-base ">Home</p>
        </Link>
      </h1>

      <h1 className="pt-1 pb-1 pl-6">
        <Link to="/collections/khaddar">
          <p className="hover:text-amber-500 text-base ">KHADDAR</p>
        </Link>
      </h1>

      <h1 className="pt-1 pb-1 pl-6">
        <Link to="/collections/lawn-vol3-1PC">
          <p className="hover:text-amber-500">
            LAWN-VOL3-1PC
          </p>
          
        </Link>
      </h1>

      <h1 className="pt-1 pb-1 pl-6">
        <Link to="/collections/lawn-vol-1">
          <p className="hover:text-amber-500 text-base ">LAWN-VOL-1</p>
        </Link>
      </h1>

      <h1 className="pt-1 pb-1 pl-6">
        <Link to="/collections/lawn-vol-2">
          <p className="hover:text-amber-500 text-base ">LAWN-VOL-2</p>
        </Link>
      </h1>

      <h1 className="pt-1 pb-1 pl-6">
        <Link to="/collections/lawn-vol3-2PC">
          <p className="hover:text-amber-500 text-base ">LAWN-VOL3-2PC</p>
        </Link>
      </h1>

      <h1 className="pt-1 pb-1 pl-6">
        <Link to="/collections/checkout">
          <p className="hover:text-amber-500 text-base ">CONTACT US</p>
        </Link>
      </h1>


     
      <Outlet />
    </div>
  );
}

export default Menu;
