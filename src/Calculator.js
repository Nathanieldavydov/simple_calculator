import './App.css';
import React, { useState } from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  
  const handleClick = (event) => {
    const { value } = event.target;
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
        setOperator(value);
        setPreviousValue(displayValue);
        setDisplayValue('0');
        break;
      case '=':
        const currentValue = parseFloat(displayValue);
        const result = eval(`${previousValue} ${operator} ${currentValue}`);
        setDisplayValue(String(result));
        setPreviousValue(null);
        setOperator(null);
        break;
      case 'CE':
        setDisplayValue('0');
        setPreviousValue(null);
        setOperator(null);
        break;
      default:
        setDisplayValue(displayValue === '0' ? value : displayValue + value);
        break;
    }
  };
  
  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button value="+" onClick={handleClick}>+</button>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="-" onClick={handleClick}>-</button>
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="*" onClick={handleClick}>x</button>
        <button value="CE" onClick={handleClick}>CE</button>
        <button value="0" onClick={handleClick}>0</button>
        <button value="=" onClick={handleClick}>=</button>
        <button value="/" onClick={handleClick}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
