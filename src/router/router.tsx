import { createBrowserRouter } from "react-router-dom";
import HomePage from './../pages/Home/Home.tsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.tsx';
import Details from './../pages/Details/Details.tsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.tsx';
import LoadingSpinner from '../components/LoadingSpinner.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage />,


  },
  {
    path: "/table",
    element: <PrivateRoute><Details /></PrivateRoute>,
    errorElement: <ErrorPage />,

  },
  {
    path: "*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,

  }
]);