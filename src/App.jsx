import { createContext } from 'react';
import { useContext } from 'react';

// #1 : CreateContext => ContextName
const AppContext = createContext();

// Provider : ผู้จัดหา <AppContext.Provider>
// Consumer : ผู้ใช้ข้อมูล

function App() {
  const sharedData = 42;

  // # 2Provider : SetUp Provider Component
  // # 3Provider : Set value ที่จะ Shared
  return (
    <AppContext.Provider value={sharedData}>
      <div className='flex justify-center mt-4'>
        <Parent />
      </div>
    </AppContext.Provider>
  );
}

function Parent() {
  // เป็นได้แค่ทางผ่าน prop : prop drilling
  return <Child />;
}

function Child() {
  // #2Consume : useContext(ContextName) => ใช้ Data ได้
  const sharedData = useContext(AppContext);
  return <h1 className='text-2xl italic font-bold'>{sharedData}</h1>;
}

export default App;
