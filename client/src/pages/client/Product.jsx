import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Navbar from '../../components/client/Navbar';
import Announcement from '../../components/client/Announcement';
import Footer from '../../components/client/Footer';
import { formatCurrency } from '../../utilities/formatCurrency';
import Newsletter from '../../components/client/Newsletter';
import { Add, Remove } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { mobile } from '../../utilities/responsive';
import { publicRequest } from '../../utilities/requestMethod';

const Container = styled.div``;
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  ${mobile({ flexFlow: 'column', justifyContent: 'center' })}
`;

const ImageContainer = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,0.3);
  ${mobile({ flexFlow: 'column' })}
`;
const Image = styled.img`
  height: 90vh;
  width: 100%;
  object-fit: cover;
  ${mobile({ height: '30vh' })}
`;

const InfoContainer = styled.div`
  flex: 6;
  display: flex;
  flex-flow: column;
  gap: 30px;
  padding: 0 50px;
  ${mobile({ flexFlow: 'column' })}
`;
const ItemName = styled.p`
  font-size: 40px;
  font-weight: 600;
  ${mobile({ alignItems: 'center', fontSize: '30px' })}
`;
const ItemDesc = styled.p`
  font-size: 24px;
  font-weight: 300;
  ${mobile({ fontSize: '12px' })}
`;
const ItemPrice = styled.p`
  font-size: 40px;
`;

const TitleMaterial = styled.p`
  font-style: italic;
  font-weight: 500;
`;
const ListMaterials = styled.ul`
  padding-left: 20px;
  ${mobile({ paddingLeft: '20px' })}
`;
const ItemMaterial = styled.li`
  font-weight: 300;
`;

const TextNote = styled.p`
  font-size: 12px;
  color: #3a7187;
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
  background-color: #3a7187;
  border: none;
  font-size: 16px;
  font-weight: 500;
  ${mobile({ padding: '4px 10px', fontSize: '10px' })}

  &:hover {
    cursor: pointer;
    background-color: #3a8787;
  }
`;

const Product = () => {
  const [shouldScrollToTop, setShouldScrollToTop] = useState(true);

  useEffect(() => {
    if (shouldScrollToTop) {
      window.scrollTo(0, 0);
      setShouldScrollToTop(false);
    }
  }, [shouldScrollToTop]);

  const [product, setProduct] = useState({});
  const location = useLocation();
  const productID = location.pathname.split('/')[2];

  // Handle Quantity
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type) => {
    if (type === 'desc') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
    setShouldScrollToTop(false);
  };

  // Add to cart
  // const handleAddToCart = () => {};

  useEffect(() => {
    const getProduct = async () => {
      const response = await publicRequest.get(`/products/find/${productID}`);
      setProduct(response.data);
    };
    getProduct();
  }, [productID]);

  // Redux

  return (
    <Container>
      <Navbar />
      <Announcement />
      <ItemContainer>
        <ImageContainer>
          <Image src={product.img}></Image>
        </ImageContainer>
        <InfoContainer>
          <ItemName>{product.title}</ItemName>
          <ItemDesc>{product.desc}</ItemDesc>
          <ItemPrice>{formatCurrency(product.price)}</ItemPrice>
          <TitleMaterial>This set includes:</TitleMaterial>
          <ListMaterials>
            {product?.materials?.map((m) => (
              <ItemMaterial key={m}>{m}</ItemMaterial>
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
              <Remove
                style={{ cursor: 'pointer' }}
                onClick={() => handleQuantity('desc')}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ cursor: 'pointer' }}
                onClick={() => handleQuantity('asc')}
              />
            </AmountContainer>
            <AddToCartButton>
              ADD TO CART
            </AddToCartButton>
          </AddContainer>
        </InfoContainer>
      </ItemContainer>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
