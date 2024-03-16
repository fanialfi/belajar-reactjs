import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './pages/404'
import LoginPage from './pages/loginPage.jsx'
import ProductPage from './pages/productsPage'
import RegisterPage from './pages/registerPage'

const router = createBrowserRouter([
  {
    path:"/",
    element:<h1>Hello World</h1>,
    errorElement:<ErrorPage/>
  },{
    path:"/login",
    element: <LoginPage />
  },{
    path:"/register",
    element: <RegisterPage/>
  },{
    path:"/products",
    element: <ProductPage/>,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
