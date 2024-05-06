import { useState } from 'react';
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform authentication here
    console.log('Email:', email);
    console.log('Password:', password);
    // if user name is codecamp@gmail.com and password == 123456
    if (email === 'codecamp@gmail.com' && password === '123456') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }

    // Reset form after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      {!isLogin ? (
        <form onSubmit={handleSubmit} className='w-full max-w-md'>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleEmailChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={handlePasswordChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your password'
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Sign In
            </button>
          </div>
        </form>
      ) : (
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-2'>Welcome to Codecamp</h1>
          <p className='text-xl'>You have successfully logged in.</p>
          {/* Button for Logout */}
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
            onClick={() => setIsLogin(false)}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
