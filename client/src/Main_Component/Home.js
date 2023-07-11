import React from "react";
import Catagories from "../Sub_Component/Page1/Catagories";

import Layout from "./Layout";
import Newsletter from "../Sub_Component/Page1/Newsletter";
import Slider from "../Sub_Component/Page1/Slider";

function Home() {
  return (
    <Layout title={"VANEEZAY"}>
      <Slider />
      <Catagories />
  
      <Newsletter />
    </Layout>
  );
}

export default Home;
