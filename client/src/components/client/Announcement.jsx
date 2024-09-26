import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: var(--orange);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
`;

const Announcement = () => {
  return <Container></Container>;
};

export default Announcement;
