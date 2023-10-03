import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNum1, setNum2, setResult, setError } from '../store/CalcSlice';

function Calculator() {
  const dispatch = useDispatch();
  const { num1, num2, result, error } = useSelector(state => state.CalcSlice);

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    if (field === 'num1') {
      dispatch(setNum1(value));
    } else {
      dispatch(setNum2(value));
    }
  };

  const handleCalculate = (operator) => {
    if (isNaN(num1) || isNaN(num2)) {
      dispatch(setError('Введите числа'));
      return;
    }

    switch (operator) {
      case '+':
        dispatch(setResult(Number(num1) + Number(num2)));
        break;
      case '-':
        dispatch(setResult(Number(num1) - Number(num2)));
        break;
      case '*':
        dispatch(setResult(Number(num1) * Number(num2)));
        break;
      case '/':
        if (num2 === '0') {
          dispatch(setError('На ноль делить нельзя'));
        } else {
          dispatch(setResult(Number(num1) / Number(num2)));
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Введите число"
        value={num1}
        onChange={(e) => handleInputChange(e, 'num1')}
      />
      <input
        type="number"
        placeholder="Введите число"
        value={num2}
        onChange={(e) => handleInputChange(e, 'num2')}
      />
      <div>
        <button onClick={() => handleCalculate('+')}>+</button>
        <button onClick={() => handleCalculate('-')}>-</button>
        <button onClick={() => handleCalculate('*')}>*</button>
        <button onClick={() => handleCalculate('/')}>/</button>
      </div>
      {error && <div>{error}</div>}
      {result !== null && <div>Результат: {result}</div>}
    </div>
  );
}

export default Calculator;