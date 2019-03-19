import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import OperatorButton from './components/ButtonComponents/OperatorButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const buttons = [
  {
    text: 1, 
    buttonStyle: 'button'
  },
  {
    text: 2, 
    buttonStyle: 'button'
  },
  {
    text: 3, 
    buttonStyle: 'button'
  },
  {
    text: 4, 
    buttonStyle: 'button'
  },
  {
    text: 5, 
    buttonStyle: 'button'
  },
  {
    text: 6, 
    buttonStyle: 'button'
  },
  {
    text: 7, 
    buttonStyle: 'button'
  },
  {
    text: 8, 
    buttonStyle: 'button'
  },
  {
    text: 9, 
    buttonStyle: 'button'
  },
]

const clearButton = {
    text: 'clear',
    buttonStyle: 'actionButton',
  };

  const zeroButton = {
    text: 0,
    buttonStyle: 'actionButton',
  };

  const operators = [
    {
      text: '÷',
      buttonStyle: 'operatorButton',
    },
    {
      text: 'X',
      buttonStyle: 'operatorButton',
    },
    {
      text: '—',
      buttonStyle: 'operatorButton',
    },
    {
      text: '+',
      buttonStyle: 'operatorButton',
    },
    {
      text: '=',
      buttonStyle: 'operatorButton',
    },

  ];



const App = () => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="calc-wrapper-wrapper-wrapper">
          <div className="calc-display-wrapper">
            <CalculatorDisplay />
          </div>  
          <div className="calc-wrapper-wrapper">
            <div class="calc-wrapper">
              <ActionButton buttonProp = {clearButton} />
              <div className="number-button-wrapper">
                {buttons.map(button=> (
                    <NumberButton buttonProp ={button} />
                ))}
              </div>
              <ActionButton buttonProp = {zeroButton} />
            </div>
            <div className="operator-button-wrapper">
            {operators.map(button=> (
                <OperatorButton buttonProp ={button} />
            ))}
          </div>        
          </div>
          </div>
        </div>
    </div>
  );
};

export default App;
