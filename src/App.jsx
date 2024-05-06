function App() {
  const data = 42;
  return (
    <div className='flex justify-center mt-4'>
      <Parent data={data} />
    </div>
  );
}

function Parent({ data }) {
  // เป็นได้แค่ทางผ่าน prop : prop drilling
  return <Child num={data} />;
}

function Child({ num }) {
  return <h1 className='text-2xl italic font-bold'>{num}</h1>;
}

export default App;
