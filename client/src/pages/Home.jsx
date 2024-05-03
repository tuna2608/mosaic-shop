import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { mobile } from "../utilities/responsive";

const Title = styled.p`
  font-size: 40px;
  font-weight: 600;
  margin: 20px 20px 0 20px;
  ${mobile({ textAlign: "center" })}
`;

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Title>Latest Products</Title>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
