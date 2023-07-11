import React from "react";
import Layout from "../../Main_Component/Layout";
import { Col, Container, Row } from "react-bootstrap";
import AdminMenu from "./AdminMenu";
import { useAuth } from "../../context/Author";
import UsersChat from "./Chats/UsersChat";
import CategoryChat from "./Chats/CategoryChat";
import ProductChat from "./Chats/ProductChat";
import OrdersChat from "./Chats/OrdersChat";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUsers, FiEdit } from "react-icons/fi";
import { BsBox } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiBarChartLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";

const Ecommerce = () => {
  const [auth] = useAuth();
  return (
    <div>
      {" "}
      <Layout title={"Dashboard - VANEEZAY"}>
        <Container fluid className=" m-3 p-3 ">
          <Row className="mt-20">
            <Col md={2}>
              <AdminMenu />
            </Col>
            <Col md={8} className="ml-20">
              <Row>
                <Col>
                  <p className="relative flex justify-between">
                    <p className="bg-[#dd9b17] w-[235px] rounded-lg hover:drop-shadow-lg pt-2 cursor-pointer text-center">
                      <FiUsers className=" text-white text-3xl z-10 ml-24" />
                      <span className="font-bold text-lg text-white ">16%</span>
                      <p className="text-gray text-base text-white ">
                        Users
                      </p>{" "}
                    </p>{" "}
                    <p>
                      <p className="bg-[#e6ae40] w-[235px] rounded-lg hover:drop-shadow-lg pt-2 cursor-pointer text-center">
                        <BsBox className=" text-white text-3xl z-10 ml-24" />
                        <span className="font-bold text-lg text-white ">
                          45%
                        </span>
                        <p className="text-gray text-base text-white ">
                          Products
                        </p>{" "}
                      </p>
                    </p>
                    <p>
                      <p className="bg-[#eec675] w-[235px] rounded-lg hover:drop-shadow-lg pt-2 cursor-pointer text-center">
                        <RiBarChartLine className=" text-white text-3xl z-10 ml-24" />
                        <span className="font-bold text-lg text-white ">
                          19%
                        </span>
                        <p className="text-gray text-base text-white ">
                          Orders
                        </p>
                      </p>
                    </p>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={4} className="mr-36">
                  <CategoryChat />
                </Col>
                <Col md={4}>
                  <ProductChat />
                </Col>
              </Row>
              <Row md={6} className="mt-5 ml-[200px]">
                <OrdersChat />
              </Row>
              <Row md={8} className="mt-5">
                <UsersChat />
              </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Ecommerce;
