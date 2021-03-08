import React from 'react';
import { FaPlus, FaMinus, FaUndo } from 'react-icons/fa';
import Button from '../Button/Button';
import './Buttons.css';

const Buttons = ({ reset, plus, minus }) => {
  return (
    <div className='button-container'>
      <div className='top'>
        <Button handleClick={reset} icon={FaUndo} />
      </div>
      <div className='bottom'>
        <Button handleClick={minus} icon={FaMinus} />
        <Button handleClick={plus} icon={FaPlus} />
      </div>
    </div>
  );
};

export default Buttons;
