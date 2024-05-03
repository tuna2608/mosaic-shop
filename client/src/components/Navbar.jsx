import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { mobile } from "../utilities/responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Left side components

const Left = styled.div`
  /* width: 33.3%; */
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  /* padding: 10px; */
  /* border-radius: 20px; */
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

// Left side components

// Center side components

const Center = styled.div`
  /* width: 33.3%; */
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 50px;
  ${mobile({ fontSize: "24px" })}
`;

// Center side components

// Right side components

const Right = styled.div`
  /* width: 33.3%; */
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", justifyContent: "flex-start" })}
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

// Right side components

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN <ArrowDropDownOutlinedIcon />
          </Language>
          <SearchContainer>
            <Input
              placeholder="Search"
              style={{ padding: "6px 0", outline: "none" }}
            />
            <Search style={{ color: "gray", fontSize: "20px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <NavLink
              to={"/home"}
              style={{ textDecoration: "none", color: "#000" }}
            >
              A'More.
            </NavLink>
          </Logo>
        </Center>
        <Right>
          <MenuItem onClick={() => navigate("/register")}>REGISTER</MenuItem>
          <MenuItem onClick={() => navigate("/login")}>SIGN IN</MenuItem>
          <MenuItem onClick={() => navigate("/cart")}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
