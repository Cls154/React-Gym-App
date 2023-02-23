import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  background-color: rgba(31, 32, 36, 0.2);
  width: 400px;
  flex-direction: column;
  border-radius: 20px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  transform: scale(1, 1);
  transition: 0.2s all ease-in-out;
  text-decoration: none;
  color: #000;

  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.2s all ease-in-out;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const H3 = styled.h3`
  border-radius: 9999px;
  margin-left: ${props => props.left ? '10px' : ''};
  margin-right: ${props => props.right ? '10px' : ''};
  font-size: 25px;
  background-color: ${props => props.bgColor};
  padding: 5px 10px;
  text-align: center;
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 35px;
  padding: 10px 0;
`;