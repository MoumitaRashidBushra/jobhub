import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Apply from './Components/Jobs/Apply';
import BlogP from './Components/Blog/BlogP';
import Header from './Components/Header/Header';
import JobCategoryList from './Components/JobCategoryList/JobCategoryList';
import ViewDetials from './Components/ViewDetials/ViewDetials';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Header></Header>,
        loader: () => fetch('featured.json')
      },
      {
        path: '/:id',
        element: <ViewDetials></ViewDetials>,
        loader: () => fetch('/featured.json')
        // loader: ({ params }) => fetch(`featured.json/${params.jID}`)
        //loader: ({ params }) => console.log(params.jID)
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'job',
        element: <Apply></Apply>
      },
      {
        path: 'blog',
        element: <BlogP></BlogP>
      },



    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
