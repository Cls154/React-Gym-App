import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: rgba(31, 32, 36, 0.05);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1320px;
  margin: 0 auto;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

export const Img = styled.img`
  width: 96px;
  height: 84px;
`;

export const H1 = styled.h1`
  margin-left: 15px;
  letter-spacing: 3px;
  font-size: 35px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: ${props => props.left ? '50px' : ''};
  margin-right: ${props => props.right ? '15px' : ''};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 20px;
  color: #000;
  margin-right: ${props => props.right};
`;

export const StyledButtonLink = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  text-transform: uppercase;
  background-color: rgba(31, 32, 36, 0.75);
  border-radius: 9999px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.5px;
`;