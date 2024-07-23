import { useState } from 'react';
import './App.css';

function CalcButton({ value, onButtonClick }) {
  return (
    <button className="square" onClick={ onButtonClick }>
      { value }
    </button>
  )
}

function Grid({ onScreen }) {

  function handleButtonClick(i) {
    onScreen(i)
  }

  return (
    <div className='button-grid'>
      <div className='board-row'>
        <CalcButton value="=" onButtonClick={ () =>  handleButtonClick('=')  } />
        <CalcButton value="+" onButtonClick={ () =>  handleButtonClick('+')  } />
        <CalcButton value="-" onButtonClick={ () =>  handleButtonClick('-')  } />
        <CalcButton value="*" onButtonClick={ () =>  handleButtonClick('*')  } />
        <CalcButton value="/" onButtonClick={ () =>  handleButtonClick('/')  } />
      </div>
      <div className='board-row'>
        <CalcButton value="0" onButtonClick={ () =>  handleButtonClick(1)  } />
        <CalcButton value="1" onButtonClick={ () =>  handleButtonClick(1)  } />
        <CalcButton value="2" onButtonClick={ () =>  handleButtonClick(2)  } />
        <CalcButton value="3" onButtonClick={ () =>  handleButtonClick(3)  } />
      </div>
      <div className='board-row'>
        <CalcButton value="C" onButtonClick={ () =>  handleButtonClick('clear')  } />
        <CalcButton value="4" onButtonClick={ () =>  handleButtonClick(4)  } />
        <CalcButton value="5" onButtonClick={ () =>  handleButtonClick(5)  } />
        <CalcButton value="6" onButtonClick={ () =>  handleButtonClick(6)  } />
      </div>
      <div className='board-row'>
        <CalcButton value="CA" onButtonClick={ () =>  handleButtonClick('all_clear')  } />
        <CalcButton value="7" onButtonClick={ () =>  handleButtonClick(7)  } />
        <CalcButton value="8" onButtonClick={ () =>  handleButtonClick(8)  } />
        <CalcButton value="9" onButtonClick={ () =>  handleButtonClick(9)  } />
      </div>
    </div>
  )
}

function Screen({ number, expression }) {
  return (
    <div className='screen'>
      <p id='expression'> { expression } </p>
      <p> { number } </p>
    </div>
  )
}

function Calculator() {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [operator, setOperator] = useState('');
  const [expression, setExpression] = useState('');

  function handleScreen(i) {
    if (i === 'clear') {
      setOperand1(0);
      return;
    }

    if (i === 'all_clear') {
      setOperand1(0);
      setOperand2(0);
      setExpression('');
      return;
    }

    let new_number = operand1*10 + i

    if (Number.isFinite(i)) {
      if (new_number < Math.pow(10, 8)) {
        setOperand1(new_number);
      }
    } else {
      if (i === '=') {
        let result = calculateExpression(operand1, operand2, operator);
        let new_string = expression + ' ' + operand1;
        setExpression(new_string);
        setOperand1(result);
      } else {
        setOperand2(operand1);
        setOperator(i)
        setExpression(operand1 + ' ' + String(operator));
        setOperand1(0);
      }
    }
 }

  return (
    <div className='container'>
      <div className='calculator'>
        <Screen number={ operand1 } expression={ expression }/>
        <Grid onScreen={ handleScreen }/>
      </div>
    </div>
  );
}

function calculateExpression(op1, op2, operator) {
  // console.log(op2 + " " + operator + " " + op1)
  if (operator === '+') {
    return op2 + op1;
  } else if (operator === '-') {
    return op2 - op1;
  } else if (operator === '*') {
    return op2 * op1;
  } else {
    return Math.floor(op2/op1);
  }

}

export default Calculator