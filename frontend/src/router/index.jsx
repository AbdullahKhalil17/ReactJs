import { createBrowserRouter } from 'react-router-dom';
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Register.jsx";
import Users from "../pages/Users.jsx";
import NotFound from "../pages/NotFound.jsx";
import Layouts from '../layouts/Layouts.jsx';

export const router = createBrowserRouter([
  {
    element: <Layouts/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/users',
        element: <Users/>
      },
      {
        path: '*',
        element: <NotFound/>
      },
    ]
  },
  
]);