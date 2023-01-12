import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../src/StateManagement/CounterSM/Counter'
import CounterShow from '../src/Components/CounterShow/CounterShow'
import Counter from './Components/Counter/Counter';


function App() {


  const count = useSelector((state:any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{"textAlign":"center"}} >
            <h1>Counter</h1>
        <CounterShow></CounterShow>
        <br />
        <Counter></Counter>
    </div>
  );
}

export default App;
