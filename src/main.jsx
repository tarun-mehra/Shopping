import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Cart from './pages/Cart.jsx'
import Register from './pages/Register.jsx'
import SignUp from './pages/SignUp.jsx'
import Product from './pages/Product.jsx'
import Login from './pages/Login.jsx'

let myrouter = createBrowserRouter ([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/product',
        element : <Product/>
      },
      {
        path : '/cart',
        element : <Cart/>
      },
      {
        path : '/register',
        element : <Register/>
      },
      {
        path : '/sign-up',
        element : <SignUp/>
      },
      {
        path : '/login',
        element : <Login/>
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myrouter} />
  </StrictMode>,
)
