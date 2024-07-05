import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './router/router'
import './index.css'

import {
  RouterProvider
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="top-right"
      reverseOrder={true}
    />
  </React.StrictMode>,
)
