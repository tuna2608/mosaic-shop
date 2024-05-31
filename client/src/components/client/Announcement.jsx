import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #3a7187;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
`;

const Announcement = () => {
  return <Container>In joy or sadness, flowers are our constant friends.</Container>;
};

export default Announcement;
