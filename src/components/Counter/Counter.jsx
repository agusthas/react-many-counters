import React, { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import './Counter.css';

const Counter = ({ incrementBy }) => {
  const [currentCount, setCurrentCount] = useState(0);

  const plusClick = () => {
    setCurrentCount(currentCount + incrementBy);
  };

  const minusClick = () => {
    setCurrentCount(currentCount - incrementBy);
  };

  const reset = () => {
    setCurrentCount(0);
  };

  return (
    <>
      <span
        id='counter'
        className={
          currentCount > 0 ? 'green' : currentCount < 0 ? 'red' : 'white'
        }
      >
        {currentCount}
      </span>
      <Buttons reset={reset} plus={plusClick} minus={minusClick} />
    </>
  );
};

export default Counter;
