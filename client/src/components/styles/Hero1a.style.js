import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivA = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center; 
  max-width: 1320px; 
  margin: 0 auto; 
  padding: 20px 0; 
  border-bottom: 2px solid #000;
`;

export const DivB = styled.div`
  max-width: 587px;
  padding: 30px;
`;

export const H1 = styled.h1` 
  word-spacing: 10px; 
  font-size: 65px;
`;

export const Span = styled.span`
  color: rgba(150, 25, 25, 0.856);
  text-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px ,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const P = styled.p`
  margin-top: 25px;
  margin-bottom: 55px; 
  font-size: 18.5px; 
`;

export const StyledLink = styled(Link)` 
  padding: 12px 64px; 
  border: none; 
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px, 
    rgba(0, 0, 0, 0.12) 0px -12px 30px, 
    rgba(0, 0, 0, 0.12) 0px 4px 6px, 
    rgba(0, 0, 0, 0.17) 0px 12px 13px, 
    rgba(0, 0, 0, 0.09) 0px -3px 5px; 
  border-radius: 10px; 
  text-decoration: none;
  background-color: rgba(31, 32, 36, 0.75);
  color: #fff;
  cursor: pointer;
`;

export const Img = styled.img` 
  width: 587px;
  padding: 30px;
`;