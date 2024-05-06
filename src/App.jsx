function App() {
  const data = 42;
  return (
    <div className='flex justify-center mt-4'>
      <Parent />
    </div>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  return <h1 className='text-2xl italic font-bold'>HARD CODE VALUE</h1>;
}

export default App;
