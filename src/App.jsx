import { useState } from 'react';
import Cat from './components/Cat';
function App() {
  const [cats, setCats] = useState([{ id: 1, name: 'meme', country: 'Thailand', count: 0 }]);
  const [catName, setCatName] = useState('');
  const [catCountry, setCatCountry] = useState('');
  const [error, setError] = useState(null);
  const increaseCount = (id) => {
    const newCats = cats.map((cat) => {
      if (cat.id === id) {
        return { ...cat, count: cat.count + 1 };
      }
      return cat;
    });
    setCats(newCats);
  };

  const decreaseCount = (id) => {
    const newCats = cats.map((cat) => {
      if (cat.id === id && cat.count > 0) {
        return { ...cat, count: cat.count - 1 };
      }
      return cat;
    });
    setCats(newCats);
  };

  const resetCount = (id) => {
    const newCats = cats.map((cat) => {
      if (cat.id === id) {
        return { ...cat, count: 0 };
      }
      return cat;
    });
    setCats(newCats);
  };

  const summaryCount = cats.reduce((acc, cat) => {
    return acc + cat.count;
  }, 0);

  // AddCat
  const addCat = (e) => {
    e.preventDefault();
    if (!catName || !catCountry) {
      setError('Please fill out all field');
      return;
    }
    const newCat = {
      id: cats.length + 1,
      name: catName,
      country: catCountry,
      count: 0,
    };
    setCats([...cats, newCat]);
    setCatName('');
    setCatCountry('');
    setError(null);
  };

  const removeCat = (id) => {
    const newCats = cats.filter((cat) => cat.id !== id);
    setCats(newCats);
  };

  const totalCat = cats.length;

  // find max count
  const maxCount = cats.reduce((acc, cat) => {
    return acc > cat.count ? acc : cat.count;
  }, 0);

  const maxCountCat = cats.find((cat) => cat.count === maxCount);
  return (
    <div className='flex bg-black text-white'>
      <div className='flex-1 h-screen flex flex-col '>
        <div className='flex-1 flex flex-col p-[20px] text-center justify-center'>
          <form
            onSubmit={addCat}
            className='flex flex-col gap-y-5 p-8 border border-gray-300 rounded-md h-full justify-center text-black'
          >
            <h1 className='text-3xl font-semibold italic'>Join for Click Cat !!</h1>
            <input
              value={catName}
              onChange={(e) => {
                setError(null);
                setCatName(e.target.value);
              }}
              className='w-full p-2 border-2 border-slate-300 rounded-md'
              placeholder='cat'
            />

            <select
              value={catCountry}
              onChange={(e) => {
                setError(null);
                setCatCountry(e.target.value);
              }}
              className='w-full p-2  border-2 border-slate-300 rounded-md'
            >
              <option value='' disabled>
                select country
              </option>
              <option value='Thailand'>Thailand</option>
              <option value='USA'>USA</option>
              <option value='UK'>UK</option>
            </select>
            {error && <p className='text-red-500'>{error}</p>}
            <button
              type='submit'
              className='bg-zinc-200 mt-4 p-2 rounded-xl text-xl text-black hover:bg-gray-700 hover:text-white'
            >
              Join
            </button>
          </form>
        </div>

        <div className='flex-1 flex flex-col p-[20px] text-center justify-center'>
          <div className='flex flex-col gap-y-5 p-8 border border-gray-300 rounded-md h-full justify-center'>
            <div className='flex justify-evenly'>
              <div>
                <h1 className='text-3xl font-semibold italic'>Total Cat</h1>
                <h1 className='text-3xl font-semibold italic'>{totalCat}</h1>
              </div>
              <div>
                <h1 className='text-3xl font-semibold italic'>Total Count</h1>
                <h1 className='text-3xl font-semibold italic'>{summaryCount}</h1>
              </div>
            </div>
            <div className='flex justify-evenly'>
              <div>
                <h1 className='text-3xl font-semibold italic'>LEADER</h1>
                <h1 className='text-3xl font-semibold italic'>
                  {maxCountCat?.name} {maxCountCat?.country}
                </h1>
              </div>
              <div>
                <h1 className='text-3xl font-semibold italic'>Highest Click</h1>
                <h1 className='text-3xl font-semibold italic'>{maxCountCat?.count}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-1 h-screen p-4 flex flex-col gap-y-2 overflow-scroll'>
        {cats.map((cat) => (
          <Cat
            key={cat.id}
            cat={cat}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
            resetCount={resetCount}
            removeCat={removeCat}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
