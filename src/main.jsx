import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from './LayOut/Root.jsx'
import Home from './Pages/Home.jsx'
import Riders from './Pages/Riders.jsx'
import Supports from './Pages/Supports.jsx'
import DashBoard from './Component/DashBoard.jsx'
import Bookings from './Pages/Bookings.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
      path:'/',
      element:<Home></Home>
      },
      {
        path:'/riders',
        element:<Riders></Riders>
      },
      {
        path:'/supports',
        element:<Supports></Supports>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<DashBoard></DashBoard>,
    children:[
      {
        path:'book',
        element:<Bookings></Bookings>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
    <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
