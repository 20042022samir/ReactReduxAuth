import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Store/counter-slice';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        showCounter
        &&
        <div className={classes.value}>-- {counter} --</div>
      }
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={decrementHandler}>DECREMENT</button>
        <button onClick={increaseHandler}>INCREASE BY 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;



