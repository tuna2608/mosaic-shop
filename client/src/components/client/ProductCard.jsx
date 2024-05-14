import React from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FavoriteBorderOutlined, Search } from '@mui/icons-material';
import { formatCurrency } from '../../utilities/formatCurrency';
import { Link } from 'react-router-dom';
import { mobile } from '../../utilities/responsive';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';

const Info = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  ${mobile({ display: 'flex', flexFlow: 'column', alignItems: 'center' })}
`;

const ImageContainer = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 90%;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  background-color: #e9f5f5;

  &:hover {
    transform: scale(1.1);
  }
`;
const ItemInfo = styled.div`
  margin: 5px;
`;
const ItemName = styled.p`
  margin-bottom: 4px;
  font-weight: 600;
`;
const ItemPrice = styled.p`
  font-weight: 300;
`;

const ProductCard = ({ product }) => {
  // Redux
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity: 1 }));
  };
  return (
    <Container>
      <ImageContainer>
        <Image src={product.img} width={300} />
        <Info>
          <Icon onClick={handleAddToCart}>
            <ShoppingCartOutlinedIcon />
          </Icon>
          <Link to={`/product/${product._id}`}>
            <Icon>
              <Search style={{ color: '#111' }} />
            </Icon>
          </Link>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </ImageContainer>
      <ItemInfo>
        <ItemName>{product.title}</ItemName>
        <ItemPrice>{formatCurrency(product.price)}</ItemPrice>
      </ItemInfo>
    </Container>
  );
};

export default ProductCard;
