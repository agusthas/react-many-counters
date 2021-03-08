import React, { useState } from 'react';
import { FaPlus, FaMinus, FaUndo } from 'react-icons/fa';

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
      <div className='button-container'>
        <div className='top'>
          <button className='btn' onClick={reset}>
            <FaUndo />
          </button>
        </div>
        <div className='bottom'>
          <button className='btn' onClick={minusClick}>
            <FaMinus />
          </button>
          <button className='btn' onClick={plusClick}>
            <FaPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
