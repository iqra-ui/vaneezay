import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./../Main_Component/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../context/Author";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );
      if (res.data.success) {
        toast.success("User Login Successfully");

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <div>
      <Layout title={"Reset Account- VANEEZAY"}>
        <div className="p-3 md:p-4 mt-16">
          <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
            <h1 className="text-center text-2xl font-bold">Reset Password</h1>

            <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
              <input
                type={"email"}
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={email}
                required
              />

              <input
                type={"text"}
                id="answer"
                name="answer"
                placeholder="Are you frontend or backend developer?"
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
                required
              />

              <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  className=" w-full bg-slate-200 border-none outline-none "
                  value={newPassword}
                  required
                />
                <span
                  className="flex text-xl cursor-pointer"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <BiShow /> : <BiHide />}
                </span>
              </div>

              <button className="w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
                Reset
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ForgetPassword;
