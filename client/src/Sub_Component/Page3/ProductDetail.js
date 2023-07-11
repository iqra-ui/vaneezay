import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/Cart";
import { toast } from "react-toastify";
import ProductLabels from "./ProductLabels";
import Layout from "../../Main_Component/Layout";
import { Col, Container, Row } from "react-bootstrap";
import Magnifier from "react-magnifier";

const ProductDetail = () => {
  const params = useParams();
  const [cart, setCart] = useCart();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProducts] = useState([]);

  //intial product details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //set single product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API + `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.products);
      getSimilarProduct(data?.products._id, data?.products.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get related/similar  products
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API +
          `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={`${product.slug} - vaneezay`} className="">
      <Container  className=" m-0 p-0 mx-auto">
        <Row className="mt-16 px-1    ">
          <Col className=" " xs={12} sm={12} md={6} lg={6} xl={6}>
            <Magnifier
              src={
                process.env.REACT_APP_API +
                `/api/v1/product/product-photo/${product._id}`
              }
            />
          </Col>
          <Col className=" m-0 p-0" xs={12} sm={12} md={6} lg={6} xl={6}>
            <ProductLabels />
          </Col>
        </Row>
        <Row className="mt-20 text-center">
          <p className="text-xl mt-10  text-center mx-auto font-bold">
            RELATED PRODUCTS
          </p>
          {relatedProduct.length < 1 && (
            <p className="text-center">no similar products found</p>
          )}
          {/* {JSON.stringify(relatedProduct, null, 4)} */}
          {relatedProduct?.map((p) => (
            <Col xs={12} sm={6} md={6} lg={3} xl={3} className="p-0 m-0 ">
              <div className="">
                <div className="flex flex-wrap m-2 gap3 justify-around">
                  <div className="card border-none rounded-[0px] mx-2">
                    <img
                      src={
                        process.env.REACT_APP_API +
                        `/api/v1/product/product-photo/${p?._id}`
                      }
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text text-amber-700">{p.price}Rs</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductDetail;
