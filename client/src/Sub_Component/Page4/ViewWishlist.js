import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { useWish } from "../../context/Wishlist";
import { useAuth } from "../../context/Author";
import { useCart } from "../../context/Cart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../Main_Component/Layout";
import { Button } from "react-bootstrap";

function ViewWishlist() {
  const [wish, setWish] = useWish();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();

  //delete item
  const removeCartItem = (pid) => {
    try {
      let myWish = [...wish];
      let index = myWish.findIndex((item) => item._id === pid);
      myWish.splice(index, 1);
      setWish(myWish);
      localStorage.setItem("wish", JSON.stringify(myWish));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Wishlist - VANEEZAY"}>
      <div className="mt-24 p-5 container">
        <div>
          {wish?.length ? (
            <>
              <table className=" w-100 mt-5 text-center mx-auto p-3">
                <thead className=" justify-between border-t border-b flex">
                  <th className="grow text-center  p-3 hidden md:block">
                    Product
                  </th>
                  <th className="grow text-center p-3 hidden md:block">
                    Stock Status
                  </th>
                  <th className="grow text-center p-3 hidden md:block">
                    Price
                  </th>
                  <th className="grow text-center p-3 hidden md:block"></th>
                </thead>
                <tbody>
                  {wish?.map((p) => (
                    <>
                      {" "}
                      <tr className="md:flex border-b">
                        <td className="pb-3 col-md-4 h-32 md:flex flex-grow mt-2 mb-2 md:justify-around md:items-center">
                          <div className="flex items-center">
                            <button
                              onClick={() => removeCartItem(p._id)}
                              className="m-2 text-sm"
                            >
                              x
                            </button>
                            <img
                              src={process.env.REACT_APP_API+`/api/v1/product/product-photo/${p._id}`}
                              className="card-img-top   md:h-32 md:w-32 "
                              alt={p.name}
                            />
                          </div>

                          <p className="text-gray-700 p-2 md:p-0 md:text-sm">
                            {p.name}
                          </p>

                          <p className="text-gray-700 p-2 md:m-4 ">{p.price}</p>

                          <button className="btn btn-dark bg-gray-900 rounded-[0px] border-none  hover:bg-amber-700 text-white">
                            <Link to="/contactUs" className="hover:text-white">
                              Buy Now
                            </Link>
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <>
              {" "}
              <p className="text-3xl text-center mt-3">
                No Product were added to Wishlist
              </p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default ViewWishlist;
