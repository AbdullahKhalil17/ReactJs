import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <p>Hi From Home Page</p>
  },
  {
    path: '/login',
    element: <p>Hi From login Page</p>
  },
  {
    path: '/signup',
    element: <p>Hi From signup Page</p>
  },
  {
    path: '/users',
    element: <p>Hi From signup Page</p>
  }
]);