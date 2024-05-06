import React from 'react';

function ButtonGroup({
  handleToggleShowContent,
  handleToggleContentColor,
  handleToggleShowSubContent,
  handleToggleSubContentColor,
}) {
  return (
    <div className='flex gap-2'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleToggleShowContent}
      >
        show content
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleToggleContentColor}
      >
        content color
      </button>
      <button
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleToggleShowSubContent}
      >
        show sub content
      </button>
      <button
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleToggleSubContentColor}
      >
        sub content color
      </button>
    </div>
  );
}

export default ButtonGroup;
