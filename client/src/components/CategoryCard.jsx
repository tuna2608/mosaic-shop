import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../utilities/responsive';

const Container = styled.div`
  flex: 1;
  height: 55vh;
  margin: 3px;
  position: relative;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
    z-index: 2;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '20vh' })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
`;
const Button = styled.button`
  border: none;
  padding: 15px 25px;
  /* border-radius: 20px; */
  background-color: #fff;
  color: gray;
  cursor: pointer;
`;

const CategoryCard = ({ item }) => {
  return (
    <Container>
      <Link to={`/shop/${item.title.toLowerCase()}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>
            <Link
              to={`/shop/${item.title.toLowerCase()}`}
              style={{ textDecoration: 'none', color: '#000' }}
            >
              SHOP NOW
            </Link>
          </Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryCard;
