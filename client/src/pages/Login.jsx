import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../utilities/responsive";
import { login } from "../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux"
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

const LoginContainer = styled.div`
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

const LoginForm = styled.form`
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
  &:disabled{
    cursor: not-allowed;
    opacity: 0.7;
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
const Error = styled.p`
text-align: center;
  color: red;
  font-weight: 600;
`


const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector(state => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {email, password})
  }

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
      <LoginContainer>
        <LoginForm>
          <Title>Sign in to A'More</Title>
          <Button>
            <GoogleImage src="./images/google.jpg" />
            Sign in with Google
          </Button>
          <Text>or Sign in with email</Text>
          <Label>Email</Label>
          <Input onChange={(e)=>{setEmail(e.target.value)}}/>
          <Label>
            Password
            <NavLink
              style={{ color: "#000", fontWeight: "500", fontSize: "14px" }}
            >
              Forgot?
            </NavLink>
          </Label>
          <Input type="password" onChange={(e) => { setPassword(e.target.value) }} />
          {error && <Error>Something went wrong!</Error>}
          <Button tone="dark" onClick={handleLogin} disabled={isFetching}>Sign in</Button>
          <Text>
            Don't have an account?
            <NavLink to={"/register"} style={{ color: "#000" }}>
              Sign up
            </NavLink>
          </Text>
        </LoginForm>
      </LoginContainer>
    </Container>
  );
};

export default Login;
