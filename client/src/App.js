import Home from "./Main_Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Sub_Component/Header";
import Footer from "./Sub_Component/Footer";
import NavigationBar from "./Sub_Component/NavigationBar";
import { useState } from "react";
import ViewCart from "./Sub_Component/Page4/ViewCart";
import Login from "./Sub_Component/Login";
import Register from "./Sub_Component/Register";
import PageNotFound from "./Sub_Component/PageNotFound";
import Layout from "./Main_Component/Layout";
import Dashboard from "./Sub_Component/user/Dashboard";
import Private from "./Main_Component/RoutesPri/Private";
import ForgetPassword from "./Sub_Component/ForgetPassword";
import AdminRoute from "./Main_Component/RoutesPri/AdminRoute";
import AdminDashboard from "./Sub_Component/admin/AdminDashboard";
import CreateProduct from "./Sub_Component/admin/CreateProduct";
import CreateCatagory from "./Sub_Component/admin/CreateCatagory";
import UsersFromAdmin from "./Sub_Component/admin/UsersFromAdmin";
import Orders from "./Sub_Component/user/Orders";
import Profile from "./Sub_Component/user/Profile";
import Products from "./Sub_Component/admin/Products";
import UpdateProduct from "./Sub_Component/admin/UpdateProduct";
import UpdateCategory from "./Sub_Component/admin/UpdateCategory";
import Categorys from "./Sub_Component/admin/Categorys";
import AdminOrders from "./Sub_Component/admin/AdminOrders";
import SearchPage from "./SearchPage";
import CategoryProduct from "./Sub_Component/Page2/CategoryProduct";
import ProductDetail from "./Sub_Component/Page3/ProductDetail";
import ViewWishlist from "./Sub_Component/Page4/ViewWishlist";
import Payment from "./Sub_Component/Page6/Payment";
import ContactUs from "./Sub_Component/Page5/ContactUs";
import Fixed_Button from "./Sub_Component/Fixed_Button";
import Ecommerce from "./Sub_Component/admin/Ecommerce";
import UserInfo from "./Sub_Component/admin/UsersInfo";
import CategoryChat from "./Sub_Component/admin/Chats/CategoryChat";
import ProductChat from "./Sub_Component/admin/Chats/ProductChat";
import UsersChat from "./Sub_Component/admin/Chats/UsersChat";

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Layout>
        <Header />
        {/* <BrowserRouter> */}
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/:slug" element={<CategoryProduct />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          {/* user dashboard  */}
          <Route path="/dashboard" element={<Private />}>
            <Route path="user" element={<Dashboard />} />
            <Route path="user/orders" element={<Orders />} />
            <Route path="user/profile" element={<Profile />} />
          </Route>

          {/* admin dashboard  */}
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/create-product" element={<CreateProduct />} />
            <Route path="admin/products/:slug" element={<UpdateProduct />} />
            <Route path="admin/products" element={<Products />} />
            <Route path="admin/create-catagory" element={<CreateCatagory />} />
            <Route path="admin/category/:slug" element={<UpdateCategory />} />

            <Route path="admin/categorys" element={<Categorys />} />

            <Route path="admin/users" element={<UsersFromAdmin />} />
            <Route path="admin/orders" element={<AdminOrders />} />
            <Route path="admin/statistics" element={<Ecommerce />} />
            <Route path="admin/info" element={<UserInfo />} />
            <Route path="admin/categoryChat" element={<CategoryChat />} />
            <Route path="admin/productChat" element={<ProductChat />} />
            <Route path="admin/userChat" element={<UsersChat />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="/login/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/viewCart" element={<ViewCart />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/wishlist" element={<ViewWishlist />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        {/* </BrowserRouter> */}
        <Fixed_Button />
        <Footer />
      </Layout>
    </>
  );
};

export default App;
