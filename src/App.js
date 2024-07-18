import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function Number({ value , onNumberClick }) {
  return (
    <button className="square" onClick={ onNumberClick }>
      { value }
    </button>
  )
}

function Grid({ onScreen }) {

  function handleNumberClick(i) {
    onScreen(i)
  }

  return (
    <div className='number-grid'>
      <div className='board-row'>
        <Number value="1" onNumberClick={ () =>  handleNumberClick(1)  } />
        <Number value="2" onNumberClick={ () =>  handleNumberClick(2)  } />
        <Number value="3" onNumberClick={ () =>  handleNumberClick(3)  } />
      </div>
      <div className='board-row'>
        <Number value="4" onNumberClick={ () =>  handleNumberClick(4)  } />
        <Number value="5" onNumberClick={ () =>  handleNumberClick(5)  } />
        <Number value="6" onNumberClick={ () =>  handleNumberClick(6)  } />
      </div>
      <div className='board-row'>
        <Number value="7" onNumberClick={ () =>  handleNumberClick(7)  } />
        <Number value="8" onNumberClick={ () =>  handleNumberClick(8)  } />
        <Number value="9" onNumberClick={ () =>  handleNumberClick(9)  } />
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
    setNumber(i);
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