import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { formatCurrency } from "../utilities/formatCurrency";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { mobile } from "../utilities/responsive";

const Container = styled.div``;
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  ${mobile({ flexFlow: "column", justifyContent: "center" })}
`;

const ImageContainer = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flexFlow: "column" })}
`;
const Image = styled.img`
  height: 90vh;
  width: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const InfoContainer = styled.div`
  flex: 6;
  display: flex;
  flex-flow: column;
  gap: 30px;
  padding: 0 50px;
  ${mobile({ flexFlow: "column" })}
`;
const ItemName = styled.p`
  font-size: 40px;
  font-weight: 600;
  ${mobile({ alignItems: "center", fontSize: "30px" })}
`;
const ItemDesc = styled.p`
  font-size: 24px;
  font-weight: 300;
  ${mobile({ fontSize: "12px" })}
`;
const ItemPrice = styled.p`
  font-size: 40px;
`;

const TitleMaterial = styled.p`
  font-style: italic;
  font-weight: 500;
`;
const ListMaterials = styled.ul`
  ${mobile({ paddingLeft: "20px" })}
`;
const ItemMaterial = styled.li`
  font-weight: 300;
`;

const TextNote = styled.p`
  font-size: 12px;
  color: teal;
`;

const AddContainer = styled.div`
  width: 40%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
`;
const Amount = styled.span`
  border: 1px solid teal;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AddToCartButton = styled.button`
  padding: 15px;
  color: white;
  background-color: teal;
  border: none;
  font-size: 16px;
  font-weight: 500;
  ${mobile({ padding: "4px 10px", fontSize: "10px" })}

  &:hover {
    cursor: pointer;
    background-color: #3a8787;
  }
`;

const Product = () => {
  window.scrollTo(0, 0);
  const product = useLocation().state;
  return (
    <Container>
      <Navbar />
      <Announcement />
      <ItemContainer>
        <ImageContainer>
          <Image src={product.img}></Image>
        </ImageContainer>
        <InfoContainer>
          <ItemName>{product.name}</ItemName>
          <ItemDesc>{product.desc}</ItemDesc>
          <ItemPrice>{formatCurrency(product.price)}</ItemPrice>
          <TitleMaterial>This set includes:</TitleMaterial>
          <ListMaterials>
            {product.materials.map((m) => (
              <ItemMaterial>{m}</ItemMaterial>
            ))}
          </ListMaterials>
          <TextNote>
            Kindly be advised that the featured arrangement will be provided,
            unless circumstances such as seasonal availability or unforeseen
            factors necessitate substitutions. When making a purchase on this
            website, the customer grants authorization for substitutions within
            a designated color palette. Any required substitutions will be made
            at the discretion of our skilled designers.
          </TextNote>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <AddToCartButton>ADD TO CART</AddToCartButton>
          </AddContainer>
        </InfoContainer>
      </ItemContainer>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
