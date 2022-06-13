import { useEffect, useContext, useReducer } from 'react';
import { Data } from '../context/DataContext';
import {
  ButtonContainer,
  Calculator,
  CalculatorContainer,
  Display,
  FunctionButton,
  InputContainer,
  NumberButton,
  RowContainer,
  UpperButton,
  ZeroContainer,
} from '../styles/global-styles';


export default function CalculatorApp() {
  const { MATH_FUNCTIONS, INPUT_DATA, reducer } = useContext(Data);
  const [state, dispatch] = useReducer(reducer, {});

  window.addEventListener('keydown', (e) => {
    if (
      e.key === '0' ||
      e.key === '1' ||
      e.key === '2' ||
      e.key === '3' ||
      e.key === '4' ||
      e.key === '5' ||
      e.key === '6' ||
      e.key === '7' ||
      e.key === '8' ||
      e.key === '8' ||
      e.key === '9'
    ) {
      dispatch({
        type: INPUT_DATA.NUMBERS,
        value: `${e.key}`,
      });
    } else if (
      e.key === '/' ||
      e.key === '+' ||
      e.key === '-' ||
      e.key === '%' ||
      e.key === '*'
    ) {
      switch (e.key) {
        case '+':
          dispatch({
            type: MATH_FUNCTIONS.ADD,
          });
          break
        case '-':
          dispatch({
            type: MATH_FUNCTIONS.SUBTRACT,
          });
          break
        case '*':
          dispatch({
            type: MATH_FUNCTIONS.MULTIPLY,
          });
          break
        case '/':
          dispatch({
            type: MATH_FUNCTIONS.DIVIDE,
          });
          break
        case '%':
          dispatch({
            type: MATH_FUNCTIONS.MODUS,
          });
          break
      }
    } else if (e.key === 'Enter' || e.key === '=') {
      dispatch({
        type: MATH_FUNCTIONS.COMPUTE
      })
    } else if (e.key === 'c' || e.key === 'C') {
      dispatch({
        type: MATH_FUNCTIONS.CLEAR
      })
    } else if (e.key === '.'){
      dispatch({
        type: INPUT_DATA.PERIOD,
        value: '.'
      })
    }
  });

  return (
    <CalculatorContainer>
      <Calculator>
        <Display>
          <InputContainer>{state.value1}</InputContainer>
        </Display>
        <RowContainer>
          <ButtonContainer>
            <UpperButton
              value="C"
              onClick={(e) => {
                dispatch({
                  type: MATH_FUNCTIONS.CLEAR,
                  value: e.currentTarget.value,
                });
              }}
            >
              C
            </UpperButton>
          </ButtonContainer>
          <ButtonContainer>
            {' '}
            <UpperButton
              onClick={() => {
                dispatch({
                  type: INPUT_DATA.CONVERT,
                });
              }}
            >
              ±
            </UpperButton>
          </ButtonContainer>
          <ButtonContainer>
            {' '}
            <UpperButton
              onClick={() => {
                dispatch({ type: MATH_FUNCTIONS.MODUS });
              }}
            >
              %
            </UpperButton>
          </ButtonContainer>
          <ButtonContainer>
            <FunctionButton
              onClick={() => {
                dispatch({ type: MATH_FUNCTIONS.DIVIDE });
              }}
            >
              ÷
            </FunctionButton>
          </ButtonContainer>
        </RowContainer>
        <RowContainer>
          <ButtonContainer>
            {' '}
            <NumberButton
              value="7"
              onClick={(e) => {
                dispatch({
                  type: INPUT_DATA.NUMBERS,
                  value: e.currentTarget.value,
                });
              }}
            >
              7
            </NumberButton>
          </ButtonContainer>
          <ButtonContainer>
            {' '}
            <NumberButton
              value="8"
              onClick={(e) => {
                dispatch({
                  type: INPUT_DATA.NUMBERS,
                  value: e.currentTarget.value,
                });
              }}
            >
              8
            </NumberButton>
          </ButtonContainer>
          <ButtonContainer>
            {' '}
            <NumberButton
              value="9"
              onClick={(e) => {
                dispatch({
                  type: INPUT_DATA.NUMBERS,
                  value: e.currentTarget.value,
                });
              }}
            >
              9
            </NumberButton>
          </ButtonContainer>
          <ButtonContainer>
            <FunctionButton
              onClick={() => {
                dispatch({ type: MATH_FUNCTIONS.MULTIPLY });
              }}
            >
              ×
            </FunctionButton>
          </ButtonContainer>
        </RowContainer>
        <RowContainer>
          <ButtonContainer>
            {' '}
            <NumberButton
              value="4"
              onClick={(e) => {
                dispatch({
                  type: INPUT_DATA.NUMBERS,
                  value: e.currentTarget.value,
                });
              }}
            >
              4
            </NumberButton>
          </ButtonContainer>
          <ButtonContainer>
            {' '}
            <NumberButton
              value="5"
              onClick={(e) => {
                dispatch({
                  type: INPUT_DATA.NUMBERS,
                  value: e.currentTarget.value,
                });
              }}
            >
              5
            </NumberButton>
          </ButtonContainer>
          <ButtonContainer>
            {' '}
            <NumberButton
              value="6"
              onClick={(e) => {
                dispatch({
                  type: INPUT_DATA.NUMBERS,
                  value: e.currentTarget.value,
                });
              }}
            >
              6
            </NumberButton>
          </ButtonContainer>
          <ButtonContainer>
            <FunctionButton
              onClick={() => {
                dispatch({ type: MATH_FUNCTIONS.SUBTRACT });
              }}
            >
              -
            </FunctionButton>
          </ButtonContainer>
        </RowContainer>
        <RowContainer>
          <ButtonContainer>
            {' '}
            <NumberButton
              value="1"
              onClick={(e) => {
                dispatch({
                  type: INPUT_DATA.NUMBERS,
                  value: e.currentTarget.value,
                });
              }}
            >
              1
            </NumberButton>
          </ButtonContainer>
          <ButtonContainer>
            {' '}
            <NumberButton
              value="2"
              onClick={(e) => {
                dispatch({
                  type: INPUT_DATA.NUMBERS,
                  value: e.currentTarget.value,
                });
              }}
            >
              2
            </NumberButton>
          </ButtonContainer>
          <ButtonContainer>
            <NumberButton
              value="3"
              onClick={(e) => {
                dispatch({
                  type: INPUT_DATA.NUMBERS,
                  value: e.currentTarget.value,
                });
              }}
            >
              3
            </NumberButton>
          </ButtonContainer>
          <ButtonContainer>
            <FunctionButton
              onClick={() => {
                dispatch({ type: MATH_FUNCTIONS.ADD });
              }}
            >
              +
            </FunctionButton>
          </ButtonContainer>
        </RowContainer>
        <RowContainer>
          <ZeroContainer>
            <NumberButton
              value="0"
              onClick={(e) => {
                dispatch({
                  type: INPUT_DATA.NUMBERS,
                  value: e.currentTarget.value,
                });
              }}
            >
              0
            </NumberButton>
          </ZeroContainer>

          <ButtonContainer>
            <NumberButton
              value="."
              onClick={(e) => {
                dispatch({
                  type: INPUT_DATA.PERIOD,
                  value: e.currentTarget.value,
                });
              }}
            >
              .
            </NumberButton>
          </ButtonContainer>
          <ButtonContainer>
            <FunctionButton
              onClick={() => {
                dispatch({ type: MATH_FUNCTIONS.COMPUTE });
              }}
            >
              =
            </FunctionButton>
          </ButtonContainer>
        </RowContainer>
      </Calculator>
    </CalculatorContainer>
  );
}
