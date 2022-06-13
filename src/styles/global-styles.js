import styled from 'styled-components';
import { Row, Col, Button } from 'antd';

export const CalculatorContainer = styled.section`
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Calculator = styled.div`
  width: 40%;
  height: 80%;
  background-color: gray;
`;

export const Display = styled(Row)`
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 20%;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled(Col)`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: end;
`;

export const RowContainer = styled(Row)`
  height: 16%;
  width: 100%;
  display: flex;
`;

export const ButtonContainer = styled(Col)`
  height: 100%;
  width: 25%;
  background-color: pink;
  border: 1px solid black;
  padding: 0;
`;

export const FunctionButton = styled(Button)`
  height: 100%;
  width: 100%;
  background-color: orange;
  color: #000;
  border: none;
  font-size: 3rem;
  cursor: pointer
`;

export const NumberButton = styled(Button)`
  height: 100%;
  width: 100%;
  background-color: lightgray;
  color: #000;
  border: none;
  font-size: 3rem;
  cursor: pointer
`;

export const UpperButton = styled(Button)`
  height: 100%;
  width: 100%;
  background-color: gray;
  color: #000;
  border: none;
  font-size: 3rem;
  cursor: pointer;
`;

export const ZeroContainer = styled(Col)`
  height: 100%;
  width: 50%;
  padding: 0;
  border: 1px solid black;
`;
