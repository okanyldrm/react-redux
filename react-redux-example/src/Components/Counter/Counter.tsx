import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterSlice, decrement, increment,incrementByAmount } from '../../StateManagement/CounterSM/Counter'


function Counter() {


  const dispatch = useDispatch();

  return (
    <div style={{ "textAlign": "center" }} >
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button onClick={()=>dispatch(incrementByAmount(4))}>Increment 4</button>
    </div>
  )
}

export default Counter