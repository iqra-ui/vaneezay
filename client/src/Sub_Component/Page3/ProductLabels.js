import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { AiOutlineHeart } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { Link, Outlet, useParams } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { useCart } from "../../context/Cart";
import { useWish } from "../../context/Wishlist";
import { Drawer } from "antd";
import { toast } from "react-toastify";

function ProductLabels({}) {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [wish, setWish] = useWish();
  const [open, setOpen] = useState(false);
  const [o, setO] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [count, setCount] = useState(1);
  const handleDec = () => {
    product.quantity > 1 ? setCount(product.quantity--) : setCount(1);
  };
  const handleInc = () => {
    product.quantity < 1 ? setCount(1) : setCount(product.quantity++);
  };

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

  return (
    <div className="mt-5 p-3">
      <h2 className="font-bold  text-3xl">{product.name}</h2>

      <span>
        <p className="text-2xl text-amber-700">{product.price}.00Rs</p>
      </span>
      <hr />

      <p class="p-1 leading-7">
        {product.description}
        <br />
        Shirt Front: Digital Print Dhanak(1.4 Y)
        <br />
        Shirt Back: Digital Print Dhanak (1.40 y)
        <br />
        Sleeves: Digital Print Dhanak (0.70 y)
        <br />
        Dupatta : Digital Print Dhanak (2.25 y)
        <br />
        Trouser: Digital Print Dhanak (2.5 y)
        <br />
      </p>
      <span className="flex column ">
      

        <div className=" flex column justify-evenly  h-15 w-24 border-b border-l border-r border-t border-black">
          <button className=""
          onClick={handleDec}>
            -
          </button>
          <button className="">
            {count}
          </button>
          <button className=" "
           onClick={handleInc}>
            +
          </button>
        </div>
        <div className="text-light">
          <button
            className=" w-56 h-14 p-2  bg-zinc-900  hover:bg-amber-600"
            style={{ borderRadius: 0, marginLeft: 15 }}
            onClick={() => {
              setCart([...cart, product]);
              setO(showDrawer);
              localStorage.setItem("cart", JSON.stringify([...cart, product]));
              toast.success("item added to cart");
            }}
          >
            BuyNow
          </button>
        </div>
      </span>

      <Drawer title="" placement="right" onClose={onClose} open={open}>
        <p className="text-xl font-medium">Shopping Cart</p>
        <div className="flex column ">
          <img
            className="h-24 ml-5 mt-10"
            src={
              process.env.REACT_APP_API +
              `/api/v1/product/product-photo/${product._id}`
            }
          />
          <Link className="no-underline">
            <p className="text-base  text-black ml-4 mt-10 hover:text-amber-700 ">
              {product.name}
            </p>
            <p className="text-base  text-black ml-4 mt-10 hover:text-amber-700 ">
              {product.quantity} x {product.price}
            </p>
          </Link>

          <p className="  text-sm mt-11 ml-12 text-gray-600  hover:text-amber-700 cursor-pointer">
            <RxCross1 onClick={() => removeCartItem(product._id)} />
          </p>
        </div>
        <div>
          <p className=" absolute ml-10 font-medium mt-4 text-black">
            Subtotal:
          </p>
          <span className="absolute text-black mt-4 left-[237px]">
            {product.price}
          </span>
        </div>
        <div className="absolute ml-4">
          <Link to="/viewCart">
            <button
              className=" w-72 h-14 p-2 mt-20 bg-zinc-900 text-white hover:bg-amber-700"
              style={{ borderRadius: 0, marginLeft: 15 }}
            >
              View cart
            </button>
          </Link>

          <Link to="/contactUs">
            <button
              className=" w-72 h-14 p-2 mt-3 bg-zinc-900 text-white hover:bg-amber-700"
              style={{ borderRadius: 0, marginLeft: 15 }}
            >
              Checkout
            </button>
          </Link>
        </div>
      </Drawer>

      <br />
      <div className=" hover:text-amber-600  cursor-pointer">
        <AiOutlineHeart />
        <p
          className="text-xs ml-10 "
          style={{ marginTop: -17 }}
          onClick={() => {
            setWish([...wish, product]);
            localStorage.setItem("wish", JSON.stringify([...wish, product]));
          }}
        >
          ADD TO WISHLIST
        </p>
      </div>
      <br />
      <div className="w-36 h-10 text-light drop-shadow-xl">
        <button
          className="w-36 h-10 flex column p-2 bg-green-500 hover:bg-zinc-900 hover:-translate-y-1 transition ease-in-out delay-150"
          style={{ borderRadius: 0 }}
        >
          <p style={{ marginLeft: 14, marginTop: 3 }}>
            <BsWhatsapp />
          </p>
          <p style={{ marginLeft: 9 }}>Order Now</p>
        </button>
      </div>
      <div className="top-2">
        <hr />
      </div>
      <br />
      <div>
        <p className="text-xs">
          Category:
          <Link to="" className="ml-2 hover:underline text-black">
            {product.description}
          </Link>
        </p>
      </div>
      <div className="top-2">
        <hr />
      </div>
      <div className="flex column mt-2">
        <p className="hover:text-amber-600">
          <FaFacebookF />
        </p>
        <p className="hover:text-amber-600 ml-5">
          <BsTwitter />
        </p>
        <p className="hover:text-amber-600 ml-5">
          <FaLinkedinIn />
        </p>
        <p className="hover:text-amber-600 ml-5">
          <FaPinterestP />
        </p>
      </div>

      <Outlet />
    </div>
  );
}

export default ProductLabels;
