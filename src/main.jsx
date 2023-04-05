import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/Home';
import ErrorPage from './assets/components/errorPage';
import About from './assets/components/About';
import Book from './assets/components/Book';
import BooksList from './assets/components/BooksList';
import SingleBook from './assets/components/SingleBook';
import Loader from './assets/components/Loader';
const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'book',
        element:<Book></Book>
      },
      {
        path:'books',
        element:<BooksList></BooksList>,
        loader:()=>fetch(`https://api.itbook.store/1.0/new`)
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'bookId/:bookId',
        element:<SingleBook></SingleBook>,
        loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      },
    ]
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
