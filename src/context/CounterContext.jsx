import { createContext, useState } from 'react';

// # Step-0
const CounterContext = createContext();

// # Provider Step1 : สร้าง Provider
// ใช้ FunctionComponent => Provider

function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const sharedObj = { count, increment, decrement };
  return <CounterContext.Provider value={sharedObj}>{children}</CounterContext.Provider>;
}
// # Provider Step-2 :  Export ไปครอบ App
export default CounterContextProvider;

// # Consumer Step-1 : Export ContextName
export { CounterContext };
