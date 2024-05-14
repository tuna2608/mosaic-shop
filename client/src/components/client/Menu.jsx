import styled from 'styled-components';
import { mobile } from '../../utilities/responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin-top: 10px;
  height: 60px;
  background-color: teal;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  ${mobile({ height: '40px', fontSize: '12px' })}
`;

const MenuList = styled.ul`
  font-size: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  ${mobile({ fontSize: '10px', padding: '0 20px' })}
`;
const MenuItem = styled.li`
  text-align: center;
  display: flex;
  align-items: center;
  /* margin-right: 50px; */
  height: 100%;
  padding: 0 20px;
  ${mobile({ marginRight: '20px' })}

  &:hover {
    cursor: pointer;
    background-color: #1a9696;
  }
`;

const Menu = () => {
  return (
    <Container>
      <MenuList>
        <MenuItem>
          <Link
            style={{ color: '#fff', textDecoration: 'none' }}
            to={`/shop/birthday`}
          >
            Birthday
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            style={{ color: '#fff', textDecoration: 'none' }}
            to={`/shop/love`}
          >
            Love & Romance
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            style={{ color: '#fff', textDecoration: 'none' }}
            to={`/shop/graduation`}
          >
            Graduation
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            style={{ color: '#fff', textDecoration: 'none' }}
            to={`/shop/baby`}
          >
            New Baby
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            style={{ color: '#fff', textDecoration: 'none' }}
            to={`/shop/thanks`}
          >
            Thank You
          </Link>
        </MenuItem>
      </MenuList>
    </Container>
  );
};

export default Menu;
