import { createContext } from 'react';

export const Data = createContext();

const DataContext = ({ children }) => {
  const MATH_FUNCTIONS = {
    ADD: '+',
    SUBTRACT: '-',
    DIVIDE: '/',
    MULTIPLY: '*',
    MODUS: '%',
    COMPUTE: '=',
    CLEAR: 'C',
  };
  
  const INPUT_DATA = {
    NUMBERS: 'numbers',
    PERIOD: 'period',
    CONVERT: 'convert',
  };

  const compute = (firstValue, operator, secondValue) => {
    let result;
    if (operator == '+') {
      result = firstValue + secondValue;
      return result;
    }
    if (operator == '-') {
      result = firstValue - secondValue;
      return result;
    }
    if (operator == '*') {
      result = firstValue * secondValue;
      return result;
    }
    if (operator == '/') {
      result = firstValue / secondValue;
      return result;
    }
    if (operator == '%') {
      result = firstValue % secondValue;
      return result;
    }
  };

  const reducer = (state, { type, value }) => {
    switch (type) {
      case INPUT_DATA.NUMBERS:
        if(state.value1 === undefined) return {
          ...state,
          value1: `${value}`
        }
        if(state.value1 !== undefined && state.value1[0] === '0') return {
          ...state,
          value1: `${state.value1.slice(1)}${value}`
        }
        return {
          ...state,
          value1: `${state.value1}${value}`,
        };
      case INPUT_DATA.PERIOD:
        if (value === '.' && state.value1.includes('.') === true) return state;
        if (value === '.' && state.value1.includes('.') === false)
          return {
            ...state,
            value1: `${state.value1}${value}`,
          };
      case INPUT_DATA.CONVERT:
        if (state.value1[0] === undefined)
          return {
            ...state,
            value1: `-0`,
          };
        if (state.value1[0] === '-')
          return {
            ...state,
            value1: state.value1.slice(1),
          };
        if (state.value1[0] !== '-')
          return {
            ...state,
            value1: `-${state.value1}`,
          };
      case MATH_FUNCTIONS.ADD:
        if (state.value2 === undefined && state.value1 === undefined)
          return state;
        if (state.value2 === undefined && state.value1 !== undefined)
          return {
            ...state,
            value2: state.value1,
            operator: '+',
            value1: undefined,
          };
        if (state.value2 !== undefined && state.value1 !== undefined)
          return {
            ...state,
            value2: compute(
              parseFloat(state.value2),
              state.operator,
              parseFloat(state.value1)
            ),
            operator: '+',
            value1: undefined,
          };
      case MATH_FUNCTIONS.SUBTRACT:
        if (state.value2 === undefined && state.value1 === undefined)
          return state;
        if (state.value2 === undefined && state.value1 !== undefined)
          return {
            ...state,
            value2: state.value1,
            operator: '-',
            value1: undefined,
          };
        if (state.value2 !== undefined && state.value1 !== undefined)
          return {
            ...state,
            value2: compute(
              parseFloat(state.value2),
              state.operator,
              parseFloat(state.value1)
            ),
            operator: '-',
            value1: undefined,
          };
      case MATH_FUNCTIONS.DIVIDE:
        if (state.value2 === undefined && state.value1 === undefined)
          return state;
        if (state.value2 === undefined && state.value1 !== undefined)
          return {
            ...state,
            value2: state.value1,
            operator: '/',
            value1: undefined,
          };
        if (state.value2 !== undefined && state.value1 !== undefined)
          return {
            ...state,
            value2: compute(
              parseFloat(state.value2),
              state.operator,
              parseFloat(state.value1)
            ),
            operator: '/',
            value1: undefined,
          };
      case MATH_FUNCTIONS.MULTIPLY:
        if (state.value2 === undefined && state.value1 === undefined)
          return state;
        if (state.value2 === undefined && state.value1 !== undefined)
          return {
            ...state,
            value2: state.value1,
            operator: '*',
            value1: undefined,
          };
        if (state.value2 !== undefined && state.value1 !== undefined)
          return {
            ...state,
            value2: compute(
              parseFloat(state.value2),
              state.operator,
              parseFloat(state.value1)
            ),
            operator: '*',
            value1: undefined,
          };
      case MATH_FUNCTIONS.MODULUS:
        if (state.value2 === undefined && state.value1 === undefined)
          return state;
        if (state.value2 === undefined && state.value1 !== undefined)
          return {
            ...state,
            value2: state.value1,
            operator: '%',
            value1: undefined,
          };
        if (state.value2 !== undefined && state.value1 !== undefined)
          return {
            ...state,
            value2: compute(
              parseFloat(state.value2),
              state.operator,
              parseFloat(state.value1)
            ),
            operator: '%',
            value1: undefined,
          };
      case MATH_FUNCTIONS.CLEAR:
        return {
          value1: undefined,
          value2: undefined,
          operator: undefined,
        };
      case MATH_FUNCTIONS.COMPUTE:
        return {
          ...state,
          value2: undefined,
          operator: undefined,
          value1: compute(
            parseFloat(state.value2),
            state.operator,
            parseFloat(state.value1)
          ),
        };
      default:
        return state;
    }
  };

  return (
    <Data.Provider
      value={{
        MATH_FUNCTIONS,
        INPUT_DATA,
        reducer
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataContext;
