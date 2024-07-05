import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import HomePage from './pages/Home/Home.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
   <Toaster
  position="top-right"
  reverseOrder={true}
/>
  </React.StrictMode>,
)
