import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import './AddCard.css';

const AddCard = ({ onAdd }) => {
  const [number, setNumber] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    if (number === 0) {
      alert('Cannot be zero!');
      return;
    } else if (isNaN(number)) {
      alert('Not A Number');
    }

    onAdd(number);

    setNumber(0);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <label>Set Increment Value</label>
      <div className='form-control'>
        <input
          type='number'
          value={number === 0 ? '' : number}
          onChange={(e) => setNumber(e.target.valueAsNumber)}
        />
        <button className='btn submit-btn' type='submit'>
          <FaCheck />
        </button>
      </div>
    </form>
  );
};

export default AddCard;
