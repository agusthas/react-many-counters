import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div className='container'>
      <Card incrementBy={1} />
      <Card incrementBy={5} />
    </div>
  );
}

export default App;
