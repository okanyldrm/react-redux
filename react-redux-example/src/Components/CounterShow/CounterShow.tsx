import React from 'react'
import { useSelector } from 'react-redux';

function CounterShow() {
  const count = useSelector((state: any) => state.counter.value);
  return (

    <div>
      <h1 style={{ "color": "green" }}>{count}</h1>
    </div>

  )
}

export default CounterShow