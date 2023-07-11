import React from "react";
import Layout from "../../Main_Component/Layout";
import { Col, Container, Row } from "react-bootstrap";
import AdminMenu from "./AdminMenu";
import { useAuth } from "../../context/Author";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <div>
      <Layout title={"Admin Dashboard - Vaneezay"}>
        <Container fluid className=" m-3 p-3 ">
          <Row className="mt-20">
            <Col md={2}>
              <AdminMenu />
            </Col>
            <Col md={7} className="">
              {/* <div className="border shadow my-4 mx-2 flex flex-col justify-center">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{auth?.user?.name}</td>
                      <td>{auth?.user?.email}</td>
                      <td>{auth?.user?.phone}</td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
              <div className="ml-64  text-center  mt-20 w-[400px] text-2xl font-bold text-black shadow  bg-[#CF8D09] rounded-lg p-5">
                <p>
                  Admin Name:
                  <br />
                  <p className="text-lg ">{auth?.user?.name}</p>
                </p>

                <p>
                  Admin Email:
                  <br />
                  <p className="text-lg ">{auth?.user?.email}</p>
                </p>
                <p>
                  Admin Contact:
                  <br />
                  <p className="text-lg ">{auth?.user?.phone}</p>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default AdminDashboard;
