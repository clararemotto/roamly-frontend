import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/index.js'
import Error from './Pages/Error/index.js'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    // endereço url errado    
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ] 
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)