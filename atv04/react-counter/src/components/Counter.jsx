import React, { useState, useEffect } from 'react';
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const stopCounter = () => setIsActive(false);

  return (
    <div className='counter-container'>
      <h2>Contador</h2>
      <p>Valor atual: {count}</p>
      <button onClick={stopCounter}>Parar contador</button>
    </div>
  );
};

export default Counter;
