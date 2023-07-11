import React from "react";
import Layout from "../../Main_Component/Layout";
import useCategory from "../../hooks/useCategories";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();
  return (
    <div className="mt-20">
      {/* <Layout title={"all categories"}> */}
      <Container className="my-16 lg:px-32 xxl:px-32 md:px-20">
        <Row className="rounded-[0px]">
          <div className=" text-center text-4xl font-extrabold font-Russo One">
            Women
          </div>
          <p className=" text-center text-amber-700 text-sm">COLLECTION 2022</p>
          {categories?.map((c) => (
            <Col
              md={4}
              lg={4}
              xl={4}
              xxl={4}
              xs={12}
              className="text-center rounded-[0px]"
            >
              <Link
                to={`/collections/${c.slug}`}
                className="hover:text-black rounded-[0px]"
              >
                <div className="card m-2 p-2 border-none rounded-[0px]">
                  <img
                    src={process.env.REACT_APP_API+`/api/v1/category/category-photo/${c._id}`}
                    className="card-img-top rounded-[0px]"
                    alt={c.name}
                  />
                  <div className="card-body rounded-[0px]">
                    <h5 className="card-title text-center font-sans text-lg text-slate-600">
                      {c.name}
                    </h5>
                    {/* <p className="card-text text-center font-sans underline hover:font-bold cursor-pointer ">
                      {c.description.substring(0, 30)}
                    </p> */}
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      {/* </Layout> */}
    </div>
  );
};

export default Categories;
