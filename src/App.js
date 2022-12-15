import './App.css';

import React, {useState, useReducer} from 'react'


// Global- non-changing variables:
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    CLEAR: 'clear'
}

function reducer(state, action) {
  console.log("state", state)
  console.log("action", action)
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT :
      return { count: state.count -1 }
    case ACTIONS.CLEAR :
      return { count: 0 }
    default:
      return state
  }
}


function App() {
  
  const [state, dispatch] = useReducer(reducer, {count: 0})
  // Similar to useState:
  // const [count, setCount] = useState(0)

  function increment () {
    dispatch({type: 'increment'})
  }

  function decrement () {
    state.count > 0 && dispatch({type: 'decrement'})
  }

  function clear () {
    dispatch({type: 'clear'})
  }


  return (
    <>
    <button onClick={decrement}>-</button>
    <span>{state.count}</span>
    <button onClick={increment}>+</button>
    <button onClick={clear}>CLEAR</button>
    </>
  );
}

export default App;
