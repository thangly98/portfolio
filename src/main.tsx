import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from '@components/Layout'
import NotFoundPage from '@components/Pages/404'
import About from '@pages/About'
import Home from '@pages/Home'
import Portfolio from '@pages/Portfolio'
import Contact from '@pages/Contact'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
