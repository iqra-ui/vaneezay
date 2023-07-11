import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUsers, FiEdit, FiPieChart } from "react-icons/fi";

const UserMenu = () => {
  return (
    <div className="">
      <div className="flex justify-center mt-1">
        <div className="text-center border-r pr-5 drop-shadow">
          <p className="text-gray-400 font-sans tracking-wide text-left text-xl font-bold">
            Dashboard{" "}
          </p>
          <p
            className="flex items-center gap-2 text-base text-black hover:text-black py-2 px-4 
          focus-within:bg-[#CF8D09] border-y"
          >
            <NavLink
              className="flex  hover:text-black align-baseline pr-16"
              to="/dashboard/user/profile"
            >
              <span className="mr-4">
                <FiUsers />
              </span>
              <span>Users</span>
            </NavLink>
          </p>
          <p
            className="flex items-center gap-2 text-base text-black hover:text-black py-2 px-4 
          focus-within:bg-[#CF8D09] border-y"
          >
            <NavLink
              className="flex  hover:text-black align-baseline pr-16"
              to="/dashboard/user/orders"
            >
              <span className="mr-4">
                <AiOutlineShoppingCart />
              </span>
              <span>Orders</span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
