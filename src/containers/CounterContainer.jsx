import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter";

const CounterContainer = () => {
  const { number, diff } = useSelector((state) => {
    return {
      number: state.counter.number,
      diff: state.counter.diff,
    };
  });
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increaseAsync());
  const onDecrease = () => dispatch(decreaseAsync());
  const onSetDiff = () => dispatch(diff);
  return (
    <Counter
      number={number}
      diff={diff}
      onSetDiff={onSetDiff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

export default CounterContainer;
