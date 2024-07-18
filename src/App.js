import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function Number({ value , onNumberClick }) {
  return (
    <button onClick={ onNumberClick }>
      { value }
    </button>
  )
}

function Grid() {
  const [number, setNumber] = useState(0);

  function handleNumberClick(i) {
    setNumber(i)
  }

  return (
    <>
    <div>
      <Number value="1" onNumberClick={ () =>  handleNumberClick(1)  } />
      <Number value="2" onNumberClick={ () =>  handleNumberClick(2)  } />
      <Number value="3" onNumberClick={ () =>  handleNumberClick(3)  } />
    </div>
    <div>
      <Number value="4" onNumberClick={ () =>  handleNumberClick(4)  } />
      <Number value="5" onNumberClick={ () =>  handleNumberClick(5)  } />
      <Number value="6" onNumberClick={ () =>  handleNumberClick(6)  } />
    </div>
    <div>
      <Number value="7" onNumberClick={ () =>  handleNumberClick(7)  } />
      <Number value="8" onNumberClick={ () =>  handleNumberClick(8)  } />
      <Number value="9" onNumberClick={ () =>  handleNumberClick(9)  } />
    </div>
    <p> { number } </p>
    </>
  )
}

export default Grid