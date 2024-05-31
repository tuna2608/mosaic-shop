import React from "react";
import Navbar from "../../components/client/Navbar";
import Announcement from "../../components/client/Announcement";
import Slider from "../../components/client/Slider";
import Categories from "../../components/client/Categories";
import Products from "../../components/client/Products";
import Newsletter from "../../components/client/Newsletter";
import Footer from "../../components/client/Footer";
import styled from "styled-components";
import { mobile } from "../../utilities/responsive";

const Title = styled.p`
  font-size: 32px;
  color: rgb(253, 0, 0);
  font-weight: 600;
  margin: 20px 20px 0 20px;
  ${mobile({ textAlign: "center" })}
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
`

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Title><Image src="/images/utils/new.jpg" />Latest Products</Title>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
