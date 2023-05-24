import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  json,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './components/Home/Home';
import ErrorPage from './ErrorPage';
import FirstPage from './components/FirstPage/FirstPage';
import FeaturedDetails from './components/FeaturedDetails/FeaturedDetails';
import Applied from './components/Applied/Applied';
import Assignment from './components/Assignment/Assignment';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <FirstPage></FirstPage>,
        loader: () => fetch('/jobCategory.json')
      },
      {
        path: '/featuredDetails/:jobsId',
        element: <FeaturedDetails></FeaturedDetails>,
        loader: () => fetch('/featuredJobs.json')
      },
      {
        path: 'applied',
        element: <Applied></Applied>,
      },
      {
        path: 'statistics',
        element: <Assignment></Assignment>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

