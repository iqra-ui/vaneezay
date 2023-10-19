import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { RxPerson, RxDashboard } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Modal from "react-bootstrap/Modal";
import Menu from "./Menu";
import "../styles.css";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Search from "./Search";
import { useAuth } from "../context/Author";
import { toast } from "react-toastify";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useCart } from "../context/Cart";
import { Badge } from "antd";
import { useWish } from "../context/Wishlist";

function NavigationBar() {
  const [auth, setAuth] = useAuth();
  const [navSize, setnavSize] = useState("4rem");
  const [navColor, setnavColor] = useState("transparent");
  const [topNav, setTopNav] = useState(40);
  const [lgShow, setLgShow] = useState(false);
  const [wish] = useWish();
  const navigate = useNavigate();
  const [cart] = useCart();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#ffffff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("4rem");
    window.scrollY > 10 ? setTopNav(0) : setTopNav(40);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div>
      <div>
        <nav
          className="fixed w-100 mx-0 drop-shadow"
          style={{
            backgroundColor: navColor,
            height: navSize,
            top: topNav,
            zIndex: "2",
          }}
        >
          {[false].map((expand) => (
            <Navbar
              key={expand}
              expand={expand}
              id="navbar"
              className=" p-2 mt-12 mx-0 mb-5"
            >
              <Container fluid>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                  className="focus:shadow-none hover:shadow-none text-black border-0 hover:scale-125"
                />
                <p className="text-sm font-medium hidden md:inline-block relative top-[5px]">
                  MENU
                </p>

                <Navbar.Brand className="mt-0 mx-auto p-0 ">
                  <Link to="/">
                    <img
                      src="./images/logo2.png"
                      width="100px"
                      height="80px"
                    />
                  </Link>{" "}
                </Navbar.Brand>

                <Navbar.Brand
                  href="#"
                  className="flex flex-row items-baseline relative top-[0px]"
                >
                  <span
                    className="m-2 text-2xl hover:scale-125 hover:text-black rounded-[0px] relative right-[8px]"
                    onClick={() => setLgShow(true)}
                  >
                    <IoIosSearch />
                  </span>

                  <Modal
                    size="xl"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    className="rounded-[0px] mt-3 w-full"
                    style={{ borderRadius: "0" }}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Search />
                  </Modal>

                  <Badge
                    count={wish?.length}
                    color="#CF8D09"
                    showZero
                    className="md:block hidden"
                  >
                    <span className="m-2 text-2xl -top-6 font-light text-gray-800 hover:scale-125 hover:text-gray-800 relative">
                      <Link to="/wishlist" className="hover:text-black ">
                        <IoIosHeartEmpty className="absolute top-[27px] md:right-[-4px] hover:scale-125 md:block hidden" />
                      </Link>
                    </span>
                  </Badge>

                  {!auth.user ? (
                    <>
                      <span className="hidden md:inline-block m-2 text-2xl hover:scale-125">
                        <Link to="/Login" className="hover:text-black">
                          <RxPerson />
                        </Link>
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="hidden md:inline-block m-2 text-2xl ">
                        <NavDropdown
                          // title={auth?.user?.name}
                          title={<GoPerson />}
                          className=" relative top-[23px] right-[4px]"
                          id="navbarScrollingDropdown"
                        >
                          <NavDropdown.Item>
                            <Link
                              className="hover:text-black hover:bg-gray-300 focus-within:bg-gray-300"
                              to={`/dashboard/${
                                auth?.user?.role === 1 ? "admin" : "user"
                              }`}
                            >
                              <p className=" hover:text-amber-800">
                                <RxDashboard />
                              </p>
                            </Link>
                          </NavDropdown.Item>

                          <NavDropdown.Item>
                            <Link
                              to={"/login"}
                              onClick={handleLogout}
                              className="hover:text-black hover:bg-gray-300 focus-within:bg-gray-300"
                            >
                              <p className=" hover:text-amber-800">
                                <IoIosLogOut />
                              </p>{" "}
                            </Link>
                          </NavDropdown.Item>
                        </NavDropdown>
                      </span>
                    </>
                  )}
                  <Badge count={cart?.length} color="#CF8D09" showZero>
                    <span className="m-2 text-2xl -top-6 font-light text-gray-900 hover:scale-125 hover:text-gray-800 relative">
                      <Link to="/viewCart" className="hover:text-black ">
                        <AiOutlineShoppingCart className="absolute top-[27px] md:right-[-7px] right-[-4px]  hover:scale-125 " />
                      </Link>
                    </span>
                  </Badge>
                </Navbar.Brand>

                <Navbar.Offcanvas
                  className="bg-dark  "
                  id={"menuWidth"}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start"
                >
                  <Offcanvas.Header
                    className="hover:text-amber-600 text-light text-white"
                    closeButton
                  >
                    <Offcanvas.Title className="ml-2 mt-1 mb-7  font-sans text-lg font-medium w-75"></Offcanvas.Title>
                  </Offcanvas.Header>

                  <Offcanvas.Body className="p-0 m-0">
                    <Nav className="justify-content-end flex-grow-1 p-0 m-0">
                      <Menu />
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default NavigationBar;
