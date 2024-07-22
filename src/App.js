import logo from './logo.svg';
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

  function handleNumberClick(i) {
    onScreen(i)
  }

  return (
    <div className='button-grid'>
      <div className='board-row'>
        <CalcButton value="=" onButtonClick={ () =>  handleNumberClick(1)  } />
        <CalcButton value="+" onButtonClick={ () =>  handleNumberClick(1)  } />
        <CalcButton value="-" onButtonClick={ () =>  handleNumberClick(1)  } />
        <CalcButton value="*" onButtonClick={ () =>  handleNumberClick(1)  } />
        <CalcButton value="/" onButtonClick={ () =>  handleNumberClick(1)  } />
      </div>
      <div className='board-row'>
        <CalcButton value="0" onButtonClick={ () =>  handleNumberClick(1)  } />
        <CalcButton value="1" onButtonClick={ () =>  handleNumberClick(1)  } />
        <CalcButton value="2" onButtonClick={ () =>  handleNumberClick(2)  } />
        <CalcButton value="3" onButtonClick={ () =>  handleNumberClick(3)  } />
      </div>
      <div className='board-row'>
        <CalcButton value="C" onButtonClick={ () =>  handleNumberClick('clear')  } />
        <CalcButton value="4" onButtonClick={ () =>  handleNumberClick(4)  } />
        <CalcButton value="5" onButtonClick={ () =>  handleNumberClick(5)  } />
        <CalcButton value="6" onButtonClick={ () =>  handleNumberClick(6)  } />
      </div>
      <div className='board-row'>
        <CalcButton value="CA" onButtonClick={ () =>  handleNumberClick(1)  } />
        <CalcButton value="7" onButtonClick={ () =>  handleNumberClick(7)  } />
        <CalcButton value="8" onButtonClick={ () =>  handleNumberClick(8)  } />
        <CalcButton value="9" onButtonClick={ () =>  handleNumberClick(9)  } />
      </div>
    </div>
  )
}

function Screen({ number }) {
  return (
    <div className='screen'>
      <p> { number } </p>
    </div>
  )
}

function Calculator() {
  const [number, setNumber] = useState(0);

  function handleScreen(i) {
    if (i === 'clear') {
      setNumber(0);
      return;
    }
    let new_number = number*10 + i
    if (new_number < Math.pow(10, 8)) {
      setNumber(new_number);
    }
  }

  return (
    <div className='container'>
      <div className='calculator'>
        <Screen number={number} />
        <Grid onScreen={ handleScreen }/>
      </div>
    </div>
  );
}

export default Calculator