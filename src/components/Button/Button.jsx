import React from 'react';
import './Button.css';

const Button = ({ handleClick, icon }) => {
  const Icon = icon;
  return (
    <button className='btn' onClick={handleClick}>
      <Icon />
    </button>
  );
};

export default Button;
