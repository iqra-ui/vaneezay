import React, { useState, useEffect } from "react";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useCart } from "../../context/Cart";
import { useAuth } from "../../context/Author";
import { GrFormClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Layout from "../../Main_Component/Layout";

const Payment = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const [cart1, setC] = useState([]);

  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+"/api/v1/product/braintree/token"
      );
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post(
        process.env.REACT_APP_API+"/api/v1/product/braintree/payment",
        { nonce, cart }
      );
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Layout title={"Information - VANEEZAY - Contact us"}>
      <div className="">
        <div className=" md:p-3 mt-12">
          <div className="w-full max-w-md bg-white m-auto flex  text-center flex-col ">
            <h1 className="text-center text-xl font-bold">
              Choose your payment method :
            </h1>
            {auth?.user?.address ? (
              <>
                <div className="mb-3">
                  <p>Current Address</p>
                  <p>{auth?.user?.address}</p>
                  <button
                    className="btn btn-dark border-none text-white rounded-[0px] px-4 py-2 hover:bg-amber-700"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-3">
                  {auth?.token ? (
                    <button
                      className="btn btn-dark border-none text-white rounded-[0px] px-4 py-2 hover:bg-amber-700"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btn btn-dark border-none text-white rounded-[0px] px-4 py-2 hover:bg-amber-700"
                      onClick={() =>
                        navigate("/login", {
                          state: "/viewCart",
                        })
                      }
                    >
                      Please Login to CheckOut
                    </button>
                  )}
                </div>
              </>
            )}
            <div className="mt-2">
              {!clientToken || !cart?.length ? (
                ""
              ) : (
                <>
                  <DropIn
                    options={{
                      authorization: clientToken,
                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(instance) => setInstance(instance)}
                  />
                  <button
                    className="rounded-[0px] text-white px-4 py-2 btn btn-primary border-none"
                    onClick={handlePayment}
                    disabled={loading || !instance || !auth?.user?.address}
                  >
                    {loading ? "processing..." : "make payment"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
