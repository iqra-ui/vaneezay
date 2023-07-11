import React from "react";
import { NavLink } from "react-router-dom";
import Orders from "./../user/Orders";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUsers, FiEdit, FiPieChart } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";
import { RiBarChartGroupedFill } from "react-icons/ri";

const AdminMenu = () => {
  return (
    <div className=" flex justify-center mt-1">
      <div className="text-center border-r pr-5 drop-shadow">
        <p className="text-gray-400 font-sans tracking-wide text-left text-xl font-bold">
          STATISTICS
        </p>
        <div className="flex items-center gap-4">
          <p
            className="flex items-center gap-2 text-base text-black hover:text-black py-2 px-4 
          focus-within:bg-[#CF8D09] border-y"
          >
            <NavLink
              to="/dashboard/admin/statistics"
              className="flex  hover:text-black align-baseline pr-16"
            >
              <span className="mr-4">
                <RxDashboard />
              </span>
              <span> Dashboard</span>
            </NavLink>
          </p>
        </div>
        <p className="text-gray-400 font-sans tracking-wide text-left text-xl font-bold">
          DASHBOARD
        </p>
        <div className="flex items-center gap-4">
          <p
            className="flex items-center gap-2 text-base text-black hover:text-black py-2 px-4 
          focus-within:bg-[#CF8D09] border-y"
          >
            <NavLink
              to="/dashboard/admin"
              className="flex  hover:text-black align-baseline pr-16"
            >
              <span className="mr-4">
                <RiAdminLine />
              </span>
              <span> Admin Info</span>
            </NavLink>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p
            className="flex items-center gap-2 text-base text-black hover:text-black py-2 px-4 
          focus-within:bg-[#CF8D09] border-y"
          >
            <NavLink
              to="/dashboard/admin/orders"
              className="flex hover:text-black align-baseline pr-24"
            >
              <span className="mr-4">
                <AiOutlineShoppingCart />
              </span>
              <span>Orders</span>
            </NavLink>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p
            className="flex items-center gap-2 text-base text-black hover:text-black py-2 px-4 
          focus-within:bg-[#CF8D09] border-y"
          >
            <NavLink
              to="/dashboard/admin/users"
              className="flex hover:text-black align-baseline pr-24"
            >
              <span className="mr-4">
                <FiUsers />
              </span>
              <span>Users</span>
            </NavLink>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p
            className="flex items-center gap-2 text-base text-black hover:text-black py-2 px-4 
          focus-within:bg-[#CF8D09] border-y "
          >
            <NavLink
              to="/dashboard/admin/info"
              className="flex hover:text-black align-baseline pr-12"
            >
              <span className="mr-4">
                <RiContactsLine />
              </span>
              <span>About Users</span>
            </NavLink>
          </p>
        </div>
        <p className="text-gray-400 font-sans tracking-wide text-left text-xl font-bold">
          PAGES
        </p>
        <div className="flex items-center gap-4">
          <p
            className="flex items-center gap-2 text-base text-black hover:text-black py-2 px-4 
          focus-within:bg-[#CF8D09] border-y"
          >
            <NavLink
              to="/dashboard/admin/create-catagory"
              className="flex hover:text-black align-baseline pr-5"
            >
              <span className="mr-4">
                <FiEdit />
              </span>
              <span>Create Category</span>
            </NavLink>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p
            className="flex items-center gap-2 text-base text-black hover:text-black py-2 px-4 
          focus-within:bg-[#CF8D09] border-y"
          >
            <NavLink
              to="/dashboard/admin/categorys"
              className="flex  hover:text-black align-baseline pr-20"
            >
              <span className="mr-4">
                <BiCategory />
              </span>
              <span>Category</span>
            </NavLink>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p
            className="flex items-center gap-2 text-base text-black hover:text-black py-2 px-4 
          focus-within:bg-[#CF8D09] border-y"
          >
            <NavLink
              to="/dashboard/admin/create-product"
              className="flex hover:text-black align-baseline pr-9"
            >
              <span className="mr-4">
                <FiEdit />
              </span>
              <span>Create Product</span>
            </NavLink>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p
            className="flex items-center gap-2 text-base text-black hover:text-black py-2 px-4 
            focus-within:bg-[#CF8D09] border-y"
          >
            <NavLink
              to="/dashboard/admin/products"
              className="flex hover:text-black align-baseline pr-20"
            >
              <span className="mr-4">
                <MdProductionQuantityLimits />
              </span>
              <span>Product</span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
