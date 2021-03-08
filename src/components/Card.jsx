import React from 'react';
import Counter from './Counter';

const Card = ({ incrementBy }) => {
  return (
    <div className='card'>
      <div className='content'>
        <span id='title'>{incrementBy}</span>
        <Counter incrementBy={incrementBy} />
      </div>
    </div>
  );
};

export default Card;
