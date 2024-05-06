import { createContext } from 'react';

// # Step-0
const CounterContext = createContext();

// # Provider Step1 : สร้าง Provider
// ใช้ FunctionComponent => Provider

function CounterContextProvider({ children }) {
  return <CounterContext.Provider value={42}>{children}</CounterContext.Provider>;
}
// # Provider Step-2 :  Export ไปครอบ App
export default CounterContextProvider;

// # Consumer Step-1 : Export ContextName
export { CounterContext };
