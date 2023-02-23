import styled from "styled-components";

const primary = `
  text-align: center;
  margin-bottom: 50px;
`;

const secondary = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-radius: 15px;
  padding: 10px;
  background-color: #fff;
`;

export const Div = styled.div`
  ${props => props.wrapper ? primary : secondary}
`;

export const P = styled.p`
  background-color: rgba(255, 255, 255);
  margin: 0 5px;
  padding: 3px 10px;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 6px 24px 0px, rgba(0, 0, 0, 0.18) 0px 0px 0px 1px;
  cursor: pointer;
`;