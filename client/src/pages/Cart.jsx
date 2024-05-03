import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import Newsletter from '../components/Newsletter';
import { useNavigate } from 'react-router-dom';
import { mobile } from '../utilities/responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: '0' })}
`;

const TopBtn = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) =>
    props.tone === 'dark' ? '#000' : 'transparent'};
  color: ${(props) => (props.tone === 'dark' ? '#fff' : '#000')};
`;

const TopTexts = styled.div`
  display: flex;
  gap: 20px;
  ${mobile({ display: 'none' })}
`;

const TopText = styled.p`
  text-decoration: underline;
  cursor: pointer;
  ${mobile({ fontSize: '12px' })}
`;

const Bottom = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({ flexFlow: 'column' })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  ${mobile({ flexFlow: 'column', alignItems: 'center', gap: '10px' })}
`;
const ProductDetail = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  ${mobile({ width: '120px', height: '150px' })}
`;
const Details = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column;
  justify-content: center;
  gap: 30px;
  ${mobile({ gap: '10px' })}
`;
const ProductName = styled.p``;
const ProductDesc = styled.p`
  ${mobile({ display: 'none' })}
`;
const ProductID = styled.p`
  ${mobile({ display: 'none' })}
`;
const ProductMaterials = styled.p``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  gap: 40px;
  justify-content: center;
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
const Price = styled.p`
  font-size: 40px;
  font-weight: 300;
`;
const Hr = styled.hr`
  margin: 25px 0;
  border: 0.3px solid #ccc;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid #ccc;
  padding: 20px;
  display: flex;
  flex-flow: column;
  height: 62vh;
  gap: 40px;
`;
const SummaryTitle = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const SummaryDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;
const SummaryText = styled.p`
  font-weight: 300;
`;
const SummaryPrice = styled.p`
  font-weight: 300;
`;
const BottomBtn = styled.button`
  width: 100%;
  padding: 20px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

const Cart = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopBtn onClick={() => navigate('/shop')}>CONTINUE SHOPPING</TopBtn>
          <TopTexts>
            <TopText>Shopping bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopBtn tone="dark">CHECKOUT NOW</TopBtn>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="images/products/product1.jpg" />
                <Details>
                  <ProductID>
                    <b>ID: </b>1
                  </ProductID>
                  <ProductName>
                    <b>Product: </b>
                    Flower Gift Name
                  </ProductName>
                  <ProductDesc>
                    <b>Desc: </b>Flower Gift Description
                  </ProductDesc>
                  <ProductMaterials>
                    <b>This set included: </b>
                    Chocolate, Roses, Bear ...
                  </ProductMaterials>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Remove />
                  <Amount>1</Amount>
                  <Add />
                </AmountContainer>
                <Price>130.000</Price>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="images/products/product1.jpg" />
                <Details>
                  <ProductID>
                    <b>ID: </b>1
                  </ProductID>
                  <ProductName>
                    <b>Product: </b>
                    Flower Gift Name
                  </ProductName>
                  <ProductDesc>
                    <b>Desc: </b>Flower Gift Description
                  </ProductDesc>
                  <ProductMaterials>
                    <b>This set included: </b>
                    Chocolate, Roses, Bear ...
                  </ProductMaterials>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Remove />
                  <Amount>1</Amount>
                  <Add />
                </AmountContainer>
                <Price>130.000</Price>
              </PriceDetail>
            </Product>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryDetails>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>130.000</SummaryPrice>
            </SummaryDetails>
            <SummaryDetails>
              <SummaryText>Estimated Shipping</SummaryText>
              <SummaryPrice>20.000</SummaryPrice>
            </SummaryDetails>
            <SummaryDetails>
              <SummaryText>Shipping Discount</SummaryText>
              <SummaryPrice>10.000</SummaryPrice>
            </SummaryDetails>
            <SummaryDetails style={{ fontWeight: '600' }}>
              <SummaryText>Total</SummaryText>
              <SummaryPrice>140.000</SummaryPrice>
            </SummaryDetails>
            <BottomBtn>CHECKOUT NOW</BottomBtn>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
export default Cart;
