import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RootRouter from './router/RootRouter';

// @ts-ignore

function App () {
  const [count, setCount] = useState(0);

  return (
    <RootRouter/>
  );
}

export default App;
