import React, { useState } from 'react';
import Card from './components/Card/Card';
import './App.css';

function App() {
  const [increment, setIncrement] = useState([1, 5]);
  const onAdd = (incrementValue) => {
    setIncrement([...increment, incrementValue]);
  };

  return (
    <div className='container'>
      {increment.map((val, idx) => (
        <Card key={idx} incrementBy={val} />
      ))}
      <Card isForm={true} onAdd={onAdd} />
    </div>
  );
}

export default App;
