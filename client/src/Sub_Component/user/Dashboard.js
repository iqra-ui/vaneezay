import React from "react";
import Layout from "../../Main_Component/Layout";
import { Col, Container, Row } from "react-bootstrap";
import UserMenu from "./UserMenu";
import { useAuth } from "../../context/Author";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - VANEEZAY"}>
      <div className="mt-32">
        <Container fluid className="m-3 p-3">
          <Row>
            <Col md={3}>
              <UserMenu />
            </Col>
            <Col md={9}>
              <div className="ml-64  text-center  mt-20 w-[400px] text-2xl font-bold text-black shadow  bg-[#CF8D09] rounded-lg p-5">
                <p>
                  Name:
                  <br />
                  <p className="text-lg ">{auth?.user?.name}</p>
                </p>
                <p>
                  Email:
                  <br />
                  <p className="text-lg ">{auth?.user?.email}</p>
                </p>
                <p>
                  Address:
                  <br />
                  <p className="text-lg ">{auth?.user?.address}</p>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Dashboard;
