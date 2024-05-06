import React from 'react';
import cat1 from '../assets/c1.png';
import cat2 from '../assets/c2.png';
import sound from '../assets/sound.mp3';

function Cat({ cat, increaseCount, decreaseCount, resetCount, removeCat }) {
  const audio = new Audio(sound);
  let catImg = cat1;
  if (cat.count % 2 === 0) {
    catImg = cat2;
  }
  return (
    <div className='flex justify-between items-center border border-gray-200 rounded-lg p-4 shadow-lg relative'>
      <div
        onClick={() => removeCat(cat.id)}
        className='absolute top-[-15px] right-[-15px] bg-red-400 text-white  w-[30px] h-[30px] rounded-full text-center align-middle cursor-pointer '
      >
        x
      </div>
      <div>
        <div className='w-[100px]'>
          <img className='w-full h-auto object-cover rounded-lg' src={catImg} />
        </div>
      </div>
      <div className='flex-1 px-4'>
        <p className='text-2xl'>
          {cat.name}: ( {cat.country} )
        </p>
        <p>count : {cat.count}</p>
      </div>
      <div className='flex gap-1'>
        <button
          className='px-4 py-2 bg-slate-500 rounded-md'
          onClick={() => {
            // setCount(0);
            resetCount(cat.id);
            audio.play();
          }}
        >
          reset
        </button>
        <button
          className='px-4 py-2 bg-slate-500 rounded-md'
          onClick={() => {
            // setCount(count - 1);
            decreaseCount(cat.id);
            audio.play();
          }}
        >
          -
        </button>
        {/* <span className='p-4'>{count}</span> */}
        <button
          className='px-4 py-2 bg-slate-500 rounded-md'
          onClick={() => {
            // setCount(count + 1);
            increaseCount(cat.id);
            audio.play();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Cat;
