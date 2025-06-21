import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Authprovider, { Authcontext } from './provider/Authprovider';
import Private from './private/Private';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <Private>
          <About></About>
          </Private>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/regi',
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
  <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
   
  </StrictMode>,
)
