import React from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded } from './features/counter/counter-slice'
import logo from './logo.svg'
import './App.css'

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented());
  }

  const handleIncrementAmount = () => {
    dispatch(amountAdded(5))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
          <br />
          <button type="button" onClick={handleIncrementAmount}>
            count +5 is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
