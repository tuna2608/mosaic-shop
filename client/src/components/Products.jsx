import React from "react";
import styled from "styled-components";
import { latestProducts } from "../data/latestProducts";
import ProductCard from "./ProductCard";
import { mobile } from "../utilities/responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", justifyContent: "flex-start" })}
`;

const Products = () => {
  return (
    <Container>
      {latestProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </Container>
  );
};

export default Products;
