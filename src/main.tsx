import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import HomePage from './pages/Home/Home.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.tsx';
import Details from './pages/Details/Details.tsx';
// ========= Routes================
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/table",
    element: <PrivateRoute><Details/></PrivateRoute>,
  }
]);
// =============Routes============
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
   <Toaster
  position="top-right"
  reverseOrder={true}
/>
  </React.StrictMode>,
)
