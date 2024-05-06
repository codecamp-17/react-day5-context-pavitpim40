import { useState, useContext } from 'react';
import { CounterContext } from './context/CounterContext';
function App() {
  // # ConSumer Step 2 : useContext for Access Data
  const data = useContext(CounterContext);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='max-w-xs mx-auto p-6 bg-white shadow-lg rounded-md'>
      <h2 className='text-3xl font-bold mb-4'>Counter</h2>
      <div className='flex items-center justify-between'>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
          onClick={decrement}
        >
          Decrement
        </button>
        <span className='text-xl font-semibold'>{data}</span>
        <button
          className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
