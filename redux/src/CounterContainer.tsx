import { useSelector, useDispatch } from "react-redux";
import Counter from "./Counter";
import { increase, decrease, setDiff } from "./modules/counter";
import { RootState } from "./modules";

function CounterContainer() {
  const { number, diff } = useSelector((state: RootState) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff: number) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
