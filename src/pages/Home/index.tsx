import React, { useState } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router';
import style from './index.module.less';
import logo from '/logo.svg';

export default function Home(): JSX.Element {
  const [count, setCount] = useState(0);
  const history = useHistory();

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8'>
      <header className='max-w-md w-full space-y-8 items-center'>
        <img src={logo} className='mx-auto h-24 w-auto' alt='logo' />
        <p className='mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100'>
          Hello Vite + React!
        </p>
        <p className='mt-2 text-center text-sm text-gray-600 dark:text-gray-400'>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p className='text-center text-gray-900 dark:text-gray-100'>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p className='text-center'>
          <a className='font-medium text-indigo-600 hover:text-indigo-500 dark:text-pink-400'>
            <span
              className={style.link}
              onClick={() => {
                history.push('/about');
              }}
            >
              About Page
            </span>
          </a>
          {' | '}
          <a
            className='font-medium text-indigo-600 hover:text-indigo-500 dark:text-pink-400'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}
