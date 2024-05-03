import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { mobile } from "../utilities/responsive";
const Container = styled.div`
  height: 30vh;
  display: flex;
  padding: 20px;
  ${mobile({ flexFlow: "column", alignItems: "center" })}
`;
// Left
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding-left: 30px;
  ${mobile({ alignItems: "center", marginBottom: "10px" })}
`;
const Logo = styled.h1`
  font-size: 50px;
`;
const Desc = styled.p`
  width: 80%;
  line-height: 1.2;
  margin: 20px 0;
  font-size: 18px;
  ${mobile({ width: "100%" })}
`;
const Socials = styled.div`
  display: flex;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #${(props) => props.color};
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

// Center
const Center = styled.div`
  flex: 1;
  padding-left: 30px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
  ${mobile({ display: "none" })}
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 15px;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    color: #585252;
  }
`;

// Right
const Right = styled.div`
  flex: 1;
  padding-left: 30px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 18px;
`;
const Image = styled.img`
  width: 50px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>A'More.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat
          nulla impedit architecto consectetur dignissimos culpa provident
          temporibus doloremque cupiditate repudiandae atque laudantium, totam
          sint quisquam eligendi quo. Doloremque, perferendis.
        </Desc>
        <Socials>
          <Icon color="3B5999">
            <FacebookIcon />
          </Icon>
          <Icon color="E4405F">
            <InstagramIcon />
          </Icon>
          <Icon color="55ACEE">
            <TwitterIcon />
          </Icon>
          <Icon color="E60023">
            <PinterestIcon />
          </Icon>
        </Socials>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <HomeIcon />
          110 Ngu Hanh Son, Da Nang
        </ContactItem>
        <ContactItem>
          <PhoneIcon />
          +84 702 662 251
        </ContactItem>
        <ContactItem>
          <EmailIcon />
          trandinhhieugenz@gmail.com
        </ContactItem>
        <ContactItem>
          <Image src="images/payments/mastercard.png" />
          <Image src="images/payments/visa.png" />
          <Image src="images/payments/paypal.png" />
          <Image src="images/payments/american.png" />
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
