import React from 'react';
import AddCard from '../AddCard/AddCard';
import Counter from '../Counter/Counter';
import './Card.css';

const Card = ({ incrementBy, isForm, onAdd }) => {
  if (isForm) {
    return (
      <div className='card'>
        <div className='content'>
          <AddCard onAdd={onAdd} />
        </div>
      </div>
    );
  } else {
    return (
      <div className='card'>
        <div className='content'>
          <div className='title'>
            <span className='left'>+ -</span>
            <span className='right'>{incrementBy}</span>
          </div>
          <Counter incrementBy={incrementBy} />
        </div>
      </div>
    );
  }
};

Card.defaultProps = {
  incrementBy: 0,
  isForm: false
};

export default Card;
