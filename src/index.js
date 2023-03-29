import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import  router  from './routes'
import { RouterProvider } from 'react-router-dom'
import Header from './components/Header'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
