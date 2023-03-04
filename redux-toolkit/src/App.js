import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {actions } from './store/index';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = ()=>{
    dispatch(actions.increment())
  }

  const decrement = ()=>{
      dispatch(actions.decrement())
  }

  const addBy = ()=>{
    dispatch(actions.addBy(10))
}

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={addBy}>Add + 10</button>
    </div>
  );
}

export default App;
