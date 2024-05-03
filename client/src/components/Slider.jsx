import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data/sliderItems";
import { useNavigate } from "react-router-dom";
import { mobile } from "../utilities/responsive";
// General
const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(prop) => prop.direction === "left" && "10px"};
  right: ${(prop) => prop.direction === "right" && "10px"};
  z-index: 2;
`;

// Banner
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.index * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  margin-left: 100px;
  width: 70%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 100px;
`;
const Desc = styled.p`
  margin: 70px 0;
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 12px 20px;
  background-color: transparent;
  font-size: 30px;
  /* border-radius: 30px; */
  &:hover {
    cursor: pointer;
    background-color: #fff;
  }
`;

const Slider = () => {
  // functions
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/shop");
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper index={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} alt="bannerImage" />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button onClick={handleNavigate}>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
