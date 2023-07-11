import { Checkbox, Radio } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Prices } from "../form/Prices";
import { IoIosHeartEmpty } from "react-icons/io";
import { useWish } from "../../context/Wishlist";
import Layout from "../../Main_Component/Layout";
import { FiHeart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import TooltipBtn from "./TooltipBtn";

const CategoryProduct = () => {
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [wish, setWish] = useWish();
  const [hovered, setHovered] = useState(false);
  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+`/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  //filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) all.push(id);
    else all = all.filter((c) => c !== id);
    setChecked(all);
  };

  //lifecycle method ~ initial time get
  useEffect(() => {
    if (!checked.length || !radio.length) getProductsByCat();
  }, [radio.length]);

  // fetch on the base of radio  and check
  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  // get filter
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_API+"/api/v1/product/product-filters",
        { checked, radio }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+"/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllCategory();
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Layout title={`${category.slug} - vaneezay`}>
      <div className="mt-20">
        <Container fluid className="p-0 m-0">
          <Row className="p-0 m-0 mx-auto">
            <Col
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              xxl={3}
              className="pl-16 hidden md:block"
            >
              <div className="">
                <p className="text-xl  font-bold tracking-wide font-sans">
                  Categories
                </p>
                <div className="flex  flex-col">
                  {categories?.map((c) => (
                    <Checkbox
                      key={c._id}
                      className="py-3 hover:text-amber-600 "
                      onChange={(e) => {
                        handleFilter(e.target.checked, c._id);
                      }}
                    >
                      {c.name}
                    </Checkbox>
                  ))}
                </div>
                <div className="flex  flex-col">
                  <p className="text-xl  mt-10  font-bold font-sans">
                    Filter by Price
                  </p>

                  <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                    {Prices?.map((p) => (
                      <div key={p._id}>
                        <Radio value={p.array} className="py-3">
                          {p.name}
                        </Radio>
                      </div>
                    ))}
                  </Radio.Group>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={9}
              lg={9}
              xl={9}
              xxl={9}
              className="p-0 m-0 "
            >
              <div className="">
                <div className="w-100">
                  <div
                    className="flex flex-wrap m-2 gap3 justify-around"
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                  >
                    {products?.map((p) => (
                      <div
                        className="card m-2  border-0 rounded-none"
                        style={{ width: "18rem" }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Card className="bg-transparent text-black text-lg border-0 rounded-none">
                          <Card.Img
                            src={process.env.REACT_APP_API+`/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top "
                            alt={p.name}
                          />
                        </Card>

                        <div
                          className="card-body cursor-pointer"
                          onClick={() => navigate(`/product/${p.slug}`)}
                        >
                          <h5 className="card-title text-center font-Russo One font-extrabold">
                            {p.name}
                          </h5>

                          <p className="card-text text-center font-Russo One text-amber-700">
                            {p.price}.00Rs
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              xxl={3}
              className="pl-16 md:hidden block"
            >
              <div className="">
                <p className="text-xl  font-bold tracking-wide font-sans">
                  Categories
                </p>
                <div className="flex  flex-col">
                  {categories?.map((c) => (
                    <Checkbox
                      key={c._id}
                      className="py-3 hover:text-amber-600 "
                      onChange={(e) => {
                        handleFilter(e.target.checked, c._id);
                      }}
                    >
                      {c.name}
                    </Checkbox>
                  ))}
                </div>
                <div className="flex  flex-col">
                  <p className="text-xl  mt-10  font-bold font-sans">
                    Filter by Price
                  </p>

                  <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                    {Prices?.map((p) => (
                      <div key={p._id}>
                        <Radio value={p.array} className="py-3">
                          {p.name}
                        </Radio>
                      </div>
                    ))}
                  </Radio.Group>
                </div>
              </div>
            </Col>
          </Row>{" "}
        </Container>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
