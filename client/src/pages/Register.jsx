import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../utilities/responsive";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const AnimationContainer = styled.div`
  flex: 3;
  ${mobile({
    display: "none",
  })}
`;

const RegisterContainer = styled.div`
  flex: 7;
  display: flex;
  align-items: center;
  ${mobile({
    width: "100%",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    padding: "30px",
  })}
`;

const RegisterForm = styled.form`
  margin-left: 100px;
  padding: 0 60px 30px 60px;
  width: 100%;
  max-width: 416px;
  display: flex;
  flex-flow: column;
  gap: 10px;
  ${mobile({
    margin: "0",
    padding: "30px",
    // alignItems: "center",
    justifyContent: "center",
    height: "100%",
  })}
`;

const Title = styled.h2`
  margin-bottom: 40px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 0;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 0.2px solid #ccc;
  font-weight: 600;
  font-size: 16px;
  background-color: ${(props) =>
    props.tone === "dark" ? "#000" : "transparent"};
  color: ${(props) => (props.tone === "dark" ? "#fff" : "#000")};
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 15px 20px;
  border-radius: 10px;
  border: 0.2px solid #ccc;
  margin-bottom: 20px;
`;

const Text = styled.p`
  text-align: center;
  font-size: 14px;
  color: #8b8282;
  margin: 10px 0;
`;

const Label = styled.p`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;
const GoogleImage = styled.img`
  width: 30px;
  height: 30px;
`;

const Register = () => {
  return (
    <Container>
      <AnimationContainer>
        <video
          src="./videos/animation.mp4"
          playsInline
          autoPlay
          loop
          muted
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            overflowClipMargin: "content-box",
          }}
        ></video>
      </AnimationContainer>
      <RegisterContainer>
        <RegisterForm>
          <Title>Sign up to A'More</Title>
          <Button>
            <GoogleImage src="./images/google.jpg" />
            Sign up with Google
          </Button>
          <Text>or</Text>
          <Label>Username or Email</Label>
          <Input />
          <Label>Password</Label>
          <Input />
          <Label>Confirm Password</Label>
          <Input />
          <Button tone="dark">Sign up</Button>
          <Text>
            Already have an account?
            <NavLink to={"/login"} style={{ color: "#000" }}>
              Sign in
            </NavLink>
          </Text>
        </RegisterForm>
      </RegisterContainer>
    </Container>
  );
};

export default Register;
