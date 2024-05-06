import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, todoText]);
      setTodoText('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
        <div className='max-w-md bg-white rounded p-4 shadow'>
          <h1 className='text-2xl font-semibold mb-4'>TODO List</h1>
          <div className='mb-4 flex'>
            <input
              type='text'
              className='w-full border rounded px-3 py-2 mr-2'
              placeholder='Enter a task'
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
            <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={addTodo}>
              Add
            </button>
          </div>
          <ul className='list-disc pl-6'>
            {todos.map((todo, index) => (
              <li key={index} className='mb-2 flex justify-between'>
                <span className='text-black'>{todo}</span>
                <button className='text-red-500 ml-2' onClick={() => deleteTodo(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
